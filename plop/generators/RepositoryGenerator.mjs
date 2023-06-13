/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
/* eslint-disable func-names */
import * as _ from './constants.mjs'

export default function (plop) {
  return {
    description: 'Generate a new repository',
    prompts: [
      {
        type: 'input',
        name: 'repositoryName',
        message:
          `By default, the repository name will have a suffix of "${_.highlight_levels[1](
            'Repository'
          )}".\n` + `Enter the name of the repository (in ${_.highlight_levels[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Repository name is required.'),
      },
    ],
    actions: [
      function customAction(data) {
        const repositoryNameSuffix = 'Repository'
        data.repositoryName = `${data.repositoryName}${repositoryNameSuffix}`
        return `The final name of the repository is: ${_.highlight_levels[2](data.repositoryName)}`
      },
      {
        type: 'add',
        path: 'src/repositories/index.js',
        templateFile: 'plop/templates/index-collection.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/repositories/{{repositoryName}}.js',
        templateFile: 'plop/templates/Repository.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `src/repositories/index.js`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        separator: '\n',
        unique: true,
        template: `export { default as {{repositoryName}} } from './{{repositoryName}}';`,
        abortOnFail: true,
      },
    ],
  }
}

import {inputSymbol, highlightText, formatSourceCode} from './helpers.mjs'

export default function RepositoryGenerator(plop) {
  return {
    description: 'Generate a new repository',
    prompts: [
      {
        type: 'input',
        name: 'repositoryName',
        message:
          `By default, the repository name will have` +
          ` a suffix of "${highlightText[1]('Repository')}".\n` +
          `${inputSymbol} Enter the name of the repository (in ${highlightText[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Repository name is required.'),
      },
    ],
    actions: [
      function customAction(data) {
        const _ = data
        const repositoryNameSuffix = 'Repository'
        _.repositoryName = `${data.repositoryName}${repositoryNameSuffix}`
        return `The final name of the repository is: ${highlightText[2](data.repositoryName)}`
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
        transform: formatSourceCode,
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
        template: `export { default as {{repositoryName}} } from './{{repositoryName}}'`,
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `src/repositories/index.js`,
        transform: formatSourceCode,
        abortOnFail: true,
      },
    ],
  }
}

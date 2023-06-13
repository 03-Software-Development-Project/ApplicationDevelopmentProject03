/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
/* eslint-disable func-names */
import * as _ from './constants.mjs'

export default function (plop) {
  return {
    description: 'Generate a new navigator',
    prompts: [
      {
        type: 'input',
        name: 'navigatorName',
        message:
          `By default, the navigator name will have a suffix of "${_.highlight_levels[1](
            'Navigator'
          )}".\n` + `Enter the name of the navigator (in ${_.highlight_levels[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Navigator name is required.'),
      },
    ],
    actions: [
      function customAction(data) {
        const navigatorNameSuffix = 'Navigator'
        data.navigatorName = `${data.navigatorName}${navigatorNameSuffix}`
        return `The final name of the navigator is: ${_.highlight_levels[2](data.navigatorName)}`
      },
      {
        type: 'add',
        path: 'src/navigation/index.js',
        templateFile: 'plop/templates/index-collection.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/navigation/{{navigatorName}}.js',
        templateFile: 'plop/templates/Navigator.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `src/navigation/index.js`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        separator: '\n',
        unique: true,
        template: `export { default as {{navigatorName}} } from './{{navigatorName}}';`,
        abortOnFail: true,
      },
    ],
  }
}

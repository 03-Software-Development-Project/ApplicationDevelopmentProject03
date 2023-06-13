/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
/* eslint-disable func-names */
import * as _ from './constants.mjs'

export default function (plop) {
  return {
    description: 'Generate a new utility/helper function',
    prompts: [
      {
        type: 'input',
        name: 'utilityFunctionName',
        message: `Enter the name of the utility function (in ${_.highlight_levels[0](
          'CamelCase'
        )}):`,
        filter: (value) => plop.getHelper('camelCase')(value),
        validate: (value) => (value !== '' ? true : 'Utility function name is required.'),
      },
    ],
    actions: [
      (data) =>
        `The final name of the utility function is: ${_.highlight_levels[2](
          data.utilityFunctionName
        )}`,
      {
        type: 'add',
        path: 'src/utils/index.js',
        templateFile: 'plop/templates/index-collection.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/utils/{{utilityFunctionName}}.js',
        templateFile: 'plop/templates/utilityFunction.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `src/utils/index.js`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        separator: '\n',
        unique: true,
        template: `export { default as {{utilityFunctionName}} } from './{{utilityFunctionName}}';`,
        abortOnFail: true,
      },
    ],
  }
}

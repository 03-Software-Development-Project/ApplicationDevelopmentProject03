import {highlightText, formatSourceCode} from './helpers.mjs'

export default function UtilityFunctionGenerator(plop) {
  return {
    description: 'Generate a new utility/helper function',
    prompts: [
      {
        type: 'input',
        name: 'utilityFunctionName',
        message: `Enter the name of the utility function (in ${highlightText[0]('CamelCase')}):`,
        filter: (value) => plop.getHelper('camelCase')(value),
        validate: (value) => (value !== '' ? true : 'Utility function name is required.'),
      },
    ],
    actions: [
      (data) =>
        `The final name of the utility function is: ${highlightText[2](data.utilityFunctionName)}`,
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
        transform: formatSourceCode,
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
        template: `export { default as {{utilityFunctionName}} } from './{{utilityFunctionName}}'`,
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `src/utils/index.js`,
        transform: formatSourceCode,
        abortOnFail: true,
      },
    ],
  }
}

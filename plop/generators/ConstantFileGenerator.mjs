import {highlightText, formatSourceCode} from './helpers.mjs'

export default function ConstantFileGenerator(plop) {
  return {
    description: 'Generate a constant file',
    prompts: [
      {
        type: 'input',
        name: 'constantFileName',
        message: `Enter the name of the constant file (in ${highlightText[0]('CamelCase')}):`,
        filter: (value) => plop.getHelper('camelCase')(value),
        validate: (value) => (value !== '' ? true : 'Constant file name is required.'),
      },
    ],
    actions: [
      (data) =>
        `The final name of the constant file` +
        ` is: ${highlightText[2](`${data.constantFileName}.js`)}`,
      {
        type: 'add',
        path: 'src/constants/index.js',
        templateFile: 'plop/templates/index-collection.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/constants/{{constantFileName}}.js',
        templateFile: 'plop/templates/constantFile.js.hbs',
        transform: formatSourceCode,
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `src/constants/index.js`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        separator: '\n',
        unique: true,
        template: `export { default as {{constantFileName}} } from './{{constantFileName}}'`,
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `src/constants/index.js`,
        transform: formatSourceCode,
        abortOnFail: true,
      },
    ],
  }
}

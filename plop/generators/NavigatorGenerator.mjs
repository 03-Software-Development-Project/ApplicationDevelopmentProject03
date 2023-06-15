import {inputSymbol, highlightText, formatSourceCode} from './helpers.mjs'

export default function NavigatorGenerator(plop) {
  return {
    description: 'Generate a new navigator',
    prompts: [
      {
        type: 'input',
        name: 'navigatorName',
        message:
          `By default, the navigator name will have` +
          ` a suffix of "${highlightText[1]('Navigator')}".\n` +
          `${inputSymbol} Enter the name of the navigator (in ${highlightText[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Navigator name is required.'),
      },
    ],
    actions: [
      function customAction(data) {
        const _ = data
        const navigatorNameSuffix = 'Navigator'
        _.navigatorName = `${data.navigatorName}${navigatorNameSuffix}`
        return `The final name of the navigator is: ${highlightText[2](data.navigatorName)}`
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
        path: 'src/navigation/{{navigatorName}}.jsx',
        templateFile: 'plop/templates/Navigator.jsx.hbs',
        transform: formatSourceCode,
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
        template: `export { default as {{navigatorName}} } from './{{navigatorName}}'`,
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `src/navigation/index.js`,
        transform: formatSourceCode,
        abortOnFail: true,
      },
    ],
  }
}

import {inputSymbol, highlightText, formatSourceCode} from './helpers.mjs'

export default function ScreenGenerator(plop) {
  return {
    description: 'Generate a new screen',
    prompts: [
      {
        type: 'input',
        name: 'screenName',
        message:
          `By default, the screen name will have a suffix of "${highlightText[1]('Screen')}".\n` +
          `${inputSymbol} Enter the name of the screen (in ${highlightText[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Screen name is required.'),
      },
      {
        type: 'input',
        name: 'viewModelName',
        message:
          `By default, the name of the view model for this screen will have` +
          ` a suffix of "${highlightText[1]('ViewModel')}".\n` +
          `${inputSymbol} Enter the name of the view model` +
          ` (in ${highlightText[0]('PascalCase')}, leave blank to use the screen name):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
      },
    ],
    actions: [
      function customAction(data) {
        const _ = data
        const screenNameSuffix = 'Screen'
        _.screenName = `${data.screenName}${screenNameSuffix}`
        return `The final name of the screen is: ${highlightText[2](data.screenName)}`
      },
      function customAction(data) {
        const _ = data
        const viewModelNamesuffix = 'ViewModel'

        // Check whether viewModelName is an empty string, null or undefined
        // Then whether screenName is an empty string, null or undefined
        // Then a default string value 'MyScreen'
        _.viewModelName =
          (data.viewModelName || data.screenName || 'MyScreen') + viewModelNamesuffix

        return `The final name of the view model is: ${highlightText[2](data.viewModelName)}`
      },
      {
        type: 'add',
        path: 'src/screens/index.js',
        templateFile: 'plop/templates/index-collection.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/screens/{{screenName}}/index.js',
        templateFile: 'plop/templates/Screen/index.js.hbs',
        transform: formatSourceCode,
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/screens/{{screenName}}/styles.js',
        templateFile: 'plop/templates/Screen/styles.js.hbs',
        transform: formatSourceCode,
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/screens/{{screenName}}/{{screenName}}.jsx',
        templateFile: 'plop/templates/Screen/Screen.jsx.hbs',
        transform: formatSourceCode,
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/screens/{{screenName}}/{{viewModelName}}.js',
        templateFile: 'plop/templates/Screen/ScreenViewModel.js.hbs',
        transform: formatSourceCode,
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `src/screens/index.js`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        separator: '\n',
        unique: true,
        template: `export { default as {{screenName}} } from './{{screenName}}'`,
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `src/screens/index.js`,
        transform: formatSourceCode,
        abortOnFail: true,
      },
    ],
  }
}

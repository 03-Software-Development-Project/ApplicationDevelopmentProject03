import {inputSymbol, highlightText, formatSourceCode} from './helpers.mjs'

export default function ComponentGenerator(plop) {
  return {
    description: 'Generate a new UI component',
    prompts: [
      {
        type: 'confirm',
        name: 'isCommon',
        message: `Is this a ${highlightText[0]('common')} component?`,
        default: true,
      },
      {
        type: 'input',
        name: 'componentName',
        message: (data) =>
          `By default, the component name will have` +
          ` a prefix of "${highlightText[1](data.isCommon ? 'Common' : 'Shared')}"` +
          ` and a suffix of "${highlightText[1]('Component')}".\n` +
          `${inputSymbol} Enter the name of the component (in ${highlightText[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Component name is required.'),
      },
    ],
    actions: [
      function customAction(data) {
        const _ = data
        const componentNamePrefix = data.isCommon ? 'Common' : 'Shared'
        const componentNameSuffix = 'Component'
        _.componentName = `${componentNamePrefix}${data.componentName}${componentNameSuffix}`
        _.componentType = data.isCommon ? 'common' : 'shared'
        return `The final name of the component is: ${highlightText[2](data.componentName)}`
      },
      {
        type: 'add',
        path: 'src/components/{{componentType}}/index.js',
        templateFile: 'plop/templates/index-collection.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{componentName}}/index.js',
        templateFile: 'plop/templates/Component/index.js.hbs',
        transform: formatSourceCode,
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{componentName}}/styles.js',
        templateFile: 'plop/templates/Component/styles.js.hbs',
        transform: formatSourceCode,
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{componentName}}/{{componentName}}.jsx',
        templateFile: 'plop/templates/Component/Component.jsx.hbs',
        transform: formatSourceCode,
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `src/components/{{componentType}}/index.js`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        separator: '\n',
        unique: true,
        template: `export { default as {{componentName}} } from './{{componentName}}'`,
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `src/components/{{componentType}}/index.js`,
        transform: formatSourceCode,
        abortOnFail: true,
      },
    ],
  }
}

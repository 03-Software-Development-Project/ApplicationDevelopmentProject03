/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
/* eslint-disable func-names */
import * as _ from './constants.mjs'

export default function (plop) {
  return {
    description: 'Generate a new UI component',
    prompts: [
      {
        type: 'confirm',
        name: 'isCommon',
        message: `Is this a ${_.highlight_levels[0]('common')} component?`,
        default: true,
      },
      {
        type: 'input',
        name: 'componentName',
        message: (data) =>
          `By default, the component name will have a prefix of "${_.highlight_levels[1](
            data.isCommon ? 'Common' : 'Shared'
          )}" and a suffix of "${_.highlight_levels[1]('Component')}".\n` +
          `Enter the name of the component (in ${_.highlight_levels[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Component name is required.'),
      },
    ],
    actions: [
      function customAction(data) {
        const componentNamePrefix = data.isCommon ? 'Common' : 'Shared'
        const componentNameSuffix = 'Component'
        data.componentName = `${componentNamePrefix}${data.componentName}${componentNameSuffix}`
        data.componentType = data.isCommon ? 'common' : 'shared'
        return `The final name of the component is: ${_.highlight_levels[2](data.componentName)}`
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
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{componentName}}/styles.js',
        templateFile: 'plop/templates/Component/styles.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{componentType}}/{{componentName}}/{{componentName}}.js',
        templateFile: 'plop/templates/Component/Component.js.hbs',
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
        template: `export { default as {{componentName}} } from './{{componentName}}';`,
        abortOnFail: true,
      },
    ],
  }
}

import {highlightText, formatSourceCode} from './helpers.mjs'

export default function ModelGenerator(plop) {
  return {
    description: 'Generate a new model',
    prompts: [
      {
        type: 'input',
        name: 'modelName',
        message: `Enter the name of the model (in ${highlightText[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Model name is required.'),
      },
    ],
    actions: [
      (data) => `The final name of the model is: ${highlightText[2](data.modelName)}`,
      {
        type: 'add',
        path: 'src/models/index.js',
        templateFile: 'plop/templates/index-collection.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/models/{{modelName}}.js',
        templateFile: 'plop/templates/Model.js.hbs',
        transform: formatSourceCode,
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `src/models/index.js`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        separator: '\n',
        unique: true,
        template: `export { default as {{modelName}} } from './{{modelName}}'`,
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `src/models/index.js`,
        transform: formatSourceCode,
        abortOnFail: true,
      },
    ],
  }
}

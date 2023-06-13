/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
/* eslint-disable func-names */
import * as _ from './constants.mjs'

export default function (plop) {
  return {
    description: 'Generate a new model',
    prompts: [
      {
        type: 'input',
        name: 'modelName',
        message: `Enter the name of the model (in ${_.highlight_levels[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Model name is required.'),
      },
    ],
    actions: [
      (data) => `The final name of the model is: ${_.highlight_levels[2](data.modelName)}`,
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
        template: `export { default as {{modelName}} } from './{{modelName}}';`,
        abortOnFail: true,
      },
    ],
  }
}

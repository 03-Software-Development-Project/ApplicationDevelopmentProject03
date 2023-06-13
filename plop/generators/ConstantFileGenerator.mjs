/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
/* eslint-disable func-names */
import * as _ from './constants.mjs'

export default function (plop) {
  return {
    description: 'Generate a constant file',
    prompts: [
      {
        type: 'input',
        name: 'constantFileName',
        message: `Enter the name of the constant file (in ${_.highlight_levels[0]('CamelCase')}):`,
        filter: (value) => plop.getHelper('camelCase')(value),
        validate: (value) => (value !== '' ? true : 'Constant file name is required.'),
      },
    ],
    actions: [
      (data) =>
        `The final name of the constant file is: ${_.highlight_levels[2](
          data.constantFileName + '.js'
        )}`,
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
        template: `export { default as {{constantFileName}} } from './{{constantFileName}}';`,
        abortOnFail: true,
      },
    ],
  }
}

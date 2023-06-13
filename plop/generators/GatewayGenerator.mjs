/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
/* eslint-disable func-names */
import * as _ from './constants.mjs'

export default function (plop) {
  return {
    description: 'Generate a new gateway',
    prompts: [
      {
        type: 'input',
        name: 'gatewayName',
        message:
          `By default, the gateway name will have a suffix of "${_.highlight_levels[1](
            'Gateway'
          )}".\n` + `Enter the name of the gateway (in ${_.highlight_levels[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Gateway name is required.'),
      },
    ],
    actions: [
      function customAction(data) {
        const gatewayNameSuffix = 'Gateway'
        data.gatewayName = `${data.gatewayName}${gatewayNameSuffix}`
        return `The final name of the gateway is: ${_.highlight_levels[2](data.gatewayName)}`
      },
      {
        type: 'add',
        path: 'src/gateways/index.js',
        templateFile: 'plop/templates/index-collection.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/gateways/{{gatewayName}}.js',
        templateFile: 'plop/templates/Gateway.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `src/gateways/index.js`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        separator: '\n',
        unique: true,
        template: `export { default as {{gatewayName}} } from './{{gatewayName}}';`,
        abortOnFail: true,
      },
    ],
  }
}

import {inputSymbol, highlightText, formatSourceCode} from './helpers.mjs'

export default function GatewayGenerator(plop) {
  return {
    description: 'Generate a new gateway',
    prompts: [
      {
        type: 'input',
        name: 'gatewayName',
        message:
          `By default, the gateway name will have a suffix of "${highlightText[1]('Gateway')}".\n` +
          `${inputSymbol} Enter the name of the gateway (in ${highlightText[0]('PascalCase')}):`,
        filter: (value) => plop.getHelper('pascalCase')(value),
        validate: (value) => (value !== '' ? true : 'Gateway name is required.'),
      },
    ],
    actions: [
      function customAction(data) {
        const _ = data
        const gatewayNameSuffix = 'Gateway'
        _.gatewayName = `${data.gatewayName}${gatewayNameSuffix}`
        return `The final name of the gateway is: ${highlightText[2](data.gatewayName)}`
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
        transform: formatSourceCode,
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
        template: `export { default as {{gatewayName}} } from './{{gatewayName}}'`,
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `src/gateways/index.js`,
        transform: formatSourceCode,
        abortOnFail: true,
      },
    ],
  }
}

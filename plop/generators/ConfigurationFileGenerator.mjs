import {highlightText, formatSourceCode} from './helpers.mjs'

export default function ConfigurationFileGenerator(plop) {
  return {
    description: 'Generate a configuration file',
    prompts: [
      {
        type: 'input',
        name: 'configFileName',
        message: `Enter the name of the configuration file (in ${highlightText[0]('CamelCase')}):`,
        filter: (value) => plop.getHelper('camelCase')(value),
        validate: (value) => (value !== '' ? true : 'Configuration file name is required.'),
      },
    ],
    actions: [
      (data) =>
        `The final name of the config file is: ${highlightText[2](`${data.configFileName}.js`)}`,
      {
        type: 'add',
        path: 'src/config/index.js',
        templateFile: 'plop/templates/index-collection.js.hbs',
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/config/{{configFileName}}.js',
        templateFile: 'plop/templates/configFile.js.hbs',
        transform: formatSourceCode,
        skipIfExists: true,
        force: false,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `src/config/index.js`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        separator: '\n',
        unique: true,
        template: `export { default as {{configFileName}} } from './{{configFileName}}'`,
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `src/config/index.js`,
        transform: formatSourceCode,
        abortOnFail: true,
      },
    ],
  }
}

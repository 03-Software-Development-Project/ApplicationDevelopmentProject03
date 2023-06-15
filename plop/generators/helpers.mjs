/* eslint-disable import/no-extraneous-dependencies */
import chalk from 'chalk'
import prettier from 'prettier'

export const inputSymbol = chalk.green('➤')

export const highlightText = {
  0: chalk.underline, // Level 1 highlighting
  1: chalk.blue.bold, // Level 2 highlighting
  2: chalk.red.bold, // Level 3 highlighting
}
export const formatSourceCode = async (fileContents) => {
  const configFile = prettier.resolveConfigFile.sync('...')
  const options = prettier.resolveConfig.sync(configFile)
  const formattedCode = prettier.format(fileContents, {...options, parser: 'babel'})
  return formattedCode
}

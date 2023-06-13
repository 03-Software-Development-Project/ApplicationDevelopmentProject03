/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import chalk from 'chalk'

export const inputSymbol = chalk.green('➤')
export const highlight_levels = [
  chalk.underline, // Level 1 highlighting
  chalk.blue.bold, // Level 2 highlighting
  chalk.red.bold, // Level 3 highlighting
]

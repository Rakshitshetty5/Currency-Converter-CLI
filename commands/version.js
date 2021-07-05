const chalk = require('chalk')
const { version } = require('../package.json')

module.exports = () => {
  console.log(`v${chalk.greenBright(version)}`)
}


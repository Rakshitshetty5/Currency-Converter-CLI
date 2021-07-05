const chalk = require('chalk')

const menu = {
    main: `
      ccv [command] <options>
  
      ${chalk.greenBright('convert')} .............. converts currency
      ${chalk.greenBright('exchange-rate')} ............ shows currencies available for conversion
      ${chalk.greenBright('version')} ............ show package version
      ${chalk.greenBright('help')} ............... show help menu for a command`,
  
    convert: `
      ccv convert <options>
  
      ${chalk.bold.blueBright('amount currency_1 currency_2')}
      ${chalk.yellowBright('For Eg')}: command for converting 5 usd to inr : ${chalk.greenBright('ccv convert 5 usd inr')}

      `,
}


module.exports = (args) => {
    const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

    console.log(menu[subCmd] || menu.main)
}
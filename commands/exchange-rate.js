const chalk = require('chalk')
const Ora = require('ora')

const error = require('../utils/error')
const getExchangeRate = require('../utils/exchangeRate')

module.exports = async () => {
    const spinner = new Ora({
        text: `Getting ${chalk.yellow('Exchange Rate Data')}`,
        spinner: 'earth'
    });
    spinner.start()
    try{
        const exchangeRateData = await getExchangeRate()
        spinner.text = 'success'
        spinner.succeed()
        for(let curr in exchangeRateData){
            console.log(`${chalk.bold.cyan(curr)} | ${exchangeRateData[curr]}`)
        }
    }catch(err){
        spinner.stop()
        error(chalk.red(err.message))
    }
}
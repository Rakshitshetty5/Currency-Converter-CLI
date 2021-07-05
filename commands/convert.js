const chalk = require('chalk')
const Ora = require('ora')

const error = require('../utils/error')
const getExchangeRate = require('../utils/exchangeRate')

module.exports = async (data) => {
    const spinner = new Ora({
        text: `Getting ${chalk.yellow('Exchange Rate Data')}`,
        spinner: 'earth'
    });
   
    spinner.start()
    
    let [amount, from, to] = data

    try{
        const exchangeRateData = await getExchangeRate()
        to = to.toUpperCase();
        from = from.toUpperCase();
        if(exchangeRateData[to] && exchangeRateData[from]){
            const rate = exchangeRateData[to]/exchangeRateData[from]
        
            spinner.text = 'Success';
            spinner.succeed();
            
            console.log(`1 ${from} = ${rate} ${to}`)
            console.log('Hence:')
            console.log(`${amount} ${from} = ${(amount*rate).toFixed(2)} ${to}`)
        }else{
            spinner.stop()
            error(chalk.red(err.message),true)
        }
       
    }catch(err){
        spinner.stop()
        error(chalk.red(err.message),true)
    }
}
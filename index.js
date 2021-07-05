const minimist = require('minimist')

const error = require('./utils/error')
const exchangeRate = require('./commands/exchange-rate')
const help = require('./commands/help')
const version = require('./commands/version')
const convert = require('./commands/convert')

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    let cmd = args._[0] || 'help'

    if (args.version || args.v) {
        cmd = 'version'
    }
    if (args.help || args.h) {
        cmd = 'help'
    }
    switch(cmd){
        case 'convert':
            if(args._[1] && args._[2] && args._[3]){
                convert(args._.slice(1))
            }else{
                help(args)
            }
            break;
        case 'version':
            version();
            break;
        case 'help':
            help(args)
            break;
        case 'exchange-rate':
            exchangeRate();
            break;
        default:
            error(`"${cmd}" is not a valid command!`, true)
    }

}
const axios = require('axios')

module.exports = async () => {
   const response = await axios('https://open.exchangerate-api.com/v6/latest')
   return response.data.rates
}
const axios = require('axios')
const jsdom = require('jsdom')

axios.
get(' https://quotes.toscrape.com/')
    .then(response => {
        console.log(typeof response)
    })
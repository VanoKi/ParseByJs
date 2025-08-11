const axios = require('axios')
const jsdom = require('jsdom')

async function getData() {
    try {
        const response = await axios.get(' https://quotes.toscrape.com/')
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

getData()
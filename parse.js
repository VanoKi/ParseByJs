const axios = require('axios')
// const jsdom = require('jsdom')
const cheerio = require('cheerio')

async function getData() {
    try {
        const response = await axios.get(' https://quotes.toscrape.com/')
        // console.log(response.data)
        // return response
        const html = response.data

        const $ = cheerio.load(html)

        $('.quote').each((i, elem) => {
            const text = $(elem).find('text').text()
            const author = $(elem).find('.author').text()
            const tags = $(elem).find('.tag').map((i, e) => $(e).text()).get()

            console.log(`${i + 1}. ${text} - ${author}`)
            console.log(`Tags - ${tags,join(', ')}`)
            console.log(`----`)
        })
    } catch (error) {
        console.error(error)
    }
}



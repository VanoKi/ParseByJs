const axios = require('axios')
const jsdom = require('jsdom')
const {JSDOM} = jsdom
// const cheerio = require('cheerio')

async function getData() {
    try {
        const response = await axios.get(' https://quotes.toscrape.com/')
        const dom = new JSDOM(response.data)
        const document = dom.window.document

        const quotes = document.querySelectorAll('.quote')
        quotes.forEach((q, i) => {
            const text = q.querySelector('.text').textContent
            const author = q.querySelector('.author').textContent
            const tags = [...q.querySelectorAll('.tag')].map(tag => tag.textContent)

            console.log(`${i + 1}. ${text} — ${author}`);
            console.log(`Теги: ${tags.join(', ')}`);
            console.log('---');
        })
    } catch (error) {
        console.error(error)
    }
}

getData()



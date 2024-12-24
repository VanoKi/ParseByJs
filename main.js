const axios = require('axios')
const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const pagesNumber = 50
const baseLink = `https://books.toscrape.com/catalogue/page-`
let page = 1
let parsingTimeout = 0

function paginator() {
    function getArticles() {
        let link = `${baseLink}${page}.html`
        console.log(`Запрос по ссылке:${link}`)
        axios.get(link)
            .then(response => {
                let currPage = response.data
                const dom = new JSDOM(currPage)
                let linksLength = dom.window.document.querySelectorAll('h3').length
                for (let i = 0; i < linksLength; i++) {
                    // let relLink = dom.window.document.querySelector('a')
                    console.log(linksLength[i])
                }
            })
    }
}

console.log(paginator())

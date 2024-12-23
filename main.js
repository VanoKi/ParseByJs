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
        return link
    }
    return getArticles()
}

console.log(paginator())
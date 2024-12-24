const axios = require('axios')
const fs = require('fs')
// const jsdom = require('jsdom')
// const { JSDOM } = jsdom

const pagesNumber = 50
const baseLink = `https://books.toscrape.com/catalogue/page-`
let page = 1
let parsingTimeout = 0

let link = `${baseLink}${page}.html`
// fetch(link).then(response => response.text()).then(data => console.log(data))

const { JSDOM } = require('jsdom')
JSDOM.fromURL(link).then(dom => {
    const title = dom.window.document.querySelector('h1')
    console.log(title.textContent)
})
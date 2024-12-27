const axios = require('axios')
const fs = require('fs')
// const jsdom = require('jsdom')
// const { JSDOM } = jsdom

// const pagesNumber = 50
// const baseLink = `https://books.toscrape.com/catalogue/page-`
// let page = 1
// let parsingTimeout = 0

// let link = `${baseLink}${page}.html`
// fetch(link).then(response => response.text()).then(data => console.log(data))
const {JSDOM} = require('jsdom')

function getHref(link) {
    JSDOM.fromURL(link).then(dom => {
        const bookTitles = dom.window.document.querySelectorAll('h3')
        // console.log(title.textContent)
        bookTitles.forEach(item => {
            // console.log(item.textContent)
            console.log(item.querySelector('a').getAttribute('href'))
        })
    })
}

// const link = `https://books.toscrape.com/index.html`
const link = `https://books.toscrape.com/catalogue/page-1.html`

function findBtnNext(link) {
    JSDOM.fromURL(link).then(dom => {
        const btnNext = dom.window.document.querySelector('.next')
        console.log(btnNext.querySelector('a').getAttribute('href'))
    })
}

findBtnNext(link)
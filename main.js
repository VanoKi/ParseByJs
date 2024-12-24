const axios = require('axios')
const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const pagesNumber = 50
const baseLink = `https://books.toscrape.com/catalogue/page-`
let page = 1
let parsingTimeout = 0

let link = `${baseLink}${page}.html`
// const fetch = require('node-fetch')
async function getData() {
    let response = await fetch(link)
    let data = await response.text()
    console.log(data)
}

// getData()

const data = fetch(link).then(response => response.text()).then(data => console.log(data))
// console.log(data)
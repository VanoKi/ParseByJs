const fs = require('fs')
const path = require('path')

const filePath = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\St1 Modules in JavaScript.md'
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) console.log(err)
    const lines = data.split('\n')
    lines.forEach((line, index) => {
        console.log(`${index} ${line}`)
    })
})
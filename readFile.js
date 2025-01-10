const fs = require('fs')
const path = require('path')

const filePath = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\St1 Modules in JavaScript.md'
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) console.log(err)
    // console.log(data)
    const lines = data.split('\n')
    lines.forEach((line, index) => {
        // console.log(`${index} ${line}`)
        if (line === '') {
            console.log(`${index}`)
        }
    })
    // console.log(lines[12])
})
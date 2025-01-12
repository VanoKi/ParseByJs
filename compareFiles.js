const fs = require('fs')
const path = require('path')

const file1 = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\St1 Introduction to Bundlers mod.md'
const file2 = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\reply from GPT Bundlers.md'

fs.readFile(file1, 'utf-8', (err, data1) => {
    if (err) console.error(err)
    fs.readFile(file2, 'utf-8', (err, data2) => {
        if (err) console.error(err)
        const lines1 = data1.split('\n')
        const lines2 = data2.split('\n')
        // lines1.forEach(item => {
        //     if (item.match(/\d/)) console.log(item)
        // })
        // lines2.forEach((item, index) => {
        //     console.log(`${index} ${item}`)
        // })
    })
})
const fs = require('fs')
const path = require('path')

const file1 = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\St1 Introduction to Bundlers mod.md'
const file2 = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\reply from GPT Bundlers.md'

fs.readFile(file1, 'utf-8', (err, data1) => {
    if (err) console.error(err)
    fs.readFile(file2, 'utf-8', (err, data2) => {
        if (err) console.error(err)
        const lines1 = data1.split(/(?=\d+\.\s)/).map(i => i.split('\n'))
        const lines2 = data2.split('- ').map(i => i.trim())
        console.log(lines1)
        // console.log(lines2)
    })
})
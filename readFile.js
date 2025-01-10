const fs = require('fs')
const path = require('path')

const filePath = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\St1 Modules in JavaScript.md'
const outPath = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\St1 Modules in JavaScript mod.md'

fs.writeFile(outPath, '', 'utf-8', (err) => {
    if (err) {
        console.error(err)
    }
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) console.log(err)
        // console.log(data)
        const lines = data.split('\n')
        lines.forEach((line, index) => {
            // console.log(`${index} ${line}`)
            if (line.trim() !== '') {
                fs.appendFile(outPath, `${line}\n`, 'utf-8', (err) => {
                    if (err) console.error(err)
                    // else console.log('file created')
                })
            }
        })
    })
})

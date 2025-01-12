const fs = require('fs')
const path = require('path')

const file1 = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\St1 Introduction to Bundlers mod.md'
const file2 = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\reply from GPT Bundlers.md'
const outPath = 'C:\\Users\\VanoHa\\Documents\\Obsidian Vault\\St1 Introduction to Bundlers mod2.md'

fs.writeFile(outPath, '', 'utf-8', (e) => {
    if (e) console.error(e)
    fs.readFile(file1, 'utf-8', (err, data1) => {
        if (err) console.error(err)
        fs.readFile(file2, 'utf-8', (err, data2) => {
            if (err) console.error(err)
            const lines1 = data1.split(/\d+\.\s/).map(i => i.split('\n'))
            const lines2 = data2.split('- ').map(i => i.trim())
            for (let i = 0; i < lines1.length; i++) {
                for (let j = 0; j < lines1[i].length; j++) {
                    if (j == 0) {
                        fs.appendFile(outPath, `##### ${lines1[i][j]}\n`, 'utf-8', (err) => {
                            if (err) console.error(err)
                        })
                    }
                    if (lines1[i][j] === lines2[i]) {
                        console.log(`**${lines1[i][j]}**`)
                        fs.appendFile(outPath, `**${lines1[i][j]}**\n`, 'utf-8', (err) => {
                            if (err) console.error(err)
                        })
                    } else {
                        console.log(lines1[i][j])
                        fs.appendFile(outPath, `${lines1[i][j]}\n`, 'utf-8', (err) => {
                            if (err) console.error(err)
                        })
                    }
                }
            }
        })
    })
})

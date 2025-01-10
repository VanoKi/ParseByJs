const ic = require('node-icecream')()
const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\VanoHa\\Documents\\'
// ic(path.resolve())
async function findObsidianDir() {
    const items = await fs.promises.readdir(dirPath)
    const obsidianDir = items.filter(item => item.match(/obsidian/ig))
    return obsidianDir
}

// let obsDir = findObsidianDir()
// console.log(obsDir)
findObsidianDir().then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})
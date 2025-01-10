const ic = require('node-icecream')()
const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\VanoHa\\Documents\\'
// ic(path.resolve())
let obsidianDir = null
async function findObsidianDir(regex) {
    const items = await fs.promises.readdir(dirPath)
    return  items.filter(item => item.match(regex))
}

async function getObsidianPath(regex) {
        try {
            obsidianDir = await findObsidianDir(regex)
            // return  path.join(dirPath, obsidianDir.toString())
            console.log(path.join(dirPath, obsidianDir.toString()))
        }catch (e) {
            console.log(e)
        }
}

getObsidianPath(/obsidian/gi)
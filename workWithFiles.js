const ic = require('node-icecream')()
const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\VanoHa\\Documents\\'
// ic(path.resolve())
let obsidianDir = null
async function findObsidianDir(word) {
    const regex = new RegExp(word, 'ig')
    const items = await fs.promises.readdir(dirPath)
    return  items.filter(item => item.match(regex))
}

async function getObsidianPath(word) {
        try {
            obsidianDir = await findObsidianDir(word)
            console.log(path.join(dirPath, obsidianDir.toString()))
            return  path.join(dirPath, obsidianDir.toString())
        }catch (e) {
            console.log(e)
        }
}

async function getList(dirPath) {
    try {
        const files = await fs.promises.readdir(dirPath)
        console.log(files)
    }catch (e) {
        console.log(e)
    }
}

async function main() {
    const obsidianPath = await getObsidianPath('obsidian')
    console.log(obsidianPath)
    if (obsidianPath) {
        await getList(obsidianPath)
    } else {
        console.log('dir does`t exist')
    }
}

main()
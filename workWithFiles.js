const ic = require('node-icecream')()
const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\VanoHa\\Documents\\'
// ic(path.resolve())
async function findObsidianDir() {
    const items = await fs.promises.readdir(dirPath)
    return  items.filter(item => item.match(/obsidian/ig))
}

async function main() {
    try {
        const result = await findObsidianDir()
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}

main()
const ic = require('node-icecream')()
const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\VanoHa\\Documents\\'
// ic(path.resolve())
let obsidianDir = null
async function findObsidianDir() {
    const items = await fs.promises.readdir(dirPath)
    return  items.filter(item => item.match(/obsidian/ig))
}

async function main() {
        try {
            obsidianDir = await findObsidianDir()
            // console.log(obsidianDir.toString())
            console.log(path.join(dirPath, obsidianDir.toString()))
        }catch (e) {
            console.log(e)
        }
}
main()
// console.log(Object.keys(path))
// console.dir(path)
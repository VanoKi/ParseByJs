const ic = require('node-icecream')()
const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\VanoHa\\Documents\\'
// ic(path.resolve())
let obdisianDir
fs.readdir(dirPath, (err, items) => {
    if (err) ic(err)
    else {
        obdisianDir = items.filter(item => item.match(/obsidian/gi))
        ic(obdisianDir)
    }
})
// ic(obdisianDir)
// const obdisianDirPath = path.join(dirPath, obdisianDir)
// ic(obdisianDirPath)
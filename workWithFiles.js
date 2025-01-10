const ic = require('node-icecream')()
const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\VanoHa\\Documents\\'
// ic(path.resolve())
fs.readdir(dirPath, (err, items) => {
    if (err) ic(err)
    else {
        items.forEach(item => ic(typeof item, item))
        }
})
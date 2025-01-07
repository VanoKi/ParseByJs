const ic = require('node-icecream')()
const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\VanoHa\\'

// ic(path.resolve())
fs.stat(dirPath, (err, stats) => {
    if(err) {
        ic(err)
    } else {
       ic(stats)
    }
})
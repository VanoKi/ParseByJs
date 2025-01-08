const ic = require('node-icecream')()
const fs = require('fs')
const path = require('path')

const dirPath = 'C:\\Users\\VanoHa\\Downloads'
// ic(path.resolve())
fs.stat(dirPath, (err, stats) => {
    if(err) {
        ic(err)
    } else {
       ic(stats)
    }
})
// fs.readdir(dirPath, (err, items) => {
//     if (err) ic(err)
//     else {
//         for (let i = 0; i < items.length; i++) {
//             ic(items[i])
//         }
//     }
// })
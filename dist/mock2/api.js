const path = require('path')
const fs = require('fs')
const dirName = path.resolve('./api')

module.exports = {
    // path: [GET]/index
    getJSON(url) {
        const file = url.replace('/', '_') + '.js'
        let json = {}
        try {
            let filePath = path.resolve(dirName, file)
            // console.log(filePath, 'getJSON');
            json = require(filePath).res
        } catch (error) {
            json = {}
        }
        return json
    },
    // path: [GET]/index
    getDOC(url) {
        const file = url.replace('/', '_') + '.js'
        let str = '{}'
        try {
            let filePath = path.resolve(dirName, file)
            // console.log(filePath, 'getDOC');
            str = fs.readFileSync(filePath).toString()
            str = str.replace(/module\.exports[ ]*\=[ ]*/, '')
        } catch (error) {
            str = '{}'
        }
        return str
    }
}

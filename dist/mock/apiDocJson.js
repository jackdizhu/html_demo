// 文件夹正则
const dirReg = /^[a-zA-Z0-9-]+$/
// 文件名称路径正则
const fileNameReg = /^[a-zA-Z0-9-/]+\.js$/

module.exports = {
  init: function () {
    const fs = require('fs')
    const path = require('path')
    const dirName = path.resolve('./api')

    let apiDocJson = []
    function forReqJson(dirName, str, dirObj) {
      const isDirName = fs.existsSync(dirName)
      const files = isDirName && fs.readdirSync(dirName)
      const root = dirObj
      if (files && files.length) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (fileNameReg.test(file)) {
            // js 文件
            const item = require(path.resolve(dirName, file))
            // if (!item.name || !item.res) {
            //   continue;
            // }
            root.push({
              name: file,
              type: 'file',
              content: item
            })
          } else if (dirReg.test(file)) {
            root.push({
              name: file,
              type: 'dir',
              children: []
            })
            // 文件夹递归
            const dirName2 = path.resolve(dirName, file)
            forReqJson(dirName2, 'dir', root[root.length - 1].children)
          }
        }
      }
    }
    forReqJson(dirName, 'root', apiDocJson)
    return apiDocJson
  }
}

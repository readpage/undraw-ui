import fs from 'fs'
import { resolve } from 'path'

// 递归删除目录
function deleteDirectory(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach(function (file, index) {
      var curPath = resolve(directoryPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        // 是目录
        deleteDirectory(curPath) // 递归删除
      } else {
        // 是文件
        fs.unlinkSync(curPath) // 删除文件
      }
    })
    fs.rmdirSync(directoryPath) // 删除目录
  }
}

deleteDirectory('./dist/language')
deleteDirectory('./dist/resolvers')

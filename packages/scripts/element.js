import fs from 'fs'

let a = fs.readFileSync('./es/index.js', 'utf-8')
let newContent = a.replace('import "undraw-ui";','').replace('import "element-plus";', '')
fs.writeFileSync('./es/index.js', newContent)
// fs.appendFileSync('./es/index.js', 'export * from "./element/index.js";\nexport * from "./common/index.js";')
// fs.appendFileSync('./es/index.d.ts', 'export * from "./element";\nexport * from "./common";')

fs.appendFileSync('./es/index.js', 'export * from "./language/index.js";')
fs.appendFileSync('./es/index.d.ts', 'export * from "./language";')
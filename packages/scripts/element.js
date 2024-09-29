import fs from 'fs'

let a = fs.readFileSync('./es/index.js', 'utf-8')
let newContent = a.replace('import "undraw-ui";', '').replace('import "element-plus";', '')
fs.writeFileSync('./es/index.js', newContent)
// fs.appendFileSync('./es/index.js', 'export * from "./element/index.js";\nexport * from "./common/index.js";')
// fs.appendFileSync('./es/index.d.ts', 'export * from "./element";\nexport * from "./common";')

fs.appendFileSync('./es/index.js', 'export * from "./language/index.js";')
fs.appendFileSync('./es/index.d.ts', 'export * from "./language";')
fs.appendFileSync('./es/components/toast/index.js', `import 'undraw-ui/es/index.css';import 'undraw-ui/es/components/icon/icon.css';import 'undraw-ui/es/components/toast/toast.css';`)
fs.appendFileSync('./es/components/toast/index.d.ts', `import 'undraw-ui/es/index.css';import 'undraw-ui/es/components/icon/icon.css';import 'undraw-ui/es/components/toast/toast.css';`)
fs.appendFileSync('./es/components/context-menu/index.js', `import 'undraw-ui/es/index.css';import 'undraw-ui/es/components/context-menu/context-menu.css';`)
fs.appendFileSync('./es/components/context-menu/index.d.ts', `import 'undraw-ui/es/index.css';import 'undraw-ui/es/components/context-menu/context-menu.css';`)
module.exports = {
  singleQuote: true,  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  semi: false,  // 使用分号, 默认true
  printWidth: 120, //  每行超过多少字符自动换行
  arrowParens: 'avoid',  // avoid 能省略括号的时候就省略 例如x => x
  bracketSpacing: true,  // 对象中的空格 默认true
  trailingComma: 'none',  // all 包括函数对象等所有可选
  tabWidth: 2,  // tab缩进大小,默认为2
  useTabs: false,   // 使用tab缩进，默认false
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
}

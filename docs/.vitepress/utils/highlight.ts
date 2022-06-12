//escapeHtml用于转义内容字符串，以便可以将其插入 HTML 内容中。
import escapeHtml from 'escape-html'
// 可扩展的语法高亮工具
import prism from 'prismjs'
import loadLanguages from 'prismjs/components/index'

loadLanguages(['markup', 'css', 'javascript', 'java'])

function wrap(code: string, lang: string): string {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  // 被包围在 <pre> 标签 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。
  // v-pre指令说明：跳过这个元素和它的子元素的编译过程。可以用来显示原始标签。跳过大量没有指令的节点会加快编译。
  // code定义计算机代码文本。
  return `<pre v-pre><code>${code}</code></pre>`
}


export function highlight(str: string, lang?: string) {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  switch (lang) {
    case 'vue':
    case 'html':
      lang = 'markup'
      break
    case 'md':
      lang = 'markdown'
      break
    case 'ts':
      lang = 'typescript'
      break
    case 'py':
      lang = 'pyton'
      break
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, lang)
  } else {
    // eslint-disable-next-line no-console
    console.log('[vitepress] Syntax highlight for language "${lang}" is not supported.')
  }
  return wrap(str, 'text')
}

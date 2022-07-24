import MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import mdContainer from 'markdown-it-container'
import type Renderer from 'markdown-it/lib/renderer'
import { resolve } from 'path'
import fs from 'fs'
import { highlight } from './util'

interface ContainerApi {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(tokens: Token[], index: number, options: any, env: any, self: Renderer): string
}

const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/
const markdown = MarkdownIt()

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const data = (md as any).__data
      const hoistedTags: string[] = data.hoistedTags || (data.hoistedTags = [])

      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* 表示标签正在打开 */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            resolve('examples', `${sourceFile}.vue`),
            'utf-8'
          )
          const existingScriptIndex = hoistedTags.findIndex((tag) =>
            scriptSetupRE.test(tag)
          )
          if (existingScriptIndex === -1) {
            hoistedTags.push(`
              <script setup>
              const demos = import.meta.globEager('../../examples/${sourceFile.split('/')[0]}/*.vue')
              </script>
            `)
          }
        }
        return `
          <Demo :demos="demos" source="${encodeURIComponent(source)}" path="${sourceFile}" raw-source="${encodeURIComponent(source)}" description="${encodeURIComponent(markdown.render(description))}">`
      } else {
        return '</Demo>'
      }
    }
  } as ContainerApi)
}

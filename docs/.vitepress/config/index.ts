import { defineConfig } from 'vitepress'
import { mdPlugin } from '../plugins'
import { zhConfig } from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/undraw-ui',
  ...zhConfig,
  markdown: {
    config: (md) => mdPlugin(md)
  }
})

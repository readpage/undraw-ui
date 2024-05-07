import { defineConfig } from 'vitepress'
import { mdPlugin } from '../plugins'
import { zhConfig } from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  ...zhConfig,
  lastUpdated: true,
  markdown: {
    config: (md) => mdPlugin(md)
  }
})

import { DefaultTheme, defineConfig } from 'vitepress'
import { mdPlugin } from './plugins'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '指导',
    link: '/guide/design'
  },
  {
    text: '组件',
    link: '/components/fold'
  },
]

export const sidebar:DefaultTheme.MultiSideBarConfig = {
  '/guide/': [
    {
      text: '指导',
      children: [
        {
          text: '设计',
          link: '/guide/design'
        },
        {
          text: '安装',
          link: '/guide/install'
        }
      ]
    },
  ],
  '/components/': [
    {
      text: '组件',
      children: [
        {
          text: "折叠",
          link: '/components/fold'
        },
        {
          text: "评论",
          link: '/components/comment'
        },
        {
          text: "分隔",
          link: '/components/divider'
        },
        {
          text: "图标",
          link: '/components/icon'
        }
      ]
    }
  ]
}

export default defineConfig({
  srcDir: 'src',
  title: 'undraw-ui',
  description: 'a Vue 3 based component library for designers and developers',
  themeConfig: {
    logo: '/u.webp',
    nav,
    sidebar,
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name',
      searchParameters: {
        facetFilters: ['tags:guide,api']
      }
    },
  },


  markdown: {
    config: (md) => mdPlugin(md)
  }
})
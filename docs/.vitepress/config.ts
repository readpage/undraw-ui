import { DefaultTheme, defineConfig } from 'vitepress'
import { mdPlugin } from './plugins'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    link: '/guide/introduce'
  },
  {
    text: '组件',
    link: '/components/fold'
  },
]

export const sidebar:DefaultTheme.MultiSideBarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: [
        {
          text: '介绍',
          link: '/guide/introduce'
        },
        {
          text: '安装',
          link: '/guide/install'
        },
        {
          text: '使用',
          link: '/guide/usage'
        }
      ]
    },
  ],
  '/components/': [
    {
      text: '组件',
      children: [
        {
          text: "Fold 折叠",
          link: '/components/fold'
        },
        {
          text: "Comment 评论",
          link: '/components/comment'
        },
        {
          text: 'Anchor 锚点',
          link: '/components/anchor'
        },
        {
          text: 'Chat 聊天',
          link: '/components/chat'
        },
        {
          text: 'Search 搜索',
          link: '/components/search'
        },
        {
          text: "Divider 分割线",
          link: '/components/divider'
        },
        {
          text: "Icon 图标",
          link: '/components/icon'
        },
        {
          text: "Editor 编辑器",
          link: '/components/editor'
        },
        {
          text: "Dialog 对话框",
          link: '/components/dialog'
        },
        {
          text: "Toast 吐司",
          link: '/components/toast'
        }
      ]
    }
  ]
}

export default defineConfig({
  srcDir: 'src',
  title: 'undraw-ui',
  description: 'a Vue 3 based component library for designers and developers',
  base: '/undraw-ui/',
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
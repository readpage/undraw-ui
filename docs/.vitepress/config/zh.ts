import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: "undraw-ui",
  description: "a Vue 3 based component library for designers and developers",
  head: [
    ['link', { rel: 'icon', href: '/u.webp '}]
  ],
  

  themeConfig: {
    logo: '/u.webp',
    editLink: {
      pattern: 'https://github.com/vuejs/pinia/edit/v2/packages/docs/:path',
      text: '对本页提出修改建议',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/readpage/undraw-ui' }
    ],
    
    outline: {
      label: '本页内容',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    nav: [
      {
        text: '指南',
        link: '/guide/introduce'
      },
      {
        text: '组件',
        link: '/components/fold'
      },
      {
        text: '更新日志',
        link: '/update/doc'
      },
      {
        text: '💖支持',
        link: '/other/support'
      },
      { 
        text: 'gitee⚡️', 
        link: 'https://gitee.com/undraw/undraw-ui'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
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
          items: [
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
              text: 'Search 搜索',
              link: '/components/search'
            },
            {
              text: 'Chat 聊天',
              link: '/components/chat'
            },
            {
              text: 'Counter 滚动数字',
              link: '/components/counter'
            },
            {
              text: 'NoticeBar 通知栏',
              link: '/components/notice-bar'
            },
            {
              text: 'Tags 标签页',
              link: '/components/tags'
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
      ],
    },

  },
}

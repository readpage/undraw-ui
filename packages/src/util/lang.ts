import { reactive } from 'vue'

const message = {
  zh: {
    emoji: {
      content: '表情'
    },
    comment: {
      headerTitle: '评论',
      upload: '图片',
      contentBtn: '发表评论',
      contentBtn2: '发布',
      title: '全部评论',
      placeholder: '输入评论（Enter换行，Ctrl + Enter发送）',
      placeholder2: '回复',
      reply: '回复',
      cancelReply: '取消回复',
      more: {
        loading: '加载中',
        prefixTotal: '展开',
        suffixTotal: '条回复'
      }
    },
    scroll: {
      content: '加载更多',
      loading: '加载中...',
      noMore: '没有更多了'
    },
    nav: {
      title: '全部评论',
      newest: '最新',
      hottest: '最热'
    },
    fold: {
      unfold: '展开',
      fold: '收起'
    }
  },
  en: {
    emoji: {
      content: 'emoji'
    },
    comment: {
      headerTitle: 'comment',
      upload: 'picture',
      contentBtn: 'comment',
      contentBtn2: 'publish',
      title: 'comments',
      placeholder: 'Enter a comment (Enter line feed, Ctrl + Enter send)',
      placeholder2: 'reply',
      reply: 'reply',
      cancelReply: 'cancel reply',
      more: {
        loading: 'loading',
        prefixTotal: 'unfold',
        suffixTotal: 'return receipt'
      }
    },
    scroll: {
      content: 'load more',
      loading: 'loading...',
      noMore: 'no more.'
    },
    nav: {
      title: 'comments',
      newest: 'newest',
      hottest: 'hottest'
    },
    fold: {
      unfold: 'unfold',
      fold: 'fold'
    }
  }
}

export const lang = reactive({
  locale: 'zh',
  messages: message
})

export const translate = (v: string) => {
  v = lang.locale + '.' + v
  return v.split('.').reduce((obj: any, key: string) => obj[key] || '', lang.messages)
}

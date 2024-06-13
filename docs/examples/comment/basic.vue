<template>
  <u-comment :config="config" @submit="submit" @before-data="beforeData">
    <!-- <template>导航栏卡槽</template> -->
    <!-- <template #header>头部卡槽</template> -->
    <!-- <template #info>信息卡槽</template> -->
    <!-- <template #card>用户信息卡片卡槽</template> -->
    <!-- <template #func>功能区域卡槽</template> -->
  </u-comment>
</template>

<script setup lang="ts">
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from './emoji'
import { reactive } from 'vue'
import { CommentApi, ConfigApi, SubmitParamApi, UToast } from 'undraw-ui'
// 相对时间
import { dayjs } from './day'
import { isArray, isObject, lang } from 'undraw-ui'

defineOptions({
  name: 'comment'
})

const config = reactive<ConfigApi>({
  user: {} as any,
  emoji: emoji,
  comments: [],
  showLevel: false,
  showHomeLink: false,
  showAddress: false,
  showLikes: false
})

// 自定义别名转换
function convertComment(comments: any, func: (v: any) => void) {
  if (isArray(comments)) {
    comments.forEach((t: any) => {
      convertComment(t, func)
    })
    return comments
  } else if (isObject(comments)) {
    if (comments.reply) {
      let replys = comments.reply.list
      if (replys && replys.length > 0) {
        convertComment(replys, func)
      }
    }
    func(comments)
    return comments
  }
}

const comments = [
  {
    id: '1',
    parentId: null,
    uid: '1',
    content: '等闲识得东风面，万紫千红总是春。',
    createTime: '2023-04-30 16:22',
    user: {
      name: '团团喵喵',
      avatar: 'https://static.juzicon.com/user/avatar-23ac4bfe-ae93-4e0b-9f13-f22f22c7fc12-221001003441-Y0MB.jpeg',
      homeLink: ''
    },
    reply: {
      total: 1,
      list: [
        {
          id: '11',
          parentId: 1,
          uid: '1',
          content: '[微笑]',
          createTime: '2023-04-30 16:22',
          user: {
            name: '团团喵喵',
            avatar: 'https://static.juzicon.com/user/avatar-23ac4bfe-ae93-4e0b-9f13-f22f22c7fc12-221001003441-Y0MB.jpeg'
          }
        }
      ]
    }
  },
  {
    id: '2',
    parentId: null,
    uid: '2',
    content: '长风破浪会有时，直挂云帆济沧海。',
    createTime: '2023-04-28 09:00',
    user: {
      name: '且美且独立',
      avatar: 'https://static.juzicon.com/avatars/avatar-20200926115919-a45y.jpeg'
    }
  }
]

// 评论数据
setTimeout(() => {
  // 当前登录用户数据
  config.user = {
    id: 1,
    username: 'jack',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100'
  }
  config.comments = convertComment(comments, v => (v.user.username = v.user.name))
}, 500)

// 评论提交事件
let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, files, finish }: SubmitParamApi) => {
  console.log('提交评论: ' + content, parentId, files)

  const comment: CommentApi = {
    id: String((temp_id += 1)),
    parentId: parentId,
    uid: config.user.id,
    content: content,
    createTime: new Date().toString(),
    user: {
      username: config.user.username,
      avatar: config.user.avatar
    },
    reply: null
  }
  setTimeout(() => {
    finish(comment)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}

// 加载前评论数据处理
function beforeData(val: any) {
  val.createTime = dayjs(val.createTime).fromNow()
}
</script>

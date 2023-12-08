<template>
  <u-comment :config="config" @submit="submit">
    <!-- <template>导航栏卡槽</template> -->
    <!-- <template #info>用户信息卡槽</template> -->
    <!-- <template #card>用户信息卡片卡槽</template> -->
  </u-comment>
</template>

<script setup lang="ts">
// 下载表情包资源emoji.zip https://readpage.lanzouj.com/b04duelxg 密码:undraw
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from '@/assets/emoji'
import { reactive } from 'vue'
import { CommentApi, ConfigApi, SubmitParamApi, UToast } from '~/components'

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

// 评论数据
setTimeout(() => {
  config.user = {
    id: 1,
    username: 'jack',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100'
  }
  config.comments = [
    {
      id: '1',
      parentId: null,
      uid: '1',
      content: '等闲识得东风面，万紫千红总是春。',
      createTime: '2023-04-30 16:22',
      user: {
        username: '团团喵喵',
        avatar: 'https://static.juzicon.com/user/avatar-23ac4bfe-ae93-4e0b-9f13-f22f22c7fc12-221001003441-Y0MB.jpeg'
      }
    },
    {
      id: '2',
      parentId: null,
      uid: '2',
      content: '长风破浪会有时，直挂云帆济沧海。',
      createTime: '2023-04-28 09:00',
      user: {
        username: '且美且独立',
        avatar: 'https://static.juzicon.com/avatars/avatar-20200926115919-a45y.jpeg'
      }
    }
  ]
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
    createTime: '1分钟前',
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
</script>

<style lang="scss" scoped>
.u-comment {
  width: 820px;
  margin-left: 20px;
}
</style>

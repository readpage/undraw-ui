<template>
  <u-comment :config="config" @submit="submit" @like="like" @operate="operate">
    <!-- <template>用户信息导航栏卡槽</template> -->
    <!-- <template #info>用户信息卡槽</template> -->
    <!-- <template #card>用户信息卡片卡槽</template> -->
  </u-comment>
</template>

<script setup lang="ts">
import emoji from './emoji'
import { reactive } from 'vue'
import { CommentApi, ConfigApi, SubmitParamApi, UToast, createObjectURL, throttle } from 'undraw-ui'

const config = reactive<ConfigApi>({
  user: {
    id: 1,
    username: 'jack',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    // 评论id数组 建议:存储方式用户uid和评论id组成关系,根据用户uid来获取对应点赞评论id,然后加入到数组中返回
    likeIds: [1, 2, 3]
  },
  emoji: emoji,
  comments: [],
  total: 10,
  // 默认全部用户显示，#1当前用户显示，#2当前用户以外显示
  tools: ['举报#2', '删除#1', '复制', '屏蔽#2']
})

const _throttle = throttle((type: string, comment: CommentApi, finish: Function) => {
  switch (type) {
    case '删除':
      alert(`删除成功: ${comment.id}`)
      finish()
      break
    case '举报':
      alert(`举报成功: ${comment.id}`)
      break
  }
})

const operate = (type: string, comment: CommentApi, finish: Function) => {
  _throttle(type, comment, finish)
}

let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, files, finish }: SubmitParamApi) => {
  console.log('提交评论: ' + content, parentId, files)

  /**
   * 上传文件后端返回图片访问地址，格式以'||'为分割; 如:  '/static/img/program.gif||/static/img/normal.webp'
   */
  let contentImg = files.map(e => createObjectURL(e)).join('||')

  const comment: CommentApi = {
    id: String((temp_id += 1)),
    parentId: parentId,
    uid: config.user.id,
    address: '来自江苏',
    content: content,
    likes: 0,
    createTime: '1分钟前',
    contentImg: contentImg,
    user: {
      username: config.user.username,
      avatar: config.user.avatar,
      level: 6,
      homeLink: `/${(temp_id += 1)}`
    },
    reply: null
  }
  setTimeout(() => {
    finish(comment)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}
// 点赞按钮事件 将评论id返回后端判断是否点赞，然后在处理点赞状态
const like = (id: string, finish: () => void) => {
  console.log('点赞: ' + id)
  setTimeout(() => {
    finish()
  }, 200)
}

config.comments = [
  {
    id: '1',
    parentId: null,
    uid: '1',
    address: '来自上海',
    content:
      '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
    likes: 2,
    contentImg: '/static/img/program.gif, /static/img/normal.webp',
    createTime: '1分钟前',
    user: {
      username: '落🤍尘',
      avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
      level: 6,
      homeLink: '/1'
    }
  }
]
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  font-size: 12px;
}
</style>

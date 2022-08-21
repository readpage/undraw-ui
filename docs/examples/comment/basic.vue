<template>
  <div class="comment-view" style="padding: 0px">
    <u-comment :config="config" @submit="submit" @like="like">
      <!-- <template #list-title>全部评论</template> -->
    </u-comment>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { UToast, CommentApi, CommentSubmitParam, ConfigApi } from 'undraw-ui'
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases
// static文件放在public下,引入emoji.ts文件可以移动到自定义位置
import emoji from './emoji'

const config = reactive<ConfigApi>({
  user: {
    id: 1,
    username: 'user',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    // 评论id数组 建议:存储方式用户id和文章id和评论id组成关系,根据用户id和文章id来获取对应点赞评论id,然后加入到数组中返回
    likes: [1, 2, 11]
  },
  emoji: emoji,
  comments: []
})

// 提交评论事件
const submit = ({ clear, content, parentId }: CommentSubmitParam) => {
  console.log(content, parentId)
  UToast({ message: '评论成功!', type: 'info' })
  // 提交评论 --后端接口处理
  editSubmit(content, parentId as number)
  clear()
}

// 点赞按钮事件
const like = (id: number) => {
  const likes = config.user.likes
  if (likes.indexOf(id) == -1) {
    // 点赞 --后端接口处理
    likes.push(id)
    editLike(id, 1)
  } else {
    // 取消点赞 --后端接口
    likes.splice(
      likes.findIndex(item => item == id),
      1
    )
    editLike(id, -1)
  }
}

// 模拟后端处理
const editLike = (id: number, count: number) => {
  let tar = null
  config.comments.forEach(v => {
    if (v.id != id) {
      tar = v.reply?.list.find(v => v.id == id)
    } else {
      tar = v
    }
    if (tar) {
      tar.like += count
    }
  })
}

let temp_id = 100
// 模拟后端处理
const editSubmit = (content: string, parentId: number) => {
  let comment: CommentApi = {
    id: (temp_id += 1),
    parentId: parentId,
    avatar: config.user.avatar,
    username: config.user.username,
    level: 6,
    link: `/${(temp_id += 1)}`,
    address: '来自江苏',
    content: content,
    like: 0,
    createTime: '1分钟前',
    reply: null
  }
  if (parentId == undefined) {
    config.comments.push(comment)
  } else {
    let raw_comment = config.comments.find(v => v.id == parentId)
    let reply = raw_comment?.reply
    if (reply) {
      reply.list.push(comment)
    } else if (raw_comment) {
      raw_comment.reply = { total: 1, list: [comment] }
    } else {
      config.comments.push(comment)
    }
  }
}

config.comments = [
  {
    id: 1,
    parentId: null,
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    username: '落🤍尘',
    level: 6,
    link: '/1',
    address: '来自上海',
    content:
      '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
    like: 2,
    createTime: '1分钟前',
    reply: null
  },
  {
    id: 3,
    parentId: null,
    username: '悟二空',
    avatar: 'https://static.juzicon.com/user/avatar-bf22291e-ea5c-4280-850d-88bc288fcf5d-220408002256-ZBQQ.jpeg',
    level: 1,
    link: '/3',
    address: '来自苏州',
    content: '知道在学校为什么感觉这么困吗？因为学校，是梦开始的地方。[脱单doge]',
    like: 11,
    createTime: '1天前',
    reply: {
      total: 2,
      list: [
        {
          id: 14,
          parentId: 3,
          avatar:
            'https://static.juzicon.com/user/avatar-8b6206c1-b28f-4636-8952-d8d9edec975d-191001105631-MDTM.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
          username: '别扰我清梦*ぁ',
          level: 5,
          link: '/14',
          address: '来自重庆',
          content: '说的对，所以，综上所述，上课睡觉不怪我呀💤',
          like: 3,
          createTime: '1分钟前'
        },
        {
          id: 15,
          avatar:
            'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
          parentId: 3,
          username: 'Blizzard',
          level: 4,
          link: '/15',
          content: '回复 <span style="color: blue;"">@别扰我清梦*ぁ:</span> 看完打了一个哈切。。。会传染。。。[委屈]',
          address: '来自广州',
          like: 9,
          createTime: '7天前'
        }
      ]
    }
  }
]
</script>

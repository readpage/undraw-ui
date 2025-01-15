<template>
  <u-comment :config="config" @submit="submit">
    <!-- <template>导航栏卡槽</template> -->
    <!-- <template #header>头部卡槽</template> -->
    <!-- <template #action="{ user }">动作卡槽{{ user.username }}</template> -->
    <!-- <template #avatar="{ id, user }">头像卡槽{{ user.avatar }}</template> -->
    <!-- <template #info>信息卡槽</template> -->
    <!-- <template #card>用户信息卡片卡槽</template> -->
    <!-- <template #func>功能区域卡槽</template> -->
  </u-comment>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { UToast, Time, CommentApi, CommentSubmitApi, ConfigApi } from 'undraw-ui'

const config = reactive<ConfigApi>({
  user: {} as any, // 当前用户信息
  comments: [], // 评论数据
  relativeTime: true, // 开启人性化时间
  show: {
    level: false,    // 关闭等级显示
    homeLink: false, // 关闭个人主页链接跳转
    address: false, // 关闭地址信息
    likes: false    // 关闭点赞按钮显示
  }
})

/**
 * 评论对象数据结构
 * 存储结构: 一个评论表，通过paretnId是否为空判断类型 评论/回复
 * 层数: 两层
 * 第一层：评论 parentId属性为空; 第二层关系: id等于parentId的数据，则为第二层回复的评论数据
 * 第二层: 回复 parentId属性不为空; 第一层关系: parentId等于第一层id，则为第一层评论的回复数据
 * 
 */
const comments = [
  {
    id: '1',
    parentId: null,
    uid: '2',
    content: '床前明月光，疑是地上霜。<br>举头望明月，低头思故乡。<img class="a" id="a" style="width: 50px" src=a onerror="window.location.href=\'https://baidu.com\'">',
    createTime: new Time().add(-1, 'day'),
    user: {
      username: '李白 [唐代]',
      avatar: 'https://static.juzicon.com/images/image-231107185110-DFSX.png',
      homeLink: '/1'
    },
    reply: {
      total: 1,
      list: [
      {
          id: '11',
          parentId: 1,
          uid: '1',
          content: '🤪🤗😒',
          createTime: new Time().add(-3, 'day'),
          user: {
            username: '杜甫 [唐代]',
            avatar: 'https://static.juzicon.com/images/image-180327173755-IELJ.jpg',
          }
        }
      ]
    }
  },
  {
    id: '2',
    parentId: null,
    uid: '3',
    content: '国破山河在，城春草木深。<br>感时花溅泪，恨别鸟惊心。<br>烽火连三月，家书抵万金。<br>白头搔更短，浑欲不胜簪。',
    createTime: new Time().add(-5, 'day'),
    user: {
      username: '杜甫 [唐代]',
      avatar: 'https://static.juzicon.com/images/image-180327173755-IELJ.jpg'
    }
  },
  {
    id: '3',
    parentId: null,
    uid: '2',
    content: '日照香炉生紫烟，遥看瀑布挂前川。<br>飞流直下三千尺，疑是银河落九天。',
    likes: 34116,
    createTime: new Time().add(-2, 'month'),
    user: {
      username: '李白 [唐代]',
      avatar: 'https://static.juzicon.com/images/image-231107185110-DFSX.png',
      homeLink: '/1'
    }
  }
]

// 模拟请求接口获取评论数据
setTimeout(() => {
  // 当前登录用户数据
  config.user = {
    id: 1,
    username: '杜甫 [唐代]',
    avatar: 'https://static.juzicon.com/images/image-180327173755-IELJ.jpg',
  }
  config.comments = comments
}, 500)

// 评论提交事件
let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, finish }: CommentSubmitApi) => {
  let str = '提交评论:' + content + ';\t父id: ' + parentId
  console.log(str)

  // 模拟请求接口生成数据
  const comment: CommentApi = {
    id: String((temp_id += 1)),
    parentId: parentId,
    uid: config.user.id,
    content: content,
    createTime: new Time().toString(),
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
</style>

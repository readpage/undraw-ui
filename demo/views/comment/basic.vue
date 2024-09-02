<template>
  <u-comment :config="config" @submit="submit" @before-data="beforeData">
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
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from '@/assets/emoji'
import { reactive } from 'vue'
import { CommentApi, ConfigApi, UToast } from '~/components'
import { dayjs } from '@/plugins/day'
import { SubmitParamApi, isArray, isObject, lang } from 'undraw-ui'
import en_US from 'undraw-ui/es/language/locales/en_US'
import { Time } from '~/util'
// lang.locale = 'en'
// lang.messages.en = en_US
defineOptions({
  name: 'comment'
})

const config = reactive<ConfigApi>({
  user: {} as any,
  emoji: emoji,
  comments: [],
  relativeTime: true,
  show: {
    level: false,
    homeLink: false,
    address: false,
    likes: false
  }
})

const comments = [
{
    id: '1',
    parentId: null,
    uid: '2',
    content: '床前明月光，疑是地上霜。<br>举头望明月，低头思故乡。',
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
          parentId: null,
          uid: '1',
          content: '[狗头][微笑2]',
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

// 评论数据
setTimeout(() => {
  // 当前登录用户数据
  config.user = {
    id: 1,
    username: 'jack',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100'
  }
  config.comments = comments
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

// 加载前评论数据处理
function beforeData(val: any) {
  // val.createTime = dayjs(val.createTime).fromNow()
}
</script>

<style lang="scss" scoped>
.u-comment {
  width: 820px;
  margin-left: 20px;
}
</style>

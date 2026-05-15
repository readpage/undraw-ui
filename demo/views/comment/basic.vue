<template>
  <div>
    <div class="mode-switch">
      <span class="mode-label">当前模式：</span>
      <el-switch
        v-model="isMobile"
        active-text="移动端"
        inactive-text="PC 端"
        active-color="#409eff"
        inactive-color="#909399"
        inline-prompt
      />
      <span class="mode-tip">{{ isMobile ? 'Enter 换行，Shift+Enter 发送' : 'Enter 发送，Shift+Enter 换行' }}</span>
    </div>
    <u-comment :config="config" @submit="submit" @before-data="beforeData">
    </u-comment>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { UToast, CommentApi, CommentSubmitApi, ConfigApi } from '~/components'
import { Time } from '~/util'

const isMobile = ref(false)

const config = reactive<ConfigApi>({
  user: {} as any,
  comments: [],
  relativeTime: true,
  show: {
    level: false,
    homeLink: false,
    address: false,
    likes: false
  },
  editor: {}
})

watch(isMobile, (val) => {
  config.editor = val
    ? { keys: { Enter: 'newline', 'Shift+Enter': 'submit' } }
    : { keys: { Enter: 'submit', 'Shift+Enter': 'newline' } }
}, { immediate: true })

/**
 * 评论对象数据结构
 * 存储结构: 一个评论表，通过paretnId是否为空判断类型 评论/回复
 * 层数: 两层
 * 第一层：评论 parentId属性为空; 第二层关系: id等于parentId的数据，则为第二层回复的评论数据
 * 第二层: 回复 parentId属性不为空; 第一层关系: parentId等于第一层id，则为第一层评论的回复数据
 * 
 */
const comments: CommentApi[] = [
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
          parentId: 1,
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
    createTime: new Time().add(-5, 'hour'),
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
  config.user = {
    id: 1,
    username: '杜甫 [唐代]',
    avatar: 'https://static.juzicon.com/images/image-180327173755-IELJ.jpg',
  }
  config.comments = comments
}, 500)

// 评论提交事件
let temp_id = 100
const submit = ({ content, parentId, finish }: CommentSubmitApi) => {
  let str = '提交评论:' + content + ';\t父id: ' + parentId
  console.log(str)

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

function beforeData(val: any) {
}
</script>

<style lang="scss" scoped>
.mode-switch {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px 16px;
  background: var(--u-bg-color-secondary, #f5f5f5);
  border-radius: 6px;

  .mode-label {
    font-size: 14px;
    color: var(--u-text-color, #333);
    white-space: nowrap;
  }

  .mode-tip {
    font-size: 12px;
    color: var(--u-text-color-placeholder, #999);
  }
}
</style>

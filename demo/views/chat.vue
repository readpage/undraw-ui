<template>
  <Chat :config="config" style="width: 500px" @load-more="loadMore" @submit="submit" >
    <template #header>
      <div style="height: 40px; display: flex; align-items: center;">
        <div>聊天</div>
      </div>
    </template>
  </Chat>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import Chat, { ChatConfigApi, ChatApi } from '~/components/chat/chat.vue'
import { usePage } from 'undraw-ui'
import emoji from '@/assets/emoji'

const config = reactive<ChatConfigApi>({
  user: {
    id: 1,
    username: 'user',
    avatar: ''
  },
  data: [],
  emoji: emoji
})

let data = [
  {
    id: 10,
    content: 'test10',
    uid: 1,
    user: {
      username: 'user',
      avatar: ''
    },
    createTime: '2024-06-29 09:30:00'
  },
  {
    id: 9,
    content: 'test9',
    uid: 2,
    user: {
      username: 'user2',
      avatar: ''
    },
    createTime: '2024-06-29 09:10:30'
  },
  {
    id: 8,
    content: 'test8',
    uid: 1,
    user: {
      username: 'user',
      avatar: ''
    },
    createTime: '2024-06-29 09:11:20'
  },
  {
    id: 7,
    content: 'test7',
    uid: 2,
    user: {
      username: 'user2',
      avatar: ''
    },
    createTime: '2024-06-29 09:11:10'
  },
  {
    id: 6,
    content: 'test6',
    uid: 1,
    user: {
      username: 'user',
      avatar: ''
    },
    createTime: '2024-06-29 09:11:00'
  },
  {
    id: 5,
    content: 'test5',
    uid: 1,
    user: {
      username: 'user2',
      avatar: ''
    },
    createTime: '2024-06-29 08:45:30'
  },
  {
    id: 4,
    content: 'test4',
    uid: 1,
    user: {
      username: 'user',
      avatar: ''
    },
    createTime: '2024-06-29 08:45:00'
  },
  {
    id: 3,
    content: 'test3',
    uid: 1,
    user: {
      username: 'user',
      avatar: ''
    },
    createTime: '2024-06-28 09:00:00'
  },
  {
    id: 2,
    content: 'test2',
    uid: 1,
    user: {
      username: 'user',
      avatar: ''
    },
    createTime: '2024-05-27 09:01:20'
  },
  {
    id: 1,
    content: 'test1',
    uid: 2,
    user: {
      username: 'user2',
      avatar: ''
    },
    createTime: '2024-05-27 09:01:00'
  }
]

function getRandom(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min)
}

let n = 0
function loadMore(finish: Function) {
  if (n <= Math.ceil(data.length / 4)) {
    setTimeout(() => {
      finish(usePage(++n, 4, data))
    }, getRandom(200, 500))
  } else {
    // 传入空数组没有更多消息了
    finish([])
  }
}

let id = 10
function submit(val: string, finish: Function) {
  setTimeout(() => {
    let chat: ChatApi = {
      id: ++id,
      content: val,
      uid: 1,
      user: {
        username: 'user',
        avatar: ''
      },
      createTime: new Date() as any
    }
    finish(chat)
  }, 200)
}
</script>

<style lang="scss" scoped></style>

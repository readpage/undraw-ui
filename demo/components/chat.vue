<template>
  <u-chat :user-id="userId" :emoji="emoji" :data="data" @submit="submit"></u-chat>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { ChatApi, ChatSubmitParam } from '~/index'
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases
// static文件放在public下,引入emoji.ts文件可以移动到自定义位置
import emoji from '@/assets/emoji'

const userId = ref(1)

const data = reactive<ChatApi[]>([
  { id: 1, username: 'user', avatar: '', content: 'adfsdfa' },
  {
    id: 2,
    username: 'admin',
    avatar: '',
    content:
      '每次出门都带本书，旅途中没事就拿出来晒晒，在火车上拿出来放窗边，住酒店拿出来放床头。旅行结束，在扉页写上：此书曾经到某地一游。买了书就要负责任，不看，难道还不带人家出门旅行吗？'
  },
  {
    id: 2,
    username: 'admin',
    avatar: '',
    content:
      '每次出门都带本书，旅途中没事就拿出来晒晒，在火车上拿出来放窗边，住酒店拿出来放床头。旅行结束，在扉页写上：此书曾经到某地一游。买了书就要负责任，不看，难道还不带人家出门旅行吗？'
  }
])

const submit = ({ clear, content }: ChatSubmitParam) => {
  data.push({ id: 1, username: 'user', avatar: '', content: content })
  clear()
}

const address = 'ws://localhost:7000/groupchat'

let socket: WebSocket

const connect = () => {
  if (window.WebSocket) {
    socket = new WebSocket(address)
    //相当于channelRead0，ev收到服务器端回送的消息
    socket.onmessage = ev => {
      console.log(ev, ev.data)
    }
    // 连接开启
    socket.onopen = ev => {
      console.log('连接开启了...')
    }
    // 感知到连接关闭
    socket.onclose = ev => {
      console.log('连接关闭了...')
    }
  } else {
    alert('当前的浏览器不支持webSocket')
  }
}

const send = () => {
  if (socket.readyState == WebSocket.OPEN) {
    //通过socket 发送消息
    socket.send('你好呀!')
  }
}

// onMounted(() => {
//   connect()
// })
</script>

<style lang="scss" scoped></style>

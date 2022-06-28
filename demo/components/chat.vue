<template>
  <u-chat></u-chat>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

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

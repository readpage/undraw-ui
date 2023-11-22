<template>
  <el-button @click="submit">节流</el-button>
</template>

<script setup lang="ts">
import {} from 'vue'
import Parent from './components/Parent.vue'

/**
 * 节流
 * 当持续触发事件时，保证一定时间段内只调用一次事件处理函数
 * @param fn 执行的函数
 * @param interval 间隔时间(s)
 * @returns
 */
const throttle = (fn: (...args: any) => void, interval = 500) => {
  let lastTime = 0

  const _throttle = (...args: any) => {
    return new Promise((resolve, reject) => {
      // 获取当前事件触发的时间
      const nowTime = new Date().getTime()

      // 使用当前触发的时间和之前的时间间隔以及上一次开始的时间，
      // 计算出还剩余多长事件需要去触发函数
      if (nowTime - lastTime >= interval) {
        // 触发函数
        const result = fn.apply(this, args)
        resolve(result)
        // 保留上一次触发的时间
        lastTime = nowTime
      }
    })
  }
  _throttle.cancel = () => {
    lastTime = new Date().getTime()
  }
  return _throttle
}

const _throttle = throttle(() => {
  console.log('fn 节流执行了')
  return 'throttle'
}, 1000)

const submit = () => {
  console.log('点击按钮了!')
  _throttle().then(res => {
    console.log('返回值:' + res)
  })
  _throttle.cancel()
}
</script>

<template>
  <el-button @click="submit">防抖</el-button>
</template>

<script setup lang="ts">
import {} from 'vue'
import Parent from './components/Parent.vue'

/**
 * 防抖
 * 在持续触发事件中，无论进行时间多长，只有一定时间内没有再触发事件，事件才会执行一次
 * 如果设定的时间到来之前，又一次触发了事件，就重新开始延时
 * @param fn 执行的函数
 * @param delay 延迟执行时间(s)
 * @param immedidate 是否立即执行
 * @returns
 */
const debounce = (fn: (...args: any) => void, delay = 200, immedidate = false) => {
  let isInvoke = false // 是否已经执行了一次
  let timer: any = null
  const _debounce = (...args: any) => {
    return new Promise((resolve, reject) => {
      // 清除上一次的执行
      if (timer) clearTimeout(timer)

      // 判断是否需要立即执行
      if (immedidate && !isInvoke) {
        const result = fn.apply(this, args)
        resolve(result)
        isInvoke = true
      } else {
        // 延迟fn函数的执行
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          resolve(result)
          isInvoke = false
          timer = null
        }, delay)
      }
    })
  }
  _debounce.cancel = () => {
    if (timer) clearTimeout(timer)
    isInvoke = false
  }

  return _debounce
}

const _debounce = debounce(() => {
  console.log('fn 防抖执行了')
  return 'debounce'
}, 1000)

const submit = () => {
  console.log('点击按钮了!')
  _debounce().then(res => {
    console.log('返回值:' + res)
  })
  // _debounce.cancel()
}
</script>

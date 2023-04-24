<template>
  <span>{{ displayedAmount }}</span>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
defineOptions({
  name: 'UCounter'
})

interface Props {
  // 开始数量
  startAmount?: number
  // 结束数量
  endAmount?: number
  // 持续时间
  duration?: number
  autoinit?: boolean
  //前缀
  prefix?: string
  //后缀
  suffix?: string
  //分隔符
  separator?: string
  //小数分隔符
  decimalSeparator?: string
  //小数
  decimals?: number
}

const state = reactive({
  // 时间戳
  timestamp: 0,
  startTimestamp: 0,
  currentAmount: 0,
  currentStartAmount: 0,
  currentDuration: 0,
  paused: false,
  // 剩下的
  remaining: 0,
  // 动画帧
  animationFrame: 0
})

const props = withDefaults(defineProps<Props>(), {
  startAmount: 0,
  endAmount: 0,
  duration: 3,
  autoinit: true,
  prefix: '',
  suffix: '',
  separator: ',',
  decimalSeparator: '.',
  decimals: 0
})

const isCountingUP = () => props.endAmount > props.startAmount

const formatedAmount = computed(() => {
  const regex = /(\d+)(\d{3})/

  // toFiexed返回一个包含此Number值的字符串，四舍六入五取偶
  let numberString: string = state.currentAmount.toFixed(props.decimals)
  numberString += ''
  let numberArray: Array<string> = numberString.split('.')
  let numbers: string = numberArray[0]
  let decimals: string = numberArray.length > 1 ? props.decimalSeparator + numberArray[1] : ''
  // isNaN() 函数用于检查其参数是否是非数字值。
  let isNumber = !isNaN(parseFloat(props.separator))

  if (props.separator && !isNumber) {
    while (regex.test(numbers)) numbers = numbers.replace(regex, '$1' + props.separator + '$2')
  }

  return numbers + decimals
})

const displayedAmount = computed(() => `${props.prefix}${formatedAmount.value}${props.suffix}`)

const emit = defineEmits<{
  (e: 'finished'): void
}>()

onMounted(() => {
  state.currentAmount = props.startAmount
  state.currentStartAmount = props.startAmount
  state.currentDuration = props.duration * 1000
  state.remaining = props.duration * 1000
  if (props.autoinit) start()
  else state.paused = true
})

const start = () => {
  cancelAnimation()
  state.currentStartAmount = props.startAmount
  state.startTimestamp = 0
  state.currentDuration = props.duration * 1000
  state.paused = false
  // 执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画, 更新动画时你应该调用此方法, 回调函数执行次数通常是每秒 60 次
  // 系统绘制频率是60Hz，那回调函数就是1000/60 = 16.7ms被执行一次
  state.animationFrame = window.requestAnimationFrame(counting)
}

const cancelAnimation = () => {
  // 取消一个先前通过调用window.requestAnimationFrame()方法添加到计划中的动画帧请求。
  if (state.animationFrame) window.cancelAnimationFrame(state.animationFrame)
}

const counting = (timestamp: number) => {
  state.timestamp = timestamp
  if (!state.startTimestamp) state.startTimestamp = timestamp
  let progress: number = timestamp - state.startTimestamp
  state.remaining = state.currentDuration - progress

  if (!isCountingUP) {
    state.currentAmount =
      state.currentStartAmount - (state.currentStartAmount - props.endAmount) * (progress / state.currentDuration)
    state.currentAmount = state.currentAmount < props.endAmount ? props.endAmount : state.currentAmount
  } else {
    state.currentAmount =
      state.currentStartAmount + (props.endAmount - state.currentStartAmount) * (progress / state.currentDuration)
    state.currentAmount = state.currentAmount > props.endAmount ? props.endAmount : state.currentAmount
  }

  if (progress < state.currentDuration) state.animationFrame = window.requestAnimationFrame(counting)
  else emit('finished')
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="u-notice-bar" :style="{ background, height: `${height}px` }">
    <div v-if="vertical">
      <el-carousel height="40px" direction="vertical" :autoplay="true" indicator-position="none" :interval="interval">
        <el-carousel-item v-for="v in data" :key="v">{{ v }}</el-carousel-item>
      </el-carousel>
    </div>
    <div v-else :style="{ color, fontSize: `${size}px` }" class="u-notice-bar-wrap">
      <u-icon v-if="prefixIcon" :name="prefixIcon"></u-icon>
      <div ref="boxRef" class="text-box">
        <div ref="textRef" class="text">{{ data }}</div>
      </div>
      <u-icon v-if="suffixIcon" :name="suffixIcon"></u-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import { ElCarousel } from '~/element'

defineOptions({
  name: 'UNoticeBar'
})

interface Props {
  data: any
  size?: number | string
  vertical?: boolean
  // 通知栏高度，单位px
  height?: number | string
  // 动画延迟时间 (s)
  delay?: number
  // 滚动速率 (px/s)
  spped?: number
  suffixIcon?: string
  prefixIcon?: string
  // 通知文本颜色
  color?: string
  // 通知背景色
  background?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 14,
  height: 40,
  delay: 1000,
  spped: 100,
  color: '--color-warning',
  background: 'var(--color-warning-light-9)'
})

const state = reactive({
  boxWidth: 0,
  textWidth: 0,
  oneTime: 0,
  twoTime: 0,
  order: 1
})
const boxRef = ref({} as HTMLDivElement)
const textRef = ref({} as HTMLDivElement)

const interval = computed(() => (props.delay > 2000 ? props.delay : 2000))

// 初始化 animation 各项参数
const initAnimation = () => {
  nextTick(() => {
    state.boxWidth = boxRef.value.offsetWidth
    state.textWidth = textRef.value.offsetWidth
    document.styleSheets[0].insertRule(`@keyframes oneAnimation {0% {left: 0px;} 100% {left: -${state.textWidth}px;}}`)
    document.styleSheets[0].insertRule(
      `@keyframes twoAnimation {0% {left: ${state.boxWidth}px;} 100% {left: -${state.textWidth}px;}}`
    )
    computeAnimationTime()
    setTimeout(() => {
      changeAnimation()
    }, props.delay)
  })
}

// 计算 animation 滚动时长
const computeAnimationTime = () => {
  state.oneTime = state.textWidth / props.spped
  state.twoTime = (state.textWidth + state.boxWidth) / props.spped
}

// 改变 animation 动画调用
const changeAnimation = () => {
  if (state.order === 1) {
    textRef.value.style.cssText = `animation: oneAnimation ${state.oneTime}s linear; opactity: 1;}`
    state.order = 2
  } else {
    textRef.value.style.cssText = `animation: twoAnimation ${state.twoTime}s linear infinite; opacity: 1;`
  }
}

// 监听 animation 动画的结束
const listenerAnimationend = () => {
  textRef.value.addEventListener(
    'animationend',
    () => {
      changeAnimation()
    },
    false
  )
}

// 页面加载时
onMounted(() => {
  if (props.vertical) return
  initAnimation()
  listenerAnimationend()
})
</script>

<style lang="scss" scoped>
.u-notice-bar {
  padding: 0 15px;
  border-radius: 4px;
  &-wrap {
    display: flex;
    align-items: center;
    height: inherit;
    .text-box {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      height: inherit;
      .text {
        white-space: nowrap;
        position: absolute;
        left: 0;
      }
    }
  }
}
.el-carousel__item {
  display: flex;
  align-items: center;
}

.el-carousel__item.is-animating {
  transition: transform 1s linear;
}
</style>

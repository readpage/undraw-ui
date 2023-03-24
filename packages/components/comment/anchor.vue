<template>
  <div class="u-anchor">
    <nav class="toc-content">
      <h3 class="toc-content-heading">目录</h3>
      <u-divider></u-divider>
      <ul class="toc-items">
        <li
          v-for="(v, k) in navs"
          :key="k"
          :class="[{ active: active == k }, d1((v as HTMLDivElement).nodeName)]"
          @click="scrollTo(k as number)"
        >
          {{ (v as HTMLDivElement).innerText }}
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

defineOptions({
  name: 'UAnchor'
})

interface Props {
  // 指定监听的容器
  container: string
  // 滚动轴
  target?: string
  // 距离窗口顶部达到指定偏移量
  targetOffset?: number
}
const props = withDefaults(defineProps<Props>(), {
  targetOffset: 0
})

const active = ref(0)
const navs = ref({} as NodeListOf<HTMLDivElement>)
const target = ref({} as Element | Window)

const d1 = (val: string) => {
  switch (val) {
    case 'H1':
    case 'H2':
      return 'd2'
    case 'H3':
      return 'd3'
    default:
      return 'd4'
  }
}

// 滚动监听器
const onScroll = () => {
  // 所有锚点元素的 offsetTop
  const offsetTopArr: number[] = []
  navs.value.forEach(v => {
    offsetTopArr.push(v.offsetTop)
  })

  let scroll = target.value instanceof Element ? target.value.scrollTop : undefined

  // 获取当前文档流的 scrollTop
  const scrollTop = scroll || document.documentElement.scrollTop || document.body.scrollTop
  // 定义当前点亮的导航下标
  offsetTopArr.forEach((v, k) => {
    if (scrollTop >= v - 10 - props.targetOffset) {
      active.value = k
    }
  })
}

// 跳转到指定索引的元素
const scrollTo = (k: number) => {
  const tar = navs.value.item(k)
  if (props.target) {
    target.value.scrollTo({
      top: tar.offsetTop - props.targetOffset,
      behavior: 'smooth'
    })
  } else {
    document.documentElement.scrollTo({
      top: tar.offsetTop - props.targetOffset,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  if (props.target) {
    target.value = document.querySelector(props.target) as Element
  } else {
    target.value = window
  }
  // 获取所有锚点元素
  navs.value = document
    .querySelector(props.container)
    ?.querySelectorAll('h1, h2, h3, h4, h5, h6') as NodeListOf<HTMLDivElement>
  target.value.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  target.value.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
.u-anchor {
  width: inherit;
}
.toc-content {
  padding: 10px;
  .toc-content-heading {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
  }
  h3 {
    padding-left: 5px;
  }
  .toc-items {
    list-style: none;
    padding: 0;
    margin: 12px 0 0;
    li {
      cursor: pointer;
      padding: 5px;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
      position: relative;
    }
    li:hover {
      background: #f7f8fa;
      border-radius: 4px;
      color: #409eff;
    }
    .active {
      color: #409eff;
    }
    .d3 {
      padding-left: 15px;
    }
    .d4 {
      padding-left: 35px;
    }
    .active::before {
      content: '';
      position: absolute;
      left: -6px;
      background-color: #409eff;
      border-radius: 4px;
      width: 4px;
      height: 14px;
      top: 8px;
    }
  }
}
</style>

<template>
  <div class="u-anchor">
    <nav class="toc-content">
      <h3 class="toc-content-heading">目录</h3>
      <ul class="toc-items">
        <li v-for="(v, k) in navs" :key="k" :class="[{ active: active == k }, d1((v as HTMLDivElement).nodeName)]" @click="scrollTo(k as number)">
          {{ (v as HTMLDivElement).innerText }}
        </li>
      </ul>
      <div class="toc-marker" style="opacity: 1; top: 129px"></div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

defineOptions({
  name: 'UAnchor'
})

const active = ref(0)
const navs = ref({} as NodeListOf<HTMLDivElement>)

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
  // 获取当前文档流的 scrollTop
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // 定义当前点亮的导航下标
  offsetTopArr.forEach((v, k) => {
    if (scrollTop >= v - 4.5) {
      active.value = k
    }
  })
}

// 跳转到指定索引的元素
const scrollTo = (k: number) => {
  const target = navs.value.item(k)
  target.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  // 获取所有锚点元素
  navs.value = document.querySelector('.content')?.querySelectorAll('h1, h2, h3, h4, h5, h6') as NodeListOf<HTMLDivElement>
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
.u-anchor {
  position: fixed;
  top: 80px;
  left: 700px;
}
.toc-content {
  padding: 10px;
  .toc-content-heading {
    font-size: 12px;
    color: var(--text-color-light);
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 0;
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
      color: #909399;
    }
    li:hover {
      background: #f7f8fa;
      border-radius: 4px;
    }
    .active {
      color: #409eff;
    }
    .d3 {
      margin-left: 15px;
    }
    .d4 {
      margin-left: 35px;
    }
    .active::before {
      content: '';
      position: absolute;
      left: 0px;
      background-color: #409eff;
      border-radius: 4px;
      width: 4px;
      height: 14px;
      margin-top: 2%;
    }
  }
}
</style>

<template>
  <div class="u-chat">
    <!-- 头部区域 -->
    <header>
      <slot name="header"></slot>
    </header>
    <!-- 聊天区域 -->
    <main>
      <el-scrollbar ref="scrollbarRef" @scroll="onScroll($event)">
        <Content :data="config.data" :load="state.load" />
      </el-scrollbar>
      <!-- 置底按钮 -->
      <div class="skip-bottom" :class="{ show: skipBottom }" @click="onSkipBottom">
        <span>回到底部</span>
        <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M36 12L24 24L12 12"
            stroke="#ffffff"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36 24L24 36L12 24"
            stroke="#ffffff"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </main>
    <!-- 编辑器区域 -->
    <footer>
      <Editor />
    </footer>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, provide, reactive, ref, watch } from 'vue'
import Content from './content.vue'
import Editor from './editor.vue'
import { ElScrollbar } from 'element-plus'

export interface ChatApi {
  id: string | number
  content: string
  uid: string | number
  user: {
    username: string
    avatar: string
  }
  createTime: string
  float?: 'left' | 'right'
}

export interface ChatConfigApi {
  user: {
    id: string | number
    username: string
    avatar: string
  }
  data: ChatApi[]
  emoji: any
}

interface Props {
  config: ChatConfigApi
}

defineOptions({
  name: 'UChat'
})

const props = withDefaults(defineProps<Props>(), {})

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const skipBottom = ref(false)
const state = reactive({
  load: 1
})

const emit = defineEmits<{
  (e: 'load-more', finish: (val: any[]) => void): void
  (e: 'submit', val: any, finish: Function): void
}>()

let scrollHeight = 0

function load(val: any[]) {
  if (val && val.length == 0) {
    state.load = 2
    return
  }
  val.forEach(t => {
    if (props.config.user.id == t.uid) {
      t.float = 'right'
    }
  })
  props.config.data!.unshift(...val.reverse())
  nextTick(() => {
    const scroll = document.querySelector('.u-chat .el-scrollbar__wrap')
    if (scroll) {
      scrollbarRef.value?.setScrollTop(scroll.scrollHeight - scrollHeight)
      scrollHeight = scroll.scrollHeight
      if (scroll.scrollHeight == scroll.clientHeight) {
        emit('load-more', load)
      }
    }
  })
  state.load = 1
}

function onScroll(e: any) {
  if (e.scrollTop == 0) {
    state.load = 0
    emit('load-more', load)
  }
  nextTick(() => {
    const scroll = document.querySelector('.u-chat .el-scrollbar__wrap')
    if (scroll) {
      const height = scroll.scrollTop + scroll.clientHeight
      skipBottom.value = height < scroll.scrollHeight - 200
    }
  })
}

function onSkipBottom() {
  const scroll = document.querySelector('.u-chat .el-scrollbar__wrap')
  if (scroll) {
    scroll.scrollTo({
      top: scroll.scrollHeight,
      behavior: 'smooth'
    })
  }
}

// 表情包
provide('injectEmoji', props.config.emoji)
// 提交信息
provide('injectSubmit', (val: any, finish: Function) => {
  emit('submit', val, (obj: ChatApi) => {
    if (props.config.user.id == obj.uid) {
      obj.float = 'right'
    }
    props.config.data!.push(obj)
    finish()
    nextTick(() => {
      onSkipBottom()
    })
  })
})

onMounted(() => {
  emit('load-more', load)
})
</script>

<style lang="scss" scoped>
.u-chat {
  background-color: var(--u-bg-color);
  display: flex;
  flex-direction: column;
  height: 100vh;
  header {
    border-bottom: 1px solid var(--u-border-color);
  }
  main {
    height: calc(100vh - 60px - 150px);
    position: relative;
    .skip-bottom {
      position: absolute;
      right: 10px;
      bottom: -30px;
      min-width: 100px;
      height: 28px;
      font-size: 12px;
      background-color: #1ebafc;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      cursor: pointer;
      transition: bottom 1s ease-in-out;
      border-radius: 10px 10px 0 0;

      span {
        margin-right: 5px;
      }

      &.show {
        bottom: 0px;
      }
    }
  }
  footer {
    height: 150px;
  }
}
</style>

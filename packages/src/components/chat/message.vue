<template>
  <div class="message">
    <el-scrollbar ref="scrollbarRef">
      <div class="chat-list">
        <div v-for="(item, index) in data" :key="index" :class="{ self: userId == item.id }" class="chat-item">
          <!-- 头像 -->
          <div>
            <el-avatar>
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
          </div>
          <!-- 内容  -->
          <div class="content">
            <!-- 用户名 -->
            <div v-if="userId != item.id" class="username">{{ item.username }}</div>
            <div class="card-box" v-html="useEmojiParse(allEmoji, item.content)"></div>
          </div>
          <!-- 日期 -->
          <div class="date"></div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import { inject, nextTick, ref } from 'vue'
import { ElAvatar, ElScrollbar } from 'element-plus'
import { ChatApi, EmojiApi, InjectionEmojiApi } from '~/index'
import { useEmojiParse } from '~/hooks'

interface Props {
  data: ChatApi[]
  userId: number
}

const { allEmoji } = inject(InjectionEmojiApi) as EmojiApi

const props = defineProps<Props>()

const scrollbarRef = ref()

const scroll = () => {
  nextTick(() => {
    const tar = document.querySelector('.chat-item:last-child') as HTMLDivElement
    scrollbarRef.value.setScrollTop(tar.offsetTop)
  })
}

defineExpose({
  scroll
})
</script>

<style lang="scss" scoped>
.message {
  position: absolute;
  width: 100%;
  top: 80px;
  bottom: 50px;
  .chat-list {
    padding: 20px 16px 0 16px;
    .chat-item {
      display: flex;
      margin-bottom: 20px;
      .content {
        margin: 0 50px 0 10px;
        .card-box {
          margin-top: 5px;
          background: #ffffff;
          padding: 5px 10px;
          border-radius: 4px;
          word-break: break-all;
        }
      }
    }
  }
}

.self {
  flex-direction: row-reverse;
  .username {
    text-align: right;
  }
  .content {
    margin: 0 10px 0 50px !important;
    .card-box {
      background-color: #95ec69 !important;
    }
  }
}
</style>

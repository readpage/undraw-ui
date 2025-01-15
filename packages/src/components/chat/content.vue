<template>
  <div class="chat-content">
    <!-- 数据加载 -->
    <div class="load-toolbar">
      <span v-if="load == 0">正在加载数据中...</span>
      <span v-if="load == 1">查看更多消息 ...</span>
      <span class="no-more" v-if="load == 2">没有更多消息了</span>
    </div>
    <!-- 聊天消息 -->
    <div v-for="(item, index) in data" :key="item.id" class="message-item">
      <div class="datetime" v-show="showCreateTime(index, item.createTime)">{{ humanTime(item.createTime) }}</div>
      <div class="message-box" :class="{ right: item.float }">
        <aside class="avatar">
          <el-avatar :src="item.user.avatar" :size="40">
            <span>{{ item.user.username }}</span>
          </el-avatar>
        </aside>
        <main class="main-column">
          <div class="title">
            <span class="username">{{ item.user.username }}</span>
          </div>
          <div class="content">
            <div class="text">
              <div v-clean-html="useEmojiParse(emoji.allEmoji, item.content)" style="padding: 2px;"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, reactive, ref } from 'vue'
import { ChatApi } from './chat.vue'
import { formatTime, humanTime } from '~/util/datetime'
import { useEmojiParse } from '~/hooks'
import { ElAvatar } from 'element-plus'
import { vCleanHtml } from '~/util'

interface Props {
  data: ChatApi[]
  load: number
}
const props = defineProps<Props>()

const emoji = inject('injectEmoji') as any

function showCreateTime(index: number, datetime: any) {
  if (datetime == null || datetime == undefined) {
    return false
  }

  let time = Math.floor(new Date(datetime).getTime() / 1000)
  let currTime = Math.floor(new Date().getTime() / 1000)

  // datetime相对当前时间在5分钟内时间不显示
  if (currTime - time < 300) return false
  // 第一条和最好一条消息显示
  if (index == 0 || index == props.data.length - 1) {
    return true
  }
  let prevTime = props.data[index - 1].createTime
  return !(formatTime(datetime, 'y-m-d h:i') == formatTime(prevTime, 'y-m-d h:i'))
}
</script>

<style lang="scss" scoped>
.chat-content {
  padding: 10px 15px 30px;
  .load-toolbar {
    height: 38px;
    color: #409eff;
    text-align: center;
    line-height: 38px;
    font-size: 13px;
  }
  .no-more {
    color: #b9b3b3;
  }
}
.message-item {
  .message-box {
    min-height: 30px;
    display: flex;
    .main-column {
      flex: 1;
      padding: 5px;
      > div {
        display: flex;
        align-items: center;
      }
      .title {
        height: 24px;
        margin-bottom: 2px;
        font-size: 14px;
        user-select: none;
        color: #a7a0a0;
      }
      .content {
        display: flex;
        .text {
          flex-direction: row-reverse;
          color: var(--u-text-color-dark);
          background-color: var(--u-color-primary-light-7);
          // border-radius: 10px 0px 10px 10px;
          border-radius: 0px 10px 10px 10px;
          font-size: 14px;
          min-width: 30px;
          min-height: 30px;
          padding: 3px;
        }
      }
    }
    .avatar {
      padding-top: 10px;
    }
  }

  .right {
    flex-direction: row-reverse;
    .main-column {
      div {
        justify-content: flex-end;
      }
      .content {
        .text {
          border-radius: 10px 0px 10px 10px;
        }
      }
    }
  }

  .datetime {
    height: 30px;
    line-height: 30px;
    color: #ccc9c9;
    font-size: 12px;
    text-align: center;
    margin: 5px 0;
  }
}
</style>

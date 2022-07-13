<template>
  <div class="message">
    <el-scrollbar>
      <div class="chat-list">
        <div v-for="(item, index) in data" :key="index" :class="{ self: item.self }" class="chat-item">
          <!-- 头像 -->
          <div>
            <el-avatar>
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
          </div>
          <!-- 内容  -->
          <div class="content">
            <!-- 用户名 -->
            <div v-if="!item.self" class="username">{{ item.username }}</div>
            <div class="card-box">{{ item.content }}</div>
          </div>
          <!-- 日期 -->
          <div class="date"></div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElAvatar, ElScrollbar } from 'element-plus'
import { ChatApi } from '~/index'

interface Props {
  data: ChatApi[]
}

const props = defineProps<Props>()
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
        margin: 0 10px;
        .card-box {
          margin-top: 5px;
          background: #ffffff;
          padding: 5px 10px;
          border-radius: 4px;
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
}
</style>

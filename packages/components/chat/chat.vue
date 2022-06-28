<template>
  <div class="u-chat">
    <div :class="{ active: active }" class="chat-container translate">
      <!-- <u-emoji :emoji="emoji"></u-emoji> -->
      <div class="chat-wrapper">
        <!-- 标题 -->
        <div class="header">
          <img width="32" height="32" src="https://static.talkxj.com/config/logo.png" />
          <div style="margin-left: 12px">
            <div>聊天室</div>
            <div style="font-size: 12px">当前2人在线</div>
          </div>
        </div>
        <!-- 对话内容 -->
        <div class="message"></div>
        <!-- 输入框 -->
        <div class="footer">
          <u-emoji :emoji="emoji" placement="top-end">
            <svg width="21" height="21" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                data-v-9fe533ba=""
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00002 0.666504C12.0501 0.666504 15.3334 3.94975 15.3334 7.99984C15.3334 12.0499 12.0501 15.3332 8.00002 15.3332C3.94993 15.3332 0.666687 12.0499 0.666687 7.99984C0.666687 3.94975 3.94993 0.666504 8.00002 0.666504ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.6667 5.66667V7.66667H9.33333V5.66667H10.6667ZM6.66667 5.66667V7.66667H5.33333V5.66667H6.66667ZM10.0767 9.33333H11.0495C11.1804 9.33333 11.2866 9.43951 11.2866 9.57048C11.2866 9.60754 11.2779 9.64409 11.2612 9.67718L11.244 9.71053C10.6294 10.8739 9.40726 11.6667 7.99998 11.6667C6.61523 11.6667 5.40977 10.8991 4.7859 9.76612L4.73786 9.67593C4.67845 9.56052 4.72385 9.4188 4.83926 9.35939C4.87253 9.34226 4.90941 9.33333 4.94683 9.33333H5.92347C6.02396 9.33332 6.11908 9.37865 6.18238 9.4567C6.26207 9.55496 6.32833 9.62955 6.38117 9.68046C6.80074 10.0847 7.37133 10.3333 7.99998 10.3333C8.63289 10.3333 9.20694 10.0814 9.62728 9.67224C9.67791 9.62296 9.74135 9.55121 9.8176 9.45698C9.88089 9.37877 9.97611 9.33333 10.0767 9.33333Z"
              ></path>
            </svg>
          </u-emoji>
          <i class="select-none cursor-pointer">
            <svg
              width="21"
              height="21"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1633"
            >
              <path
                d="M896 156.8v-3.2c0-3.2-3.2-6.4-3.2-9.6 0 0 0-3.2-3.2-3.2 0-3.2-3.2-3.2-3.2-6.4h-3.2s-3.2 0-3.2-3.2h-3.2-3.2-3.2C867.2 128 864 128 864 128h-3.2-3.2c-3.2 0-3.2 0-6.4 3.2h-3.2l-704 352c-12.8 6.4-19.2 19.2-16 32 3.2 12.8 12.8 25.6 25.6 25.6l192 32h6.4c6.4 0 12.8-3.2 19.2-6.4l278.4-208-195.2 227.2c-3.2 3.2-3.2 6.4-6.4 9.6v265.6c0 16 9.6 28.8 25.6 32h6.4c12.8 0 22.4-6.4 28.8-16l80-144 192 153.6c6.4 3.2 12.8 6.4 19.2 6.4 3.2 0 9.6 0 12.8-3.2 9.6-3.2 19.2-16 19.2-25.6l64-704v-3.2"
                p-id="1634"
              ></path>
            </svg>
          </i>
        </div>
      </div>
    </div>
    <el-button class="chat-btn" @click="active = !active">chat</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from '~/element'
import emoji from './emoji'

defineOptions({
  name: 'UChat'
})

const active = ref(false)
</script>

<style lang="scss" scoped>
.u-chat {
  font-size: 14px;
  .chat-container {
    height: calc(85% - 84px);
    max-height: 590px;
    min-height: 250px;
    width: 400px;
    z-index: 1000;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.12);
    background: #f4f6fb;
    border-radius: 10px;
    position: fixed;
    bottom: 70px;
    right: 35px;

    .chat-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      .header {
        display: flex;
        align-items: center;
        padding: 20px 24px;
        background: #ffffff;
        border-radius: 1em 1em 0 0;
        box-shadow: 0 10px 15px -16px rgba(52, 52, 63, 0.08), 0 4px 6px -8px rgba(50, 50, 93, 0.04);
      }
      .message {
        flex: 1;
        padding: 20px 16px 0 16px;
      }
      .footer {
        padding: 8px 16px;
        background: #f7f7f7;
        fill: #515767;
        border-radius: 0 0 1em 1em;
        display: flex;
        align-items: center;
      }
    }
  }
  .translate {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .active {
    display: block;
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
  .chat-btn {
    z-index: 1000;
    position: fixed;
    bottom: 20px;
    right: 35px;
  }
}
</style>

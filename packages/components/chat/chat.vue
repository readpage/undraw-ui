<template>
  <div class="u-chat">
    <div :class="{ active: active }" class="chat-container translate">
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
          <!-- 切换输入方式 -->
          <i v-show="!isVoice" style="margin-right: 8px" class="select-none cursor-pointer" @click="isVoice = !isVoice">
            <svg width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8="">
              <path
                fill="currentColor"
                d="M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
              ></path>
            </svg>
          </i>
          <i v-show="isVoice" style="margin-right: 8px" class="select-none cursor-pointer" @click="isVoice = !isVoice">
            <svg
              width="22"
              height="22"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="20290"
            >
              <path
                d="M853.333333 213.333333l-682.666667 0c-47.146667 0-84.906667 38.186667-84.906667 85.333333l-0.426667 426.666667c0 47.146667 38.186667 85.333333 85.333333 85.333333l682.666667 0c47.146667 0 85.333333-38.186667 85.333333-85.333333l0-426.666667c0-47.146667-38.186667-85.333333-85.333333-85.333333zM469.333333 341.333333l85.333333 0 0 85.333333-85.333333 0 0-85.333333zM469.333333 469.333333l85.333333 0 0 85.333333-85.333333 0 0-85.333333zM341.333333 341.333333l85.333333 0 0 85.333333-85.333333 0 0-85.333333zM341.333333 469.333333l85.333333 0 0 85.333333-85.333333 0 0-85.333333zM298.666667 554.666667l-85.333333 0 0-85.333333 85.333333 0 0 85.333333zM298.666667 426.666667l-85.333333 0 0-85.333333 85.333333 0 0 85.333333zM682.666667 725.333333l-341.333333 0 0-85.333333 341.333333 0 0 85.333333zM682.666667 554.666667l-85.333333 0 0-85.333333 85.333333 0 0 85.333333zM682.666667 426.666667l-85.333333 0 0-85.333333 85.333333 0 0 85.333333zM810.666667 554.666667l-85.333333 0 0-85.333333 85.333333 0 0 85.333333zM810.666667 426.666667l-85.333333 0 0-85.333333 85.333333 0 0 85.333333z"
                p-id="20291"
              ></path>
            </svg>
          </i>
          <!-- 文字输入 -->
          <el-input
            v-show="!isVoice"
            id="emojiInput"
            v-model="content"
            placeholder="请输入内容"
            @keydown.enter="submit"
          ></el-input>
          <!-- 语音输入 -->
          <button v-show="isVoice" class="voice-btn">按住说话</button>
          <!-- 表情框 -->
          <u-emoji style="margin: 0 8px 0" :emoji="emoji" placement="top-end" @add-emoji="addEmoji">
            <svg
              width="22"
              height="22"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7186"
            >
              <path
                d="M510.944 960c-247.04 0-448-200.96-448-448s200.992-448 448-448c247.008 0 448 200.96 448 448S757.984 960 510.944 960zM510.944 128c-211.744 0-384 172.256-384 384 0 211.744 172.256 384 384 384 211.744 0 384-172.256 384-384C894.944 300.256 722.688 128 510.944 128zM512 773.344c-89.184 0-171.904-40.32-226.912-110.624-10.88-13.92-8.448-34.016 5.472-44.896 13.888-10.912 34.016-8.48 44.928 5.472 42.784 54.688 107.136 86.048 176.512 86.048 70.112 0 134.88-31.904 177.664-87.552 10.784-14.016 30.848-16.672 44.864-5.888 14.016 10.784 16.672 30.88 5.888 44.864C685.408 732.32 602.144 773.344 512 773.344zM368 515.2c-26.528 0-48-21.472-48-48l0-64c0-26.528 21.472-48 48-48s48 21.472 48 48l0 64C416 493.696 394.496 515.2 368 515.2zM656 515.2c-26.496 0-48-21.472-48-48l0-64c0-26.528 21.504-48 48-48s48 21.472 48 48l0 64C704 493.696 682.496 515.2 656 515.2z"
                p-id="7187"
              ></path>
            </svg>
          </u-emoji>
          <!-- 发送按钮 -->
          <i style="padding-bottom: 5px" class="select-none cursor-pointer" @click="submit">
            <svg
              width="18"
              height="18"
              viewBox="0 0 1025 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="15072"
            >
              <path
                d="M1008.00076 6.285714q18.857143 13.714286 15.428571 36.571429l-146.285714 877.714286q-2.857143 16.571429-18.285714 25.714286-8 4.571429-17.714286 4.571429-6.285714 0-13.714286-2.857143l-258.857143-105.714286-138.285714 168.571429q-10.285714 13.142857-28 13.142857-7.428571 0-12.571429-2.285714-10.857143-4-17.428571-13.428571t-6.571429-20.857143l0-199.428571 493.714286-605.142857-610.857143 528.571429-225.714286-92.571429q-21.142857-8-22.857143-31.428571-1.142857-22.857143 18.285714-33.714286l950.857143-548.571429q8.571429-5.142857 18.285714-5.142857 11.428571 0 20.571429 6.285714z"
                p-id="15073"
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
import { ElButton, ElInput } from '~/element'
import { UToast } from '~/index'
import emoji from './emoji'

defineOptions({
  name: 'UChat'
})

const active = ref(false)
const content = ref('')
const isVoice = ref(false)

const submit = () => {
  if (!content.value) {
    UToast({ type: 'error', message: '内容不能为空' })
  }
  console.log('提交成功!')
}

const addEmoji = (val: string) => {
  let elInput = document.getElementById('emojiInput') as HTMLInputElement
  let startPos = elInput.selectionStart // input 第0个字符到选中的字符
  let endPos = elInput.selectionEnd // 选中的字符到最后的字符
  let txt = elInput.value
  if (startPos === null || endPos === null) return
  // 将表情添加到选中的光标位置
  let result = txt.substring(0, startPos) + val + txt.substring(endPos)
  elInput.value = result // 赋值给input的value
  // 重新定义光标位置
  elInput.focus()
  elInput.selectionStart = startPos + val.length
  elInput.selectionEnd = startPos + val.length
  content.value = result // 赋值给表单中的的字段
}
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

        .voice-btn {
          font-size: 13px;
          outline: none;
          height: 32px;
          width: 100%;
          background: #fff;
          border: none;
          border-radius: 2px;
        }
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

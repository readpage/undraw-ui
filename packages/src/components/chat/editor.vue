<template>
  <div class="editor">
    <u-editor ref="editorRef" v-model="content" placeholder="请输入内容">
      <template #footer>
        <div class="footer">
          <div class="left"><u-emoji :emoji="emoji" @add-emoji="(val: string) => editorRef?.addText(val)"></u-emoji></div>
          <div class="right">
            <!-- 发送按钮 -->
            <u-icon size="18" :class="{ 'submit-btn': content.trim() != '' }" class="select-none cursor-pointer" @click="submit">
              <svg viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15072">
                <path
                  d="M1008.00076 6.285714q18.857143 13.714286 15.428571 36.571429l-146.285714 877.714286q-2.857143 16.571429-18.285714 25.714286-8 4.571429-17.714286 4.571429-6.285714 0-13.714286-2.857143l-258.857143-105.714286-138.285714 168.571429q-10.285714 13.142857-28 13.142857-7.428571 0-12.571429-2.285714-10.857143-4-17.428571-13.428571t-6.571429-20.857143l0-199.428571 493.714286-605.142857-610.857143 528.571429-225.714286-92.571429q-21.142857-8-22.857143-31.428571-1.142857-22.857143 18.285714-33.714286l950.857143-548.571429q8.571429-5.142857 18.285714-5.142857 11.428571 0 20.571429 6.285714z"
                  p-id="15073"
                ></path>
              </svg>
            </u-icon>
          </div>
        </div>
      </template>
    </u-editor>
  </div>
</template>
<script setup lang="ts">
import { inject, ref } from 'vue'
import { UEmoji, UToast, UIcon, UEditor } from 'undraw-ui'
import { EditorInstance } from '~/components/editor'
const editorRef = ref<EditorInstance>()

const content = ref('')

const emoji = inject('injectEmoji') as any
const submit2 = inject('injectSubmit') as Function

const keydown = (e: Event | KeyboardEvent) => {
  const { ctrlKey, key } = e as KeyboardEvent
  if (ctrlKey && key == 'Enter') {
    //用户点击了ctrl+enter触发
    // console.log('ctrl+enter')
    submit()
  } else {
    // 用户点击了enter触发
    // console.log('enter')
  }
}

const submit = () => {
  let t = content.value
  if (!t.trim()) {
    UToast({ type: 'error', message: '内容不能为空' })
  } else {
    submit2(t, () => {
      editorRef.value?.clear()
    })
  }
}
</script>

<style lang="scss" scoped>
.editor {
  .footer {
    display: flex;
    justify-content: space-between;
    margin: 5px;
    padding: 5px;
    position: relative;
    &::before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      content: '';
      pointer-events: none;
      border-top: 1px solid var(--u-border-color-light);
    }
  }
  .submit-btn {
    color: rgb(31, 147, 255);
  }
}
</style>

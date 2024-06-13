<template>
  <div v-click-outside:[popperRef]="onClickOutside" class="comment-box">
    <u-editor
      ref="editorRef"
      v-model="content"
      :mention="mention"
      :class="{ 'input-active': action }"
      :placeholder="props.placeholder"
      :min-height="64"
      :img-list="imgList"
      @click="() => (action = true)"
      @focus="onFocus"
      @input="input"
      @submit="onSubmit"
      @paste="change"
      @change-img-list="changeFilesFn"
      @mention-search="mentionSearch"
    ></u-editor>
    <div v-if="action" class="action-box">
      <u-emoji :emoji="emoji" @add-emoji="(val: string) => editorRef?.addText(val)"></u-emoji>
      <div v-if="upload" class="picture" @click="inputRef?.click">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path
            data-v-48a7e3c5=""
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 1.3335C14.3514 1.3335 14.6394 1.60546 14.6648 1.95041L14.6666 2.00016V14.0002C14.6666 14.3516 14.3947 14.6396 14.0497 14.665L14 14.6668H1.99998C1.64853 14.6668 1.36059 14.3949 1.33514 14.0499L1.33331 14.0002V2.00016C1.33331 1.64871 1.60527 1.36077 1.95023 1.33532L1.99998 1.3335H14ZM13.3333 2.66618H2.66664V13.3328H13.3333V2.66618ZM11.9219 6.7879C11.9719 6.83791 12 6.90574 12 6.97647V11.7993C12 11.9098 11.9104 11.9993 11.8 11.9993H6.81615C6.7975 11.9993 6.77945 11.9968 6.76232 11.992L3.91042 11.9847C3.79996 11.9844 3.71063 11.8947 3.7109 11.7842C3.71102 11.7313 3.73209 11.6807 3.76948 11.6433L6.52468 8.88807C6.62882 8.78393 6.79766 8.78393 6.9018 8.88807L8.17297 10.1593L11.5447 6.7879C11.6489 6.68376 11.8177 6.68376 11.9219 6.7879ZM5.99997 3.99951V5.99951H3.99997V3.99951H5.99997Z"
          ></path>
        </svg>
        <span>{{ $u('comment.upload') }}</span>
        <input id="comment-upload" ref="inputRef" type="file" multiple @change="change" />
      </div>
      <template v-if="slots.func">
        <Func />
      </template>
      <div class="btn-box">
        <el-button type="primary" :disabled="disabled" @click="onSubmit">
          {{ props.contentBtn }}
        </el-button>
        <el-button v-if="props.cancelBtn" @click="onCancel">
          {{ props.cancelBtn }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, inject, nextTick, reactive, ref } from 'vue'
import { ClickOutside as vClickOutside, ElButton } from 'element-plus'
import { UEmoji, UToast, UEditor, translate as $u, EditorInstance } from 'undraw-ui'
import { EmojiApi } from '~/components/emoji'
import { InjectInputBox, InjectInputBoxApi, InjectSlots, CommentApi, InjectionEmojiApi } from '~/components/comment'
import { isEmpty, isNull, isImage, createObjectURL } from '~/util'
import { MentionApi } from '~/components/editor/mention.vue'

export interface InputBoxApi {
  focus(): void
}

interface Props {
  placeholder: string
  contentBtn: string
  parentId?: string
  reply?: CommentApi
  cancelBtn?: string
}

const props = defineProps<Props>()

const content = ref('')
const action = ref(false)
const disabled = ref(true)
const editorRef = ref<EditorInstance>()
const popperRef = ref()
const inputRef = ref<HTMLInputElement>()
const imgList = ref<string[]>([])
const files2 = ref<any[]>([])
const state = reactive({
  imgLength: 0
})
const changeFilesFn = (arr: any[]) => {
  files2.value = arr
}
const input = (e: Event) => {
  isEmpty(content.value.replace(/&nbsp;|<br>| /g, '')) ? (disabled.value = true) : (disabled.value = false)
}
const emit = defineEmits<{
  (e: 'hide', event: Event): void
  (e: 'close'): void
}>()

const { upload, submit, focus } = inject(InjectInputBox) as InjectInputBoxApi
const emoji = inject(InjectionEmojiApi) as EmojiApi
const mention = inject('injectMention') as MentionApi

// 提交评论的数据
const onSubmit = () => {
  submit({
    content: props.reply && props.parentId != props.reply.id ? `回复 <span style="color: var(--u-color-success-dark-2);">@${props.reply.user.username}:</span> ${content.value}` : content.value,
    parentId: isNull(props.parentId, null),
    reply: props.reply,
    files: files2.value,
    clear: () => {
      //清理输入框提交的数据
      clearData()
      // 关闭评论框事件
      emit('close')
    }
  })
}
const cancelFn = inject('cancelFn') as Function
// 取消按钮的事件
const onCancel = () => {
  // 关闭评论框事件
  clearData()
  emit('close')
  cancelFn()
}
//清理提交后输入框和图片列表数据
const clearData = () => {
  // 清空评论框内容
  ;(editorRef.value as any).clear()
  imgList.value.length = 0
  //清空图片列表
  files2.value = []
  //提交按钮禁用
  disabled.value = true
}

// 点击评论框外关闭操作栏和失去评论框焦点
function onClickOutside(event: Event) {
  // const child = event.target as HTMLElement
  // const target = document.querySelector(".el-popper")
  // if (!target?.contains(child) && isEmpty(content.value)) {
  //   action.value = false
  // }

  // 评论框有内容情况下不执行操作
  if (isEmpty(content.value) && !state.imgLength) {
    action.value = false
    emit('hide', event)
  }
}

function onFocus() {
  action.value = true
  // 显示操作栏
  nextTick(() => {
    // 所有以'el-popper-container'开头的id且被选中的元素
    popperRef.value = document.querySelector("div[id^='el-popper-container']")
  })
  // u-comment 评论框焦点事件
  focus()
}

defineExpose({
  focus: () => (editorRef as any).value?.focus(),
  changeMentionShow: (isShow: boolean) => (editorRef as any).value?.changeMentionShow(isShow)
})

const change = (val: Event, file?: File) => {
  if (!file) {
    imgList.value.length = 0 //清空上一次显示图片效果
    files2.value.length = 0
  }

  const files = file ? [file] : (inputRef.value?.files as any) //获取选中的文件对象
  state.imgLength = isNull(files?.length, 0)
  if (files) {
    for (let i = 0; i < files.length; i++) {
      let fileName = files[i].name //获取当-前文件的文件名
      let url = createObjectURL(files[i]) //获取当前文件对象的URL
      files2.value.push(files[i])
      //判断文件是否是图片类型
      if (isImage(fileName)) {
        imgList.value.push(url)
      } else {
        UToast({ type: 'warn', message: '请选择图片类型文件!', duration: 2500 })
      }
    }
  }
}

const injectMentionSearch = inject('injectMentionSearch') as Function
// 提及改变
function mentionSearch(val: string) {
  injectMentionSearch(val)
}

// slots
const slots = inject(InjectSlots) as any
// 功能卡槽
const Func = () => h('div', slots.func())
</script>

<style lang="scss" scoped>
@use '../../style/input-box.scss';
</style>

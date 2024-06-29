<template>
  <div v-click-outside:[mentionRef]="() => (state.showMention = false)" class="u-editor" :class="{ active: state.active }">
    <div
      ref="editorRef"
      class="rich-input"
      contenteditable="true"
      :placeholder="placeholder"
      @focus="onFocus"
      @input="onInput"
      @blur="onBlur"
      @keydown="keyDown"
      @paste="pasteFn"
      @keydown.up.prevent="moveSelection(-1)"
      @keydown.down.prevent="moveSelection(1)"
      v-html="text"
    ></div>
    <div ref="imageRef" class="image-preview-box">
      <div v-for="(url, index) in imgList" :key="index" class="image-preview">
        <img :src="url" alt="" />
        <div class="clean-btn" @click="removeImg(index)">
          <svg data-v-48a7e3c5="" data-v-7c7c7498="" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="12" rx="2" fill="#86909C"></rect>
            <path
              data-v-48a7e3c5=""
              data-v-7c7c7498=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.98095 5.49307L8.22012 3.25389C8.28521 3.18881 8.39074 3.18881 8.45582 3.25389L8.69153 3.4896C8.75661 3.55468 8.75661 3.66021 8.69153 3.7253L6.45235 5.96447L8.69153 8.20364C8.75661 8.26873 8.75661 8.37426 8.69153 8.43934L8.45582 8.67505C8.39074 8.74013 8.28521 8.74013 8.22012 8.67505L5.98095 6.43587L3.74178 8.67505C3.67669 8.74013 3.57116 8.74013 3.50608 8.67505L3.27037 8.43934C3.20529 8.37426 3.20529 8.26873 3.27037 8.20364L5.50954 5.96447L3.27037 3.7253C3.20529 3.66021 3.20529 3.55468 3.27037 3.4896L3.50608 3.25389C3.57116 3.18881 3.67669 3.18881 3.74178 3.25389L5.98095 5.49307Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <slot name="footer">
    </slot>
    <Mention v-show="state.showMention" ref="mentionRef" v-bind="mention" :show-mention="state.showMention" @insert="insertUser" />
  </div>
</template>
<script setup lang="ts">
import { UToast, cloneDeep, isEmpty } from 'undraw-ui'
import { ClickOutside as vClickOutside } from 'element-plus'
import { computed, nextTick, reactive, ref, toRefs, watch } from 'vue'
import Mention, { MentionApi } from './mention.vue'
defineOptions({
  name: 'UEditor'
})

interface Props {
  placeholder?: string
  modelValue: string
  minHeight?: number
  mention?: MentionApi
  imgList?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  minHeight: 30
})

const { imgList } = toRefs(props)

const state = reactive({
  active: false,
  isLocked: false,
  showMention: false
})

const range = ref<Range>()
const editorRef = ref<HTMLDivElement>()
const mentionRef = ref<InstanceType<typeof Mention>>()
const text = ref()

const minHeight = computed(() => props.minHeight + 'px')
const padding = computed(() => (props.minHeight == 30 ? '4px 10px' : '8px 12px'))
const mention = computed(() => {
  let mention = cloneDeep(props.mention || {})
  mention.showMention = false
  mention.target = editorRef
  mention.alias = fillDeafults(mention?.alias, {
    id: 'id',
    username: 'username',
    avatar: 'avatar'
  })
  return mention
})

function fillDeafults<T>(obj: any, defaults: T) {
  return Object.assign({}, defaults, obj) as T
}

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'input', event: Event): void
  (e: 'focus', event: Event): void
  (e: 'blur', event: Event): void
  (e: 'submit'): void
  (e: 'mention-search', val: string): void
  (e: 'paste', event: Event, file: File): void
  (e: 'change-img-list', val: any[]): void
}>()

function findDiff(str1: string, str2: string) {
  let shortStr = str1.length < str2.length ? str1 : str2
  let longStr = shortStr == str1 ? str2 : str1
  let start = shortStr.length
  let end = start
  let diffs = []

  for (let i = 0; i < shortStr.length; i++) {
    if (shortStr[i] != longStr[i]) {
      start = i
      break
    }
  }

  let n = longStr.length - shortStr.length
  for (let i = shortStr.length - 1; i >= 0; i--) {
    if (shortStr[i] != longStr[i + n]) {
      end = i + n
      break
    }
  }

  if (start >= end) {
    end = longStr.length - 1
  }

  diffs.push(longStr.substring(start, end + 1))

  return diffs
}

watch(
  () => props.modelValue,
  (val, oldVal) => {
    if (val == '<br>') {
      clear()
    }
    if (!state.isLocked) text.value = val

    // 提及处理
    let v = getRange(editorRef.value)
    if (oldVal.length > val.length && findDiff(oldVal, val)[0].includes('@') && v.startContainer.textContent?.slice(-1) != '@') {
      state.showMention = false
    } else if (isEmpty(val)) {
      state.showMention = false
    }
    if (state.showMention) {
      let keyword = v.startContainer.textContent?.trim() || ''
      keyword = keyword.substring(keyword.lastIndexOf('@') + 1)
      emit('mention-search', keyword)
    }
  }
)

function onFocus(event: FocusEvent) {
  emit('focus', event)
  state.isLocked = true
  state.active = true
}

function focus() {
  nextTick(() => {
    editorRef.value?.focus()
  })
}

function onBlur(event: Event) {
  // 记录光标
  range.value = getRange()
  emit('blur', event)
  if (!editorRef.value?.innerHTML) state.active = false
  state.isLocked = false
}

// 获取光标
function getRange(element?: HTMLElement) {
  try {
    if (element) {
      element.focus()
    }
    return window.getSelection()?.getRangeAt(0) as Range
  } catch (e) {
    throw '没有选择任何文本'
  }
}

// 清空内容
function clear() {
  if (editorRef.value) {
    editorRef.value.innerHTML = ''
    emit('update:modelValue', editorRef.value.innerHTML)
    state.active = false
  }
}

// 输入事件
function onInput(event: InputEvent) {
  range.value = getRange()
  if (event.data == '@' && props.mention?.data) {
    state.showMention = true
  } else if (event.data == ' ') {
    state.showMention = false
  }
  const { innerHTML } = event.target as HTMLDivElement

  emit('update:modelValue', innerHTML)
  emit('input', event)
}

// 键盘事件
const keyDown = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key == 'Enter') {
    //用户点击了ctrl+enter触发
    state.showMention = false
    if (isEmpty(props.modelValue.replace(/&nbsp;|<br>| /g, ''))) {
      UToast({ message: '内容不能为空', type: 'info' })
    } else {
      emit('submit')
    }
  } else if (e.key == 'Enter' && state.showMention) {
    // 提及回车事件
    e.preventDefault()
    insertUser(mentionRef.value?.getSelectItem())
  } else if (e.key == 'Enter') {
    // 回车事件
    // console.log('Enter')
  }
  mentionHandler(e)
}

// 粘贴事件
function pasteFn(event: ClipboardEvent) {
  const clipboardData = event.clipboardData
  if (clipboardData) {
    const text = clipboardData.getData('text/plain')
    const file = clipboardData.items.length > 0 ? clipboardData.items[0].getAsFile() : null
    if (text) {
      event.preventDefault() // 阻止默认的粘贴行为
      document.execCommand('insertText', false, text) // 插入纯文本
    } else if (file) {
      // console.log(file)
      event.preventDefault() // 阻止默认的粘贴行为
      // 处理粘贴的文件，例如上传到服务器
      emit('paste', event, file)
    }
  }
}

/**
 * 光标处追加内容
 * @param val 内容
 * @param func Range处理事务
 */
function addText(val: string, func?: Function) {
  let selection = window.getSelection()
  if (selection) {
    // 为空初始化光标
    if (!range.value) {
      range.value = getRange(editorRef.value)
    }
    mentionHandler()
    // 删除选中内容
    range.value.deleteContents()

    func && func(range.value)

    // 添加内容
    range.value.insertNode(range.value.createContextualFragment(val))
    range.value.collapse(false)

    selection.removeAllRanges()
    selection.addRange(range.value)

    emit('update:modelValue', editorRef.value?.innerHTML || '')
    const event = editorRef.value as unknown as Event
    emit('input', event)
  }
}

// 移除图片
const removeImg = (val: number) => {
  imgList?.value?.splice(val, 1)
  emit('change-img-list', cloneDeep(imgList?.value))
}

// -->提及
function mentionHandler(e?: KeyboardEvent) {
  let v = getRange(editorRef.value)
  let element = v.startContainer.parentElement
  if (element?.tagName == 'SPAN' && element.id == 'mention') {
    if (e) {
      if (e.key == 'Backspace') {
        v.deleteContents()
        v.selectNode(element)
        v.deleteContents()
      } else if (e.key == ' ') {
        v.selectNode(element)
        v.deleteContents()
        v.insertNode(v.createContextualFragment(`<span>${element.textContent?.trim()}</span>` || ''))
        v.collapse(false)
      }
      e.preventDefault()
    } else {
      v.selectNode(element)
    }
  }
}

// 提及添加
function insertUser(val: any) {
  if (val) {
    let alias = mention.value.alias
    addText(`<span data-id="${val[alias.id]}" id="mention" style="color: var(--u-color-primary)">@${val[alias.username]}</span>&nbsp;`, (v: Range) => {
      let s = v.startContainer.textContent || ''
      let index = s.substring(0, v.startOffset).lastIndexOf('@')
      v.setStart(v.startContainer, index)
      v.deleteContents()
    })
  }
  state.showMention = false
  emit('mention-search', '')
}

// 提及列表选中上下移动
function moveSelection(num: number) {
  mentionRef.value?.moveSelection(num)
}
// <-

defineExpose({
  addText,
  clear,
  focus
})
</script>

<style lang="scss" scoped>
@use './style/editor.scss' with (
  $minHeight: v-bind(minHeight),
  $padding: v-bind(padding)
);
</style>

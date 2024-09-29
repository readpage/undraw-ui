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
      @mouseup="onMouseup"
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
    <slot name="footer"></slot>
    <Mention v-show="state.showMention" ref="mentionRef" v-bind="mention" :show-mention="state.showMention" @select="onSelect" />
  </div>
</template>
<script setup lang="ts">
import { UToast, cloneDeep, isEmpty } from 'undraw-ui'
import { affixEmits, ClickOutside as vClickOutside } from 'element-plus'
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

const at = reactive({
  focusNode: window.getSelection()?.focusNode,
  index: -1,
  searchStr: ''
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

watch(
  () => props.modelValue,
  (val, oldVal) => {
    if (val == '<br>') {
      clear()
    }
    if (!state.isLocked) text.value = val
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
    range.value = getRange()
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

function getCursorBeforeStr() {
  let cursorBeforeStr = ''
  const selection: any = window.getSelection()
  if (selection?.focusNode?.data) {
    at.focusNode = selection.focusNode
    cursorBeforeStr = selection.focusNode?.data.slice(0, selection.focusOffset)
  }
  return cursorBeforeStr
}

function getSearchStr() {
  let searchStr = null
  let cursorBeforeStr = getCursorBeforeStr()
  const lastAtIndex = cursorBeforeStr?.lastIndexOf('@')
  if (lastAtIndex !== -1) {
    searchStr = cursorBeforeStr.slice(lastAtIndex + 1)
    at.index = lastAtIndex
    at.searchStr = searchStr
  }
  return searchStr
}

function getShowMention() {
  let searchStr = getSearchStr()
  return props.mention != null && searchStr != null && !(searchStr.includes(' ') || searchStr.trim() != searchStr)
}

// 输入事件
function onInput(event: InputEvent) {
  range.value = getRange()
  state.showMention = getShowMention()
  if (state.showMention) {
    let searchStr = getSearchStr()
    emit('mention-search', searchStr || '')
  }

  const { innerHTML } = event.target as HTMLDivElement
  emit('update:modelValue', innerHTML)
  emit('input', event)
}

function onMouseup() {
  range.value = getRange()
  let searchStr = getSearchStr()
  state.showMention = getShowMention()
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
    onSelect(mentionRef.value?.getSelectItem())
  } else if (e.key == 'Enter') {
    // 回车事件
    // console.log('Enter')
  } else if (e.key == 'Backspace') {
    let selection = window.getSelection()
    let ran = range.value
    let atEl = selection?.focusNode?.parentNode as HTMLElement
    if (atEl && ran && selection && atEl.tagName == 'SPAN' && atEl.classList.contains('at-span')) {
      ran.setStartBefore(atEl)
      ran.setEndAfter(atEl.nextSibling?.textContent == ' ' ? atEl.nextSibling : atEl)
      ran.deleteContents()
      selection.removeAllRanges()
      selection.addRange(ran)
      state.showMention = false
      e.preventDefault()
    }
  }
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
 * @param id 唯一的id 可以uid
 * @param name 用户姓名
 * @param color 回显颜色
 * @returns
 */
const createAtSpanTag = (id: number | string, name: string, color = 'var(--u-color-primary)') => {
  const ele = document.createElement('span')
  ele.className = 'at-span'
  ele.style.color = color
  ele.id = id.toString()
  ele.innerHTML = `@${name}`
  return ele
}

/**
 * 光标处追加内容
 * @param val 内容
 * @param func Range处理事务
 */
function addText(val: string) {
  let editor = editorRef.value
  // 为空初始化光标
  if (!range.value) {
    range.value = getRange(editor)
  }
  let ran = range.value
  // 获取选定对象
  let selection = getSelection()
  // 删除选中内容
  range.value.deleteContents()

  // 判断选定对象范围是编辑框还是文本节点
  if (editor && selection) {
    // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
    selection.removeAllRanges()
    selection.addRange(range.value)

    if (selection.anchorNode?.nodeName != '#text') {
      // 如果是编辑框范围。则创建表情文本节点进行插入
      var emojiText = document.createTextNode(val)
      ran.insertNode(emojiText)
      // 清除选定对象的所有光标对象
      selection.removeAllRanges()
      // 插入新的光标对象
      selection.addRange(ran)
      selection.collapseToEnd()
    } else {
      // 获取光标对象的范围界定对象，一般就是textNode对象
      let textNode = ran.startContainer
      // 获取光标位置
      var rangeStartOffset = ran.startOffset
      // 文本节点在光标位置处插入新的表情内容
      ;(textNode as Text).insertData(rangeStartOffset, val)
      // 光标移动到到原来的位置加上新内容的长度
      ran.setStart(textNode, rangeStartOffset + val.length)
      // 光标开始和光标结束重叠
      ran.collapse(true)
      // 清除选定对象的所有光标对象
      selection.removeAllRanges()
      // 插入新的光标对象
      selection.addRange(ran)
    }
    // 记录最后光标对象
    range.value = getRange(editor)
    emit('update:modelValue', editorRef.value?.innerHTML || '')
    const event = editorRef.value as unknown as Event
    emit('input', event)
  }
}

// 移除图片
const removeImg = (val: number) => {
  imgList?.value?.splice(val, 1)
  // emit('change-img-list', cloneDeep(imgList?.value))
}


// 提及添加
function onSelect(val: any) {
  const selection = window.getSelection()
  let ran = range.value
  let alias = mention.value.alias
  let atEl = at.focusNode?.parentNode as HTMLElement
  if (val && selection && ran) {
    // 选中输入的 @关键字  -> @张
    if (atEl && atEl.tagName == 'SPAN' && atEl.classList.contains('at-span')) {
      ran.setStartBefore(atEl)
      ran.setEndAfter(atEl.nextSibling?.textContent == ' ' ? atEl.nextSibling : atEl)
      ran.deleteContents()
      ran.insertNode(document.createTextNode('@'))
    } else {
      ran.setStart(at.focusNode as Node, at.index)
      ran.setEnd(at.focusNode as Node, at.index + 1 + at.searchStr.length)
    }
   
    // 删除输入的 @关键字
    ran.deleteContents()
    // 创建元素节点
    const newNode = createAtSpanTag(val[alias.id], val[alias.username])
    // 插入元素节点
    ran.insertNode(newNode)
    const spanNode = document.createElement('span')
    spanNode.innerHTML = ' '
    spanNode.style.whiteSpace = 'pre-wrap'
    newNode.after(spanNode)
    ran.setStartAfter(spanNode)
   
    selection.removeAllRanges()
    selection.addRange(ran)
    // 关闭弹框
    state.showMention = false
    // 记录最后光标对象
    // range.value = getRange(editorRef.value)

    emit('update:modelValue', editorRef.value?.innerHTML || '')
    const event = editorRef.value as unknown as Event
    emit('input', event)
  }
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

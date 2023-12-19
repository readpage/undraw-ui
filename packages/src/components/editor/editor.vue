<template>
  <div class="u-editor" :class="{ active: active }">
    <div
      ref="editorRef"
      class="rich-input"
      contenteditable
      :placeholder="placeholder"
      @focus="onFocus"
      @input="onInput"
      @blur="onBlur"
      @keydown.enter="keyDown"
      @keydown.up.prevent="moveSelectionFn(-1)"
      @keydown.down.prevent="moveSelectionFn(1)"
      @paste="pasteFn"
      v-html="text"
    ></div>
    <div ref="imageRef" class="image-preview-box">
      <div v-for="(url, index) in imgList" :key="index" class="image-preview">
        <img :src="url" alt="" />
        <div class="clean-btn" @click="removeImg(index)">
          <svg
            data-v-48a7e3c5=""
            data-v-7c7c7498=""
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
    <MentionList
      ref="metionList"
      v-loading="mentionConfig.isLoading"
      :is-show="isShowMention"
      :position="mentionPosition"
      :list="mentionConfig?.userArr"
      :show-avatar="mentionConfig?.showAvatar"
      @insert="insertUser"
      @change-show="changeMentionShow"
    ></MentionList>
  </div>
</template>
<script setup lang="ts">
import { Ref, computed, inject, nextTick, onMounted, ref, toRefs, watch } from 'vue'
import { cloneDeep, isEmpty } from '~/util'
import UToast from '../toast'
import MentionList from './mentionList.vue'
defineOptions({
  name: 'UEditor'
})

interface Props {
  placeholder?: string
  modelValue: string
  minHeight?: number
  imgList?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  minHeight: 30
})
// 是否显示提及框
const metionList = ref<any>(null)
const isShowMention = ref(false)
const mentionPosition = ref({
  left: 0,
  top: 0
})
// 修改提及框显示的方法
function changeMentionShow(isShow: boolean) {
  isShowMention.value = isShow
  if (!isShow) {
    searchStr.value = ''
  }
}
function changeMentionPosition(position: { left: number; top: number }) {
  mentionPosition.value = position
}
//上下移动的方法
function moveOption(step: number) {
  if (metionList.value) {
    metionList.value.moveSelection(step)
  }
}
//回车确认关闭方法
function enterConfirm() {
  if (metionList.value) {
    return metionList.value.printSelectedItem()
  }
}
const mentionConfig = inject('mentionConfig') as any
// 修改提及列表的方法
const changeMetionList = inject('changeMetionList') as Function
//搜索事件
const mentionSearch = inject('mentionSearch') as Function
const range = ref<Range>()
const editorRef = ref<HTMLDivElement>()
const text = ref()
const isLocked = ref(false)
const active = ref(false)
const imageRef = ref<HTMLDivElement>()

const { imgList } = toRefs(props)

const minHeight = computed(() => props.minHeight + 'px')

const padding = computed(() => (props.minHeight == 30 ? '4px 10px' : '8px 12px'))

const searchStr = ref('')

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'input', event: Event): void
  (e: 'focus', event: Event): void
  (e: 'blur', event: Event): void
  (e: 'submit'): void
  (e: 'paste', event: Event, file: File): void
  (e: 'changeImgListFn', arr: any[]): void
}>()

watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    if (!isLocked.value) text.value = newVal
    if (!mentionConfig?.value?.show) return

    // 移除 "br"
    newVal = newVal.replace(/<br>/g, '')
    oldVal = oldVal.replace(/<br>/g, '')
    if ((oldVal.length >= newVal.length && oldVal.slice(-1) === '@') || newVal.slice(-7) === '@&nbsp;') {
      // 隐藏提及组件
      changeMentionShow(false)
    }
    // 搜索词
    if (isShowMention.value && newVal.slice(-6) !== '&nbsp;') {
      searchStr.value = newVal.split('@').pop() || ''
      // 替换掉里面所有的单引号分隔符
      searchStr.value = searchStr.value.replace(`'`, '')
      console.log(searchStr.value)
      mentionSearch(searchStr.value)
      if (metionList.value) {
        metionList.value.resetSelectIndex()
      }
    } else if (isShowMention.value && newVal.slice(-6) === '&nbsp;') {
      changeMentionShow(false)
    }
    // 提取出来newVal里面所有拥有自定义属性的img标签
    let imgTags = newVal.match(/<img [^>]*data-id="([^"]*)"[^>]*>/g)
    if (imgTags) {
      let dataIds = imgTags.map(tag => {
        let match = tag.match(/data-id="([^"]*)"/)
        return match ? match[1] : null
      })
      // 从mentionConfig.value.userArr里面获取id相同的user
      let users = mentionConfig.value.userArr.filter((user: any) =>
        dataIds.includes(`${user[mentionConfig.value.userIdKey]}`)
      )
      changeMetionList(users)
    } else {
      changeMetionList([])
    }
  }
)

function onFocus(event: Event) {
  emit('focus', event)
  isLocked.value = true
  active.value = true
}

function onBlur(event: Event) {
  // 记录光标
  try {
    range.value = window.getSelection()?.getRangeAt(0)
  } catch (error) {
    console.log(error)
  }
  emit('blur', event)
  if (!editorRef.value?.innerHTML) active.value = false
  isLocked.value = false
}

function moveSelectionFn(num: number) {
  moveOption(num)
}

// 输入框事件
function onInput(event: InputEvent) {
  const { innerHTML } = event.target as HTMLDivElement
  if (event.data === '@' && mentionConfig?.value.show) {
    // 获取用户列表
    // 记录光标
    try {
      range.value = window.getSelection()?.getRangeAt(0)
    } catch (error) {
      console.log(error)
    }

    let rect = range.value?.getBoundingClientRect()
    // 显示提及组件
    changeMentionShow(true)
    if (rect) {
      changeMentionPosition({
        left: rect.left,
        top: rect.top + rect.height + 10
      })
    }
  }

  emit('update:modelValue', innerHTML)
  emit('input', event)
}

function addText(val: string, isPop?: boolean) {
  let selection = window.getSelection()
  if (selection) {
    selection.removeAllRanges()
    // 为空初始化光标
    if (!range.value) {
      editorRef.value?.focus()
      range.value = selection.getRangeAt(0)
    }

    // 如果isPop为true 删除@字符
    if (isPop && !searchStr.value) {
      if (range.value.startOffset > 0) {
        range.value.setStart(range.value.startContainer, range.value.startOffset - 1)
        range.value.deleteContents()
      }
    } else if (isPop && searchStr.value) {
      // 删除掉@符号以及searchStr
      let deleteLength = searchStr.value.length + 1 // +1 for @ symbol
      let actualStartOffset = (range.value.startContainer as Text).data.lastIndexOf('@' + searchStr.value)
      if (actualStartOffset !== -1) {
        range.value.setStart(range.value.startContainer, actualStartOffset)
        range.value.setEnd(range.value.startContainer, actualStartOffset + deleteLength)
        range.value.deleteContents()
      }
    }
    // 删除选中内容
    range.value.deleteContents()
    // 添加内容
    range.value.insertNode(range.value.createContextualFragment(val))
    range.value.collapse(false)
    selection.addRange(range.value)

    emit('update:modelValue', editorRef.value?.innerHTML || '')
    const event = editorRef.value as unknown as Event
    emit('input', event)
  }
}
function pasteFn(event: ClipboardEvent) {
  const clipboardData = event.clipboardData
  if (clipboardData) {
    const text = clipboardData.getData('text/plain')
    const file = clipboardData.items.length > 0 ? clipboardData.items[0].getAsFile() : null
    if (text) {
      event.preventDefault() // 阻止默认的粘贴行为
      document.execCommand('insertText', false, text) // 插入纯文本
    } else if (file) {
      console.log(file)
      event.preventDefault() // 阻止默认的粘贴行为
      // 处理粘贴的文件，例如上传到服务器
      emit('paste', event, file)
    }
  }
}

function clear() {
  if (editorRef.value) {
    editorRef.value.innerHTML = ''
    emit('update:modelValue', editorRef.value.innerHTML)
    active.value = false
  }
}

function focus() {
  nextTick(() => {
    editorRef.value?.focus()
  })
}
//@用户插入操作
function insertUser(user: any) {
  if (user) {
    let img = createSvgUrl(user)
    addText(`${img}\u2008`, true)
  }
}

const keyDown = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key == 'Enter') {
    //用户点击了ctrl+enter触发
    // console.log('ctrl+enter')
    if (isEmpty(props.modelValue.replace(/&nbsp;|<br>| /g, ''))) {
      UToast({ message: '内容不能为空', type: 'info' })
    } else {
      emit('submit')
    }
  } else if (e.key == 'Enter' && isShowMention.value) {
    // 插入用户操作
    e.preventDefault()
    const currentUser = enterConfirm()
    insertUser(currentUser)
    changeMentionShow(false)
  } else {
    //用户点击了enter触发
    // console.log('enter')
  }
}
// 移除图片
const removeImg = (val: number) => {
  imgList?.value?.splice(val, 1)
  emit('changeImgListFn', cloneDeep(imgList?.value as any[]))
}
onMounted(() => {})

defineExpose({
  addText,
  clear,
  focus,
  imageRef,
  insertUser,
  changeMentionShow
})
//创建@标签
const createSvgUrl = (user: any) => {
  // 获取用户名和用户ID
  const userName = user[mentionConfig.value.userNameKey]
  const userId = user[mentionConfig.value.userIdKey]
  const mentionColor = mentionConfig.value.mentionColor || '#409eff'

  // 创建一个不可见的SVG元素用于测量文本宽度
  const svgForMeasure = `
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
      <style>
        .mention-text { font: 14px 'PingFangSC-Regular', 'PingFang SC'; }
      </style>
      <text x="0" y="15" class="mention-text">@${userName}</text>
    </svg>
  `

  // 将SVG添加到DOM中以测量文本
  const container = document.createElement('div')
  container.style.visibility = 'hidden' // 隐藏容器
  container.innerHTML = svgForMeasure
  document.body.appendChild(container)

  // 测量文本宽度
  const textElement = container.querySelector('text')
  let textWidth = 200 // 默认宽度
  if (textElement) {
    textWidth = textElement.getComputedTextLength()
  }

  // 移除用于测量的SVG
  document.body.removeChild(container)

  // 创建最终的SVG元素
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${textWidth}" height="20">
      <style>
        .mention-text { font: 14px 'PingFangSC-Regular', 'PingFang SC'; fill: ${mentionColor}; }
      </style>
      <text x="0" y="15" class="mention-text">@${userName}</text>
    </svg>
  `

  // 编码SVG以便作为URL使用
  const encodedSvg = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22')

  const url = `data:image/svg+xml,${encodedSvg}`

  // 返回img标签
  return `
    <img src="${url}" alt="@${userName}" style="width:${textWidth}px;height:20px;user-select: none;  vertical-align: sub;"
     data-userName="${userName}" data-id="${userId}"
     draggable="false"
    >`
}
</script>

<style lang="scss" scoped>
@use './style/index.scss' with (
  $minHeight: v-bind(minHeight),
  $padding: v-bind(padding)
);
</style>

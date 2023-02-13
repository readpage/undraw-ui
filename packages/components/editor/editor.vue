<template>
  <div class="u-editor" :class="{ active: active }">
    <div
      ref="editorRef"
      class="rich-input"
      contenteditable="true"
      :placeholder="placeholder"
      @focus="onFocus"
      @input="onInput"
      @blur="onBlur"
      @keydown.enter="keyDown"
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
  </div>
</template>
<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import { isEmpty } from '~/util'
import UToast from '../toast'

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

const range = ref<Range>()
const editorRef = ref<HTMLDivElement>()
const text = ref()
const isLocked = ref(false)
const active = ref(false)
const imageRef = ref<HTMLDivElement>()

const { imgList } = toRefs(props)

const minHeight = computed(() => props.minHeight + 'px')

const padding = computed(() => (props.minHeight == 30 ? '4px 10px' : '8px 12px'))

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'input', event: Event): void
  (e: 'focus', event: Event): void
  (e: 'blur', event: Event): void
  (e: 'submit'): void
}>()

watch(
  () => props.modelValue,
  val => {
    if (!isLocked.value) text.value = val
  }
)

function onFocus(event: Event) {
  emit('focus', event)
  isLocked.value = true
  active.value = true
}

function onBlur(event: Event) {
  // 记录光标
  range.value = window.getSelection()?.getRangeAt(0)
  emit('blur', event)
  if (!editorRef.value?.innerHTML) active.value = false
  isLocked.value = false
}

function onInput(event: Event) {
  const { innerHTML } = event.target as HTMLDivElement
  emit('update:modelValue', innerHTML)
  emit('input', event)
}

function addText(val: string) {
  let selection = window.getSelection()
  if (selection) {
    selection.removeAllRanges()
    // 为空初始化光标
    if (!range.value) {
      editorRef.value?.focus()
      range.value = selection.getRangeAt(0)
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

const keyDown = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key == 'Enter') {
    //用户点击了ctrl+enter触发
    // console.log('ctrl+enter')
    if (isEmpty(props.modelValue.replace(/&nbsp;|<br>| /g, ''))) {
      UToast({ message: '内容不能为空', type: 'info' })
    } else {
      emit('submit')
    }
  } else {
    //用户点击了enter触发
    // console.log('enter')
  }
}

// 移除图片
const removeImg = (val: number) => {
  imgList?.value?.splice(val, 1)
}
onMounted(() => {
  editorRef.value?.addEventListener('keyup', (event: Event) => {
    const el = event.target as HTMLDivElement
    if (el.innerHTML == '<br>') {
      el.innerHTML = ''
    }
  })
})

defineExpose({
  addText,
  clear,
  focus,
  imageRef
})
</script>

<style lang="scss" scoped>
@use './style/index.scss' with (
  $minHeight: v-bind(minHeight),
  $padding: v-bind(padding)
);
</style>

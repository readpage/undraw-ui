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
      v-html="text"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

defineOptions({
  name: 'UEditor'
})

interface Props {
  placeholder?: string
  modelValue: string
}

const props = defineProps<Props>()

const range = ref<Range>()
const editorRef = ref<HTMLDivElement>()
const text = ref()
const isLocked = ref(false)
const active = ref(false)

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'input', event: Event): void
  (e: 'focus', event: Event): void
  (e: 'blur', event: Event): void
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
    // const imageNode = document.createElement('img');
    // imageNode.src = "https://static.talkxj.com/emoji/goutou.jpg";
    // range.value.insertNode(imageNode)

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
  focus
})
</script>

<style lang="scss" scoped>
.u-editor {
  transition: all 0.3s;
  background: #f2f3f5;
  border: 1px solid #f2f3f5;
  border-radius: 4px;

  .rich-input {
    padding: 8px 12px;
    color: #252933;
    outline: none;
    min-height: 64px;
    box-sizing: border-box;
    line-height: 22px;
    font-size: 14px;
    resize: both;
    background-position: 120% -10px;
    transition: background 0.3s;
  }
  .rich-input:empty::before {
    cursor: text;
    content: attr(placeholder);
    color: #999;
  }
}
.active {
  border-color: #1e80ff;
  background: #fff;
}

.active .rich-input {
  background: url('/static/img/commentBack.webp') no-repeat 95% -10px/19%;
}
</style>

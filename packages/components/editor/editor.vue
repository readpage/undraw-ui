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
  </div>
</template>
<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

defineOptions({
  name: 'UEditor'
})

interface Props {
  placeholder?: string
  modelValue: string
  minHeight?: number
}

const props = withDefaults(defineProps<Props>(), {
  minHeight: 30
})

const range = ref<Range>()
const editorRef = ref<HTMLDivElement>()
const text = ref()
const isLocked = ref(false)
const active = ref(false)

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
    emit('submit')
  } else {
    //用户点击了enter触发
    // console.log('enter')
  }
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
  font-size: 14px;

  .rich-input {
    min-height: v-bind(minHeight);
    line-height: 22px;
    padding: v-bind(padding);
    color: #252933;
    outline: none;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
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

// .active .rich-input {
//   background: url('/static/img/commentBack.webp') no-repeat 95% -10px/19%;
// }
</style>

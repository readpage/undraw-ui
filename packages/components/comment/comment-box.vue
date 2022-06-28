<template>
  <div v-click-outside:[popperRef]="onClickOutside" class="form-box">
    <u-editor
      ref="editorRef"
      v-model="content"
      :class="{ 'input-active': action }"
      :placeholder="props.placeholder"
      @focus="onFocus"
      @input="isEmpty(content) ? (disabled = true) : (disabled = false)"
    ></u-editor>
    <Transition name="fade">
      <div v-if="action" class="action-box">
        <u-emoji :emoji="emoji" @add-emoji="(val: string) => editorRef?.addText(val)"></u-emoji>
        <el-button
          type="primary"
          :disabled="disabled"
          @click="
            submit({
              clear: () => editorRef?.clear(),
              content: replay ? `回复 <span style='color: blue;'>@${replay}:</span> ${content}` : content,
              parentId
            })
          "
        >
          {{ props.contentBtn }}
        </el-button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { isEmpty } from '~/utils/index'
import { ClickOutside as vClickOutside } from 'element-plus'
import { inject, nextTick, ref } from 'vue'
import { EditorInstance } from '../editor'
import { CommentSubmitParam, InjectionCommentFun, InjectionEmojiApi } from './interface'
import { ElButton } from '~/element'

export interface CommentBoxApi {
  focus(): void
}

interface Props {
  placeholder: string
  contentBtn: string
  parentId?: number
  replay?: string
}

const props = defineProps<Props>()

const content = ref('')
const action = ref(false)
const disabled = ref(true)
const editorRef = ref<EditorInstance>()
const popperRef = ref()

const emit = defineEmits<{
  (e: 'hide', event: Event): void
}>()

const submit = inject(InjectionCommentFun) as (obj: CommentSubmitParam) => void
const emoji = inject(InjectionEmojiApi)

function onClickOutside(event: Event) {
  // const child = event.target as HTMLElement
  // const target = document.querySelector(".el-popper")
  // if (!target?.contains(child) && isEmpty(content.value)) {
  //   action.value = false
  // }
  if (isEmpty(content.value)) {
    action.value = false
    emit('hide', event)
  }
}

function onFocus() {
  action.value = true
  nextTick(() => {
    popperRef.value = document.querySelector("div[id^='el-popper-container']")
  })
}

defineExpose({
  focus: () => (editorRef as any).value?.focus()
})
</script>

<style lang="scss" scoped>
.form-box {
  width: 100%;
  position: relative;
  overflow: hidden;
  .action-box {
    display: flex;
    margin-top: 8px;
    .el-button {
      margin-left: auto;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

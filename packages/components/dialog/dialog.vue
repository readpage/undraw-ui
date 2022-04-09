<template>
  <el-dialog
    v-model="visible"
    custom-class="u-dialog"
    :close-on-click-modal="closeOnClickModal"
    :title="title"
    :width="width"
    :top="top"
    :fullscreen="fullscreen"
    :center="center"
    :before-close="beforeClose"
    draggable
  >
    <div class="full-screen" @click="fullscreen = !fullscreen">
      <svg v-if="fullscreen" width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path>
      </svg>
      <svg v-else width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
        ></path>
      </svg>
    </div>
    <slot></slot>
  </el-dialog>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'

defineOptions({
  name: 'UDialog'
})

interface Props {
  title?: string
  modelValue: boolean
  width?: string
  center?: boolean
  top?: string
  beforeClose?: () => void
  closeOnClickModal?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  closeOnClickModal: true
})

const visible = ref(false)
const fullscreen = ref(false)

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void
}>()

const unwatch = watch(
  () => props.modelValue,
  val => {
    visible.value = val
  },
  {
    immediate: true
  }
)

const unwatch2 = watch(
  () => visible.value,
  val => {
    emit('update:modelValue', val)
  }
)

onUnmounted(() => {
  unwatch()
  unwatch2()
})
</script>

<style lang="scss">
.u-dialog {
  .full-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 4px;
    right: 40px;
    width: 54px;
    height: 54px;
    color: var(--el-color-info);
    cursor: pointer;
  }
  .full-screen:hover {
    color: var(--el-color-primary);
  }
  .el-dialog__header {
    margin-right: 0;
    border-bottom: 1px solid #f7f7f7;
  }
  .el-dialog__body {
    padding: calc(var(--el-dialog-padding-primary)) var(--el-dialog-padding-primary);
  }
}
</style>

<template>
  <el-dialog
    v-model="visible"
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
      <svg v-if="fullscreen" width="16" height="16" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M704 354.133333H896c17.066667 0 34.133333-12.8 34.133333-34.133333s-17.066667-29.866667-34.133333-29.866667h-162.133333V128c0-17.066667-12.8-34.133333-34.133334-34.133333s-25.6 17.066667-25.6 34.133333v192c0 17.066667 12.8 34.133333 29.866667 34.133333zM320 98.133333c-17.066667 0-29.866667 12.8-29.866667 29.866667v162.133333H128c-17.066667 0-34.133333 12.8-34.133333 34.133334s17.066667 29.866667 34.133333 29.866666h192c17.066667 0 34.133333-12.8 34.133333-34.133333V128c0-17.066667-17.066667-29.866667-34.133333-29.866667zM320 674.133333H128c-17.066667 0-34.133333 12.8-34.133333 34.133334s12.8 34.133333 34.133333 34.133333h162.133333V896c0 17.066667 12.8 34.133333 34.133334 34.133333s34.133333-12.8 34.133333-34.133333v-192c-4.266667-17.066667-21.333333-29.866667-38.4-29.866667zM896 674.133333h-192c-17.066667 0-34.133333 12.8-34.133333 34.133334V896c0 17.066667 12.8 34.133333 34.133333 34.133333s34.133333-12.8 34.133333-34.133333v-162.133333H896c17.066667 0 34.133333-12.8 34.133333-34.133334s-17.066667-25.6-34.133333-25.6z" p-id="5080"  fill="currentColor"></path></svg>
      <svg v-else width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
        ></path>
      </svg>
    </div>
    <el-scrollbar ref="scrollbarRef">
      <slot></slot>
    </el-scrollbar>
    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { ElDialog, ElScrollbar } from 'element-plus'

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

watch(
  () => props.modelValue,
  val => {
    visible.value = val
  },
  {
    immediate: true
  }
)

watch(
  () => visible.value,
  val => {
    emit('update:modelValue', val)
  }
)

</script>

<style lang="scss">
.el-dialog {
  .el-dialog__header {
    text-align: left;
  }
  .el-dialog__body {
    padding: 20px !important;
  }
  .el-dialog__footer {
    padding: 10px 20px;
  }
}
</style>

<style lang="scss" scoped>
.el-dialog {
  .full-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -4px;
    right: 40px;
    width: 54px;
    height: 54px;
    color: var(--el-color-info);
    cursor: pointer;
  }
  .full-screen:hover {
    color: var(--el-color-primary);
  }
}
</style>

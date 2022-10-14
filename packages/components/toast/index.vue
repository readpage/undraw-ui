<template>
  <div class="v-toast">
    <transition name="v-toast">
      <div v-show="visible" class="inner">
        <div class="message">
          <iconVue v-if="alert.icon" v-html="alert.icon" />
          <span :class="{ normal: type != 'normal' }">{{ message }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import { getToastType, getDefaultToastType } from './toastTypes'
import iconVue from '../icon'

export interface ToastApi {
  message?: string
  duration?: number
  type?: string
}

defineOptions({
  name: 'UToast'
})

const props = withDefaults(defineProps<ToastApi>(), {
  message: '',
  duration: 2000,
  type: 'normal'
})

const alert = reactive(getDefaultToastType().options)
const visible = ref(false)

watch(
  () => props.type,
  val => {
    const toastType = getToastType(val)
    if (toastType) {
      alert.color = toastType.options.color
      alert.bgColor = toastType.options.bgColor
      alert.icon = toastType.options.icon
    }
  },
  { immediate: true }
)

onMounted(() => {
  visible.value = true
  setTimeout(() => {
    visible.value = false
  }, props.duration)
})
</script>

<style lang="scss" scoped>
.v-toast {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // 设置为可穿透
  pointer-events: none;

  .inner {
    position: relative;
    bottom: -20%;
    padding: 8px 18px;
    border-radius: 12px;
    font-size: 14px;
    color: v-bind('alert.color');
    background-color: v-bind('alert.bgColor');
  }

  // 设置过渡效果
  &-enter-active,
  &-leave-active {
    transition: all 0.3s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
}

.normal {
  padding: 0 8px;
}
</style>

<template>
  <div class="u-divider" :class="{ vertical: vertical }">
    <fieldset class="field">
      <legend v-if="$slots.default || vertical" class="inner" :class="position"><slot></slot></legend>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'

defineOptions({
  name: 'UDivider'
})

interface Props {
  borderStyle?: string
  vertical?: boolean
  position?: string
}

const props = withDefaults(defineProps<Props>(), {
  borderStyle: 'solid',
  position: 'center'
})

const position = ref()

watch(
  () => props.position,
  val => {
    switch (val) {
      case 'left':
        position.value = 'is-left'
        break
      case 'right':
        position.value = 'is-right'
        break
    }
  },
  { immediate: true }
)
</script>
<style lang="scss" scoped>
@use './divider.scss' with (
  $border: v-bind('props.borderStyle')
);
</style>

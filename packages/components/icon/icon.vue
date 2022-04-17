<template>
  <i class="u-icon" :style="style">
    <slot v-if="$slots.default" />
    <svg v-else aria-hidden="true">
      <use :xlink:href="name"></use>
    </svg>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isNumber } from '~/utils'

defineOptions({
  name: 'UIcon'
})

interface Props {
  name?: string
  size?: string | number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
  color: 'inherit'
})
const name = computed(() => '#icon' + props.name)
const style = computed(() => {
  return {
    fontSize: isNumber(props.size) ? props.size + 'px' : props.size,
    color: props.color
  }
})
</script>

<style lang="scss" scoped>
.u-icon {
  :deep(svg) {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>

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
import { isNumber } from '~/util'

defineOptions({
  name: 'UIcon'
})

interface Props {
  name?: string
  size?: string | number
  color?: string
}

const props = defineProps<Props>()
const name = computed(() => '#' + props.name)
const style = computed(() => {
  return {
    fontSize: isNumber(props.size) ? props.size + 'px' : props.size,
    color: props.color
  }
})
</script>

<style lang="scss" scoped>
.u-icon {
  display: inline-flex;
  vertical-align: -0.15em;
  font-size: inherit;
  color: inherit;
  :deep(svg) {
    fill: currentColor;
    width: 1em;
    height: 1em;
  }
}
</style>

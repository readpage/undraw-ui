<template>
  <svg class="u-icon" aria-hidden="true" :style="style">
    <use :xlink:href="name"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import "@/assets/js/iconfont";
import { isNumber } from '~/utils';

defineOptions({
  name: "UIcon"
})

interface Props {
  name: string
  size?: string | number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
  color: "inherit"
})
const name = computed(() => "#icon" +props.name)
const style = computed(() => {
  return {
    fontSize: isNumber(props.size) ? props.size + "px" : props.size,
    color: props.color
  }
})


</script>


<style lang="scss" scoped>

.u-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
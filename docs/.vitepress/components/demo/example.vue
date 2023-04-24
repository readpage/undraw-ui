<template>
  <div class="example-show">
    <component :is="example" />
  </div>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent, markRaw } from "vue";

export interface Props {
  example: any;
}
const props = defineProps<Props>();

let example = computed(() => markRaw(defineAsyncComponent(props.example)))
</script>

<style lang="scss" scoped>
.example-show {
  padding: 1.5rem;
  margin: 0.5px;
}
</style>

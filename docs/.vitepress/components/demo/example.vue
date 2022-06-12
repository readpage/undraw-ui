<template>
  <div class="example-show">
    <component :is="example" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

export interface Props {
  example: object
}
const props = defineProps<Props>()

</script>

<style lang="scss" scoped>
.example-show {
  padding: 1.5rem;
  margin: 0.5px;
}
</style>

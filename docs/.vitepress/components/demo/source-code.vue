<template>
  <div class="source-wrapper">
    <div class="source" v-html="source"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  source: string
}
const props = defineProps<Props>()

</script>

<style lang="scss" scoped>
.source-wrapper {
  background-color: rgba(27, 31, 35, 0.05);
  .source {
    padding: 16px;
  }
}
</style>

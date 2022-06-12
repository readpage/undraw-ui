<template>
  <div class="source-wrapper">
    <div class="source language-vue" v-html="source"></div>
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
  .source {
    padding: 16px;
  }
}
</style>

<template>
  <div class="source-wrapper">
    <highlightjs :code="decodeURIComponent(source)"></highlightjs>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  source: string
}
const props = defineProps<Props>()

</script>

<style lang="scss">
.dark {
  pre {
    margin: 0;
  }
  pre code.hljs {
    background-color: var(--vp-code-block-bg);
  }
}
</style>

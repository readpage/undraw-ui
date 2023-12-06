<template>
  <div>
    <Basic />
    <!-- <Full /> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Basic from './comment/basic.vue'
import Full from './comment/full.vue'
defineOptions({
  name: 'commentVue'
})
</script>

<style lang="scss" scoped></style>

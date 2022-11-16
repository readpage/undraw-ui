<template>
  <u-counter :start-amount="500" :end-amount="10000"></u-counter>
</template>
<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'counterVue'
})
</script>

<style lang="scss" scoped></style>

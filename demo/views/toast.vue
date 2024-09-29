<template>
  <el-button @click="open">打开</el-button>
</template>
<script setup lang="ts">
import { UToast } from '~/components';
import { ref } from 'vue'

function open() {
  UToast({ message: 'this is a message.', type: 'info'})
}
</script>

<style lang="scss" scoped></style>

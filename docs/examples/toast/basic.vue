<template>
  <el-button @click="open">show message</el-button>
</template>
<script setup lang="ts">
import { UToast } from 'undraw-ui'

const open = () => {
  UToast({ message: 'this is a message.', type: 'info' })
}
</script>

<style lang="scss" scoped></style>

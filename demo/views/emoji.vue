<template>
  <div>
    <u-emoji :emoji="emoji" @add-emoji="addEmoji" style="display: flex;"></u-emoji>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import emoji from '@/assets/emoji'

defineOptions({
  name: 'emoji'
})

function addEmoji(val: string) {
  console.log(val)
}

</script>

<style lang="scss" scoped></style>

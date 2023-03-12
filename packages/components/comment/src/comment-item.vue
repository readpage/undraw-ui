<template>
  <slot name="tool"></slot>
</template>

<script setup lang="ts">
import { provide, useSlots } from 'vue'
import { InjectItemSlot } from '../key'

defineOptions({
  name: 'UCommentItem'
})

const slots = useSlots()
provide(InjectItemSlot, slots)
console.log(slots['user-info'])
</script>

<style lang="scss" scoped></style>

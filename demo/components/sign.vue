<template>
  <u-sign @submit="submit"></u-sign>
</template>

<script setup lang="ts">
import { SignApi } from '~/components/sign'
import {} from 'vue'

defineOptions({
  name: 'sign'
})

function submit(form: SignApi) {
  console.log(form)
}
</script>

<style lang="scss" scoped></style>

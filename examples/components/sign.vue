<template>
  <u-sign @submit="submit"></u-sign>
</template>

<script setup lang="ts">
import { signApi } from '~/components/sign'
import {} from 'vue'

function submit(form: signApi) {
  console.log(form)
}
</script>

<style lang="scss" scoped></style>

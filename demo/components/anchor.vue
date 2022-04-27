<template>
  <div class="content">
    <div><h1>content-0</h1></div>
    <div><h2>content-1</h2></div>
    <h3>content-11</h3>
    <h3>content-12</h3>
    <div><h2>content-2</h2></div>
    <div><h2>content-3</h2></div>
    <h2>content-4</h2>
    <div>
      <h2>content-5</h2>
    </div>
    <div>
      <h4>content-6</h4>
    </div>
  </div>
  <u-anchor></u-anchor>
</template>
<script setup lang="ts">
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.content {
  background-color: white;
  width: 500px;
  div {
    height: 600px;
    padding: 20px;
    background-color: #7ec384;
  }

  div:nth-child(2n) {
    background-color: #8473c3;
  }
}
</style>

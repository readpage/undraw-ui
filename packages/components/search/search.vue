<template>
  <label>
    <input type="text" placeholder="评论" />
  </label>
</template>
<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'USearch'
})
</script>

<style lang="scss" scoped>
input[type='text'] {
  border: 3px solid #333;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0;
  font-family: inherit;
  outline: none;
}

label {
  position: relative;
  display: block;
  overflow: hidden;
}

label::before {
  content: 'Macbook Air';
}

label::after {
  content: 'Macbook Air';
}

label::before,
label::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  padding: 0.5rem 1rem;
  font-family: inherit;
  box-sizing: border-box;
  color: #999;
}
</style>

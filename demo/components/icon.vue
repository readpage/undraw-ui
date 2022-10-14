<template>
  <div>
    <u-icon>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
        <path
          d="M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389z"
          fill="currentColor"
        ></path>
        <path
          d="M352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389z"
          fill="currentColor"
        ></path>
      </svg>
    </u-icon>
    <u-icon>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
        <path
          d="M22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53l4.59-3.85zM12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"
          fill="currentColor"
        ></path>
      </svg>
    </u-icon>
  </div>
</template>
<script setup lang="ts">
import {} from 'vue'
defineOptions({
  name: 'icon'
})
</script>

<style lang="scss" scoped>
.u-icon {
  font-size: 16px;
}
.icon-comment {
  font-size: 20px;
}
.test {
  color: skyblue;
  display: inline-block;
}
</style>

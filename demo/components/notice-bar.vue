<template>
  <u-notice-bar data="🔥你是云层里隐约可见的星光，是银河里掉下来的一颗糖。"></u-notice-bar>
  <u-notice-bar
    background="#ecf5ff"
    color="#409eff"
    prefix-icon="dianzan"
    suffix-icon="comment"
    data="🔥生活本来就是不断失去的过程，你所失去的不过是换了另一种方式让你重新拥有。"
  ></u-notice-bar>
  <u-notice-bar vertical :data="noticeList"></u-notice-bar>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const noticeList = ref([
  '🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等',
  '适配手机、平板、pc的后台开源免费模板库（vue2.x请切换vue-prev-admin分支）',
  '仓库地址：https://gitee.com/lyt-top/vue-next-admin',
  '演示地址：https://lyt-top.gitee.io/vue-next-admin-preview/#/login'
])
</script>

<style lang="scss" scoped></style>

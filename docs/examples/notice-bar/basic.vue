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
  '🔥有一条深海鱼在往深处游，游着游着它就哭了，因为它觉得压力好大。',
  '请手机自我检讨一下，为什么总拉着我一起熬夜？',
  '历史老师：你为什么交白卷？我：我怕我会篡改历史',
  '今天天气很好，在房间里宅久了，准备去客厅散散心。'
])
</script>

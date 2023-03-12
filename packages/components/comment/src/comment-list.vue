<template>
  <div v-if="data" class="comment-list">
    <ContentBox v-for="(comment, index) in data" :key="index" :parent-id="str(comment.id)" :data="comment">
      <ReplyBox :parent-id="str(comment.id)" :data="comment.reply"></ReplyBox>
    </ContentBox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { str } from '~/util'
import { CommentApi } from '../interface'
import ContentBox from './content-box.vue'
import ReplyBox from './reply-box.vue'

interface Props {
  data: CommentApi[]
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>

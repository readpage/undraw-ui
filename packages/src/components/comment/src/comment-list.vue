<template>
  <div v-if="data" class="comment-list">
    <ContentBox v-for="(comment, index) in data" :id="str(comment.id)" :key="index" :data="comment">
      <ReplyBox :id="str(comment.id)" :data="comment.reply"></ReplyBox>
    </ContentBox>
  </div>
</template>

<script setup lang="ts">
import { str } from '~/util'
import { CommentApi } from '../interface'
import ContentBox from './content-box.vue'
import ReplyBox from './reply-box.vue'

interface Props {
  data: CommentApi[]
  total: number
  showSize: number
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>

<style>
.comment-list > .comment > .comment-primary > .comment-main {
  margin-right: 16px;
}
</style>

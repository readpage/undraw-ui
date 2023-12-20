<template>
  <div v-if="data" class="comment-list">
    <ContentBox v-for="comment in data" :id="str(comment.id)" :key="str(comment.id)" :data="comment">
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
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>

<style>
.comment-list > .comment > .comment-primary > .comment-main {
  margin-right: 12px;
}
</style>

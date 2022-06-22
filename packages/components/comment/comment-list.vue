<template>
  <div class="comment-list">
    <ContentBox
      v-for="(comment, index) in data"
      :key="index"
      :parent-id="comment.id"
      :data="comment"
    >
      <ReplyBox :parent-id="comment.id" :data="comment.reply" />
    </ContentBox>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { CommentApi } from './interface'
import ContentBox from './content-box.vue'
import ReplyBox from './reply-box.vue'

interface Props {
  data: CommentApi[]
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>

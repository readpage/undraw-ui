<template>
  <div v-if="data" class="comment-list">
    <ContentBox v-for="(comment, index) in data" :key="index" :parent-id="comment.id" :data="comment">
      <template #userInfo>
        <slot name="userInfo"></slot>
      </template>
      <ReplyBox :parent-id="comment.id" :data="comment.reply">
        <template #userInfo>
          <slot name="userInfo"></slot>
        </template>
      </ReplyBox>
    </ContentBox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CommentApi } from './interface'
import ContentBox from './content-box.vue'
import ReplyBox from './reply-box.vue'

interface Props {
  data: CommentApi[]
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>

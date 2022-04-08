<template>
  <div class="comment-list">
    <ContentBox :parentId="comment.id" :data="comment" v-for="(comment, index) in data" :key="index">
      <ReplyBox :parentId="comment.id" :data="comment.reply" />
    </ContentBox>
  </div>
</template>

<script setup lang="ts">
import { } from 'vue'
import { commentApi } from '.';
import ContentBox from "./content-box.vue"
import ReplyBox from './reply-box.vue';

interface Props {
  data: commentApi[]
}

const props = defineProps<Props>();


</script>

<style lang="scss" scoped>

.comment-list {
}
</style>
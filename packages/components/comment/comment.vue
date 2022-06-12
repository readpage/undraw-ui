<template>
  <div class="u-comment">
    <div class="comment-form">
      <div class="header">
        <span class="header-title">评论</span>
      </div>
      <div class="content">
        <div class="avatar-box">
          <el-avatar :size="40" :src="user.avatar">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
        </div>
        <CommentBox placeholder="输入评论（Enter换行，Ctrl + Enter发送）" content-btn="发表评论" />
      </div>
    </div>
    <!-- <div class="hot-list"></div> -->
    <div class="comment-list-wrapper">
      <slot name="list-title">
        <div class="title">全部评论</div>
      </slot>
      <CommentList :data="comments" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import CommentBox from './comment-box.vue'
import CommentList from './comment-list.vue'

import { ElAvatar } from 'element-plus'
// import 'element-plus/es/components/avatar/style/css'

import {
  InjectionUserApi,
  CommentSubmitParam,
  UserApi,
  EmojiApi,
  CommentApi,
  InjectionCommentFun,
  InjectionEmojiApi,
  InjectionLikeFun,
  InjectionLinkFun
} from './interface'

defineOptions({
  name: 'UComment'
})

interface Props {
  comments: CommentApi[]
  emoji: EmojiApi
  user: UserApi
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'submit', obj: CommentSubmitParam): void
  (e: 'like', id: number): void
  (e: 'link', url: string): void
}>()

const submit = (obj: CommentSubmitParam) => {
  emit('submit', obj)
}

const like = (id: number) => {
  emit('like', id)
}

provide(InjectionCommentFun, submit)
provide(InjectionEmojiApi, props.emoji)
provide(InjectionUserApi, props.user)
provide(InjectionLikeFun, like)
provide(InjectionLinkFun, (url: string) => emit('link', url))
</script>

<style lang="scss" scoped>
.u-comment {
  background-color: #fff;
  border-radius: 4px;
  // 设置的边框和内边距的值是包含在width内
  box-sizing: border-box;
  padding: 0 2.5rem;
  padding-bottom: 2rem;
  margin-top: 1.5rem;

  .comment-form {
    padding-top: 2rem;
    .header {
      .header-title {
        font-size: 18px;
        //多行元素的空间量，如多行文本的间距。
        line-height: 30px;
        font-weight: 600;
        color: #000;
      }
    }

    .content {
      margin-top: 2rem;
      display: flex;
      .el-avatar {
        margin-right: 16px;
      }
    }
  }

  .comment-list-wrapper {
    padding: 40px 0 16px;
    .title {
      display: flex;
      align-items: center;
      position: relative;
      line-height: 30px;
      font-weight: 600;
      font-size: 18px;
      color: #252933;
      width: 100%;
      justify-content: space-between;
      padding-bottom: 8px;
    }
  }
}
</style>

<template>
  <div class="u-comment">
    <div class="comment-form">
      <div class="header">
        <span class="header-title">评论</span>
      </div>
      <div class="content">
        <div class="avatar-box">
          <el-avatar :size="40" src="https://empty">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
        </div>
        <CommentBox placeholder="输入评论（Enter换行，Ctrl + Enter发送）" content-btn="发表评论" />
      </div>
    </div>
    <!-- <div class="hot-list"></div> -->
    <div class="comment-list-wrapper">
      <div class="title">全部评论</div>
      <CommentList :data="comments" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { commentApi, InjectionCommentFun } from '.'
import CommentBox from './comment-box.vue'
import CommentList from './comment-list.vue'

defineOptions({
  name: 'UComment'
})

interface Props {
  comments: commentApi[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'submit', clear: () => void, content: string, parentId?: number): void
}>()

function submit(clear: () => void, content: string, parentId: number | undefined) {
  emit('submit', () => clear(), content, parentId)
}

provide(InjectionCommentFun, { submit })
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

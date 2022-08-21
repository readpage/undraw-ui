<template>
  <div class="u-comment">
    <div class="comment-form">
      <div class="header">
        <span class="header-title">评论</span>
      </div>
      <div class="content">
        <div class="avatar-box">
          <el-avatar :size="40" :src="config.user.avatar">
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
      <CommentList :data="config.comments">
        <template #userInfo>
          <slot name="userInfo"></slot>
        </template>
      </CommentList>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, useSlots } from 'vue'
import CommentBox from './comment-box.vue'
import CommentList from './comment-list.vue'
import { ElAvatar } from '~/element'
import {
  CommentSubmitParam,
  ConfigApi,
  ContentBoxParam,
  InjectionCommentFun,
  InjectionContentBox,
  InjectionReply,
  ReplyParam
} from './interface'
import { InjectionEmojiApi } from '../emoji/interface'

defineOptions({
  name: 'UComment'
})

interface Props {
  config: ConfigApi
}

const props = defineProps<Props>()
const slots = useSlots()

const emit = defineEmits<{
  (e: 'submit', obj: CommentSubmitParam): void
  (e: 'like', id: number): void
  (e: 'replyMore', parentId: number, closeLoad: Function): void
  (e: 'replyPage', parentId: number, pageNum: number, pageSize: number): void
  (e: 'getUser', id: number, show: Function): void
}>()

const submit = (obj: CommentSubmitParam) => {
  emit('submit', obj)
}

const like = (id: number) => {
  emit('like', id)
}

const reply: ReplyParam = {
  replyMore: (parentId, closeLoad) => emit('replyMore', parentId, closeLoad),
  replyPage: (parentId, pageNum, pageSize) => emit('replyPage', parentId, pageNum, pageSize)
}

const contentBox: ContentBoxParam = {
  user: props.config.user,
  like: like,
  isUserInfo: slots.userInfo != undefined,
  getUser: (id, show) => emit('getUser', id, show)
}

provide(InjectionCommentFun, submit)
provide(InjectionEmojiApi, props.config.emoji)
provide(InjectionReply, reply)
provide(InjectionContentBox, contentBox)
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

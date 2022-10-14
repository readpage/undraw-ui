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
      <CommentList :data="comments">
        <template #userInfo>
          <slot name="userInfo"></slot>
        </template>
      </CommentList>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, toRef, useSlots } from 'vue'
import CommentBox from './comment-box.vue'
import CommentList from './comment-list.vue'
import { ElAvatar } from '~/element'
import {
  CommentApi,
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
// 将这个属性转换为响应式数据。
const comments = toRef(props.config, 'comments')

const emit = defineEmits<{
  (e: 'submit', content: string, parentId: number | null, finish: (comment: CommentApi) => void): void
  (e: 'like', id: number, finish: () => void): void
  (e: 'replyMore', parentId: number, closeLoad: Function): void
  (e: 'replyPage', parentId: number, pageNum: number, pageSize: number): void
  (e: 'getUser', id: number, show: Function): void
  (e: 'report', id: number, finish: () => void): void
  (e: 'remove', id: number, finish: () => void): void
}>()

const submit = (obj: CommentSubmitParam) => {
  emit('submit', obj.content, obj.parentId, (comment: CommentApi) => {
    // 添加内容回调处理,添加到评论列表
    obj.finish()
    if (obj.parentId) {
      let raw_comment = comments.value.find(v => v.id == obj.parentId)
      if (raw_comment) {
        let reply = raw_comment.reply
        if (reply) {
          reply.list.unshift(comment)
          reply.total++
        } else {
          raw_comment.reply = {
            total: 1,
            list: [comment]
          }
        }
      }
    } else {
      comments.value.unshift(comment)
    }
  })
}

const like = (id: number) => {
  // 点赞评论数组处理
  const editLike = (id: number, count: number) => {
    let tar = null
    comments.value.forEach(v => {
      if (v.id != id) {
        tar = v.reply?.list.find(v => v.id == id)
      } else {
        tar = v
      }
      if (tar) {
        tar.like += count
      }
    })
  }

  // 点赞事件处理
  let likes = props.config.user.likes
  emit('like', id, () => {
    if (likes.indexOf(id) == -1) {
      // 点赞
      likes.push(id)
      editLike(id, 1)
    } else {
      // 取消点赞
      let index = likes.findIndex(item => item == id)
      if (index != -1) likes.splice(index, 1)
      editLike(id, -1)
    }
  })
}

const reply: ReplyParam = {
  replyMore: (parentId, closeLoad) => emit('replyMore', parentId, closeLoad),
  replyPage: (parentId, pageNum, pageSize) => emit('replyPage', parentId, pageNum, pageSize)
}

const contentBox: ContentBoxParam = {
  user: props.config.user,
  like: like,
  isUserInfo: slots.userInfo != undefined,
  getUser: (uid, show) => emit('getUser', uid, show),
  report: (id, finish) => emit('report', id, finish),
  remove: (id, parentId, finish) =>
    emit('remove', id, () => {
      // 删除操作回调处理
      finish()
      if (parentId) {
        let comment = comments.value.find(item => item.id == parentId)
        let reply = comment?.reply
        if (reply) {
          let index = reply.list.findIndex(item => item.id == id)
          if (index != -1) {
            reply.list.splice(index, 1)
            reply.total--
          }
        }
      } else {
        let index = comments.value.findIndex(item => item.id == id)
        if (index != -1) {
          comments.value.splice(index, 1)
        }
      }
    })
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

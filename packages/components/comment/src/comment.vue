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
  ReplyParam,
  ReplyPageParam,
  InjectionEmojiApi
} from '~/index'

defineOptions({
  name: 'UComment'
})

interface Props {
  config: ConfigApi
  // 显示评论的数量
  showSize?: number
  page?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showSize: 3,
  page: false
})
const slots = useSlots()
// 将这个属性转换为响应式数据。
const comments = toRef(props.config, 'comments')

const emit = defineEmits<{
  (e: 'submit', content: string, parentId: string | null, finish: (comment: CommentApi) => void): void
  (e: 'like', id: string, finish: () => void): void
  (e: 'replyPage', { parentId, pageNum, pageSize, finish }: ReplyPageParam): void
  (e: 'getUser', id: string, show: Function): void
  (e: 'report', id: string, finish: () => void): void
  (e: 'remove', id: string, finish: () => void): void
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

const like = (id: string) => {
  // 点赞评论数组处理
  const editLike = (id: string, count: number) => {
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
  let likeIds = props.config.user.likeIds
  emit('like', id, () => {
    if (likeIds.indexOf(id) == -1) {
      // 点赞
      likeIds.push(id)
      editLike(id, 1)
    } else {
      // 取消点赞
      let index = likeIds.findIndex(item => item == id)
      if (index != -1) likeIds.splice(index, 1)
      editLike(id, -1)
    }
  })
}

const replyBox: ReplyParam = {
  replyPage: (parentId, pageNum, pageSize, finish) => {
    emit('replyPage', { parentId, pageNum, pageSize, finish })
  },
  showSize: props.showSize,
  page: props.page,
  comments: comments
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
provide(InjectionReply, replyBox)
provide(InjectionContentBox, contentBox)
</script>

<style lang="scss" scoped>
@use '../style/comment.scss';
</style>

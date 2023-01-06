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
import { provide, toRefs, useSlots } from 'vue'
import CommentBox from './comment-box.vue'
import CommentList from './comment-list.vue'
import { ElAvatar } from '~/element'
import {
  CommentApi,
  CommentSubmitParam2,
  ConfigApi,
  ContentBoxParam,
  InjectionCommentFun,
  InjectionContentBox,
  InjectionReply,
  ReplyParam,
  ReplyPageParam,
  InjectionEmojiApi,
  CommentSubmitParam
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
// const comments = toRef(props.config, 'comments')
const { user, comments } = toRefs(props.config)

const emit = defineEmits<{
  (e: 'submit', { content, parentId, files, finish }: CommentSubmitParam): void
  (e: 'like', id: string, finish: () => void): void
  (e: 'replyPage', { parentId, pageNum, pageSize, finish }: ReplyPageParam): void
  (e: 'getUser', id: string, show: Function): void
  (e: 'report', id: string, finish: () => void): void
  (e: 'remove', id: string, finish: () => void): void
}>()

/**
 * 提交评论
 */
const submit = (obj: CommentSubmitParam2) => {
  let { content, parentId, files } = obj
  const finish = (comment: CommentApi) => {
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
  }
  emit('submit', { content, parentId, files, finish })
}

/**
 * contentBox点赞事件提供
 * @param id
 */
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
        tar.likes += count
      }
    })
  }

  // 点赞事件处理
  const likeIds = props.config.user.likeIds
  let temp = likeIds.map(String)
  emit('like', id, () => {
    if (temp.indexOf(id) == -1) {
      // 点赞
      likeIds.push(id as never)
      editLike(id, 1)
    } else {
      // 取消点赞
      let index = temp.findIndex(item => item == id)
      if (index != -1) likeIds.splice(index, 1)
      editLike(id, -1)
    }
  })
}

/**
 * replyBox.vue需要用到参数或方法
 */
const replyBox: ReplyParam = {
  replyPage: (parentId, pageNum, pageSize, finish) => {
    emit('replyPage', { parentId, pageNum, pageSize, finish })
  },
  showSize: props.showSize,
  page: props.page,
  comments: comments
}

/**
 * contentBox.vue需要用到参数或方法
 */
const contentBox: ContentBoxParam = {
  user: user,
  like: like,
  isUserInfo: slots.userInfo != undefined,
  getUser: (uid, show) => emit('getUser', uid, show),
  report: (id, close) => emit('report', id, close),
  remove: (id, parentId, close) =>
    emit('remove', id, () => {
      close()
      // 删除评论数据操作
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

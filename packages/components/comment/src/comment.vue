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
        <InputBox placeholder="输入评论（Enter换行，Ctrl + Enter发送）" content-btn="发表评论" />
      </div>
    </div>
    <!-- <div class="hot-list"></div> -->
    <div class="comment-list-wrapper">
      <slot>
        <div class="title">全部评论</div>
      </slot>
      <CommentList :data="comments" :total="total" :show-size="isNull(showSize, 5)"></CommentList>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs, useSlots } from 'vue'
import InputBox from './tools/input-box.vue'
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
  CommentSubmitParam,
  isNull,
  isEmpty
} from '~/index'
import { InjectOperation, InjectSlots, OperationApi } from '../key'

defineOptions({
  name: 'UComment'
})

interface Props {
  config: ConfigApi
}

const props = defineProps<Props>()
const slots = useSlots()
// 将这个属性转换为响应式数据。
// const comments = toRef(props.config, 'comments')
const { user, comments, showSize, replyShowSize, total, tools } = toRefs(props.config)

const emit = defineEmits<{
  (e: 'submit', { content, parentId, files, finish }: CommentSubmitParam): void
  (e: 'like', id: string, finish: () => void): void
  (e: 'replyPage', { parentId, pageNum, pageSize, finish }: ReplyPageParam): void
  (e: 'showInfo', id: string, finish: Function): void
  (e: 'operate', type: string, comment: CommentApi, finish: () => void): void
}>()

/**
 * 提交评论
 */
const submit = (obj: CommentSubmitParam2) => {
  let { content, parentId, files } = obj
  const finish = (comment: CommentApi) => {
    // 清空输入框内容
    obj.finish()
    // 提交评论添加到评论列表
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
 * 点赞事件
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
 * 回复盒子参数或方法
 */
const replyBox: ReplyParam = {
  replyPage: (parentId, pageNum, pageSize, finish) => {
    emit('replyPage', { parentId, pageNum, pageSize, finish })
  },
  replyShowSize: isNull(replyShowSize, 3),
  comments: comments
}

/**
 * 评论盒子参数或方法
 */
const contentBox: ContentBoxParam = {
  user: user,
  like: like,
  showInfo: (uid, finish) => emit('showInfo', uid, finish)
}

/**
 * 删除当前评论
 * @param comment
 */
const remove = (comment: CommentApi) => {
  // 删除评论数据操作
  const { parentId, id } = comment
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
}

// 工具栏方法
const operation: OperationApi = {
  user: user,
  tools: tools?.value,
  operate: (type, comment, finish) => {
    if (isEmpty(type)) return
    let v = type.split('#')[0]
    if (v == '删除') {
      emit('operate', type, comment, () => {
        finish()
        remove(comment)
      })
    } else {
      emit('operate', type, comment, finish)
    }
  }
}

// 提交评论
provide(InjectionCommentFun, submit)
// 表情包
provide(InjectionEmojiApi, props.config.emoji)
// 回复盒子
provide(InjectionReply, replyBox)
// 评论盒子
provide(InjectionContentBox, contentBox)
// 工具栏功能
provide(InjectOperation, operation)
// 工具卡槽
provide(InjectSlots, useSlots())
</script>

<style lang="scss" scoped>
@use '../style/comment.scss';
</style>

<template>
  <div class="u-comment">
    <div v-if="showForm" class="comment-form">
      <slot name="header">
        <div class="header">
          <span class="header-title">评论</span>
        </div>
      </slot>
      <div class="content">
        <div class="avatar-box">
          <el-avatar :size="40" :src="config.user.avatar">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
        </div>
        <InputBox placeholder="输入评论（Enter换行，Ctrl + Enter发送）" v-bind="$attrs" content-btn="发表评论" />
      </div>
    </div>
    <!-- <div class="hot-list"></div> -->
    <div v-if="showContent" class="comment-list-wrapper">
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
import { CommentApi, ConfigApi, InjectionEmojiApi, isNull, SubmitParamApi, ReplyPageParamApi } from '~/index'
import {
  InjectContentBoxApi,
  InjectContentBox,
  InjectInputBox,
  InjectReplyBox,
  InjectSlots,
  InjectInputBoxApi,
  InjectReplyBoxApi,
  SubmitParam2Api
} from '../key'
defineOptions({
  name: 'UComment'
})

interface Props {
  config: ConfigApi
  page?: boolean
  upload?: boolean
  relativeTime?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  page: false,
  upload: false,
  formDiabled: true
})
// 将这个属性转换为响应式数据。
// const comments = toRef(props.config, 'comments')
const {
  user,
  comments,
  showSize,
  replyShowSize,
  total,
  aTarget,
  showForm = true,
  showContent = true
} = toRefs(props.config)

const emit = defineEmits<{
  (e: 'submit', { content, parentId, files, reply, finish }: SubmitParamApi): void
  (e: 'like', id: string, finish: () => void): void
  (e: 'replyPage', { parentId, pageNum, pageSize, finish }: ReplyPageParamApi): void
  (e: 'showInfo', id: string, finish: Function): void
  (e: 'focus'): void
  (e: 'cancel'): void
}>()

/**
 * 提交评论
 */
const submit = ({ content, parentId, reply, files, clear }: SubmitParam2Api) => {
  // 添加评论
  const finish = (comment: CommentApi) => {
    // 清空输入框内容
    clear()
    // 提交评论添加到评论列表
    if (parentId) {
      let raw_comment = comments.value.find(v => v.id == parentId)
      if (raw_comment) {
        let replys = raw_comment.reply
        if (replys) {
          replys.list.unshift(comment)
          replys.total++
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
  emit('submit', { content, parentId, reply, files, finish })
}
const inputBoxParam: InjectInputBoxApi = {
  upload: props.upload,
  submit: submit,
  focus: () => emit('focus')
}
// 输入框盒子
provide(InjectInputBox, inputBoxParam)
provide('cancelFn', () => emit('cancel'))
// 点赞评论数组处理
const editLikeCount = (id: string, count: number) => {
  let tar = null
  comments.value.forEach(v => {
    if (v.id == id) {
      tar = v
    } else {
      tar = v.reply?.list.find(v => v.id == id)
    }
    if (tar) {
      tar.likes += count
    }
  })
}

/**
 * 点赞事件
 * @param id
 */
const like = (id: string) => {
  // 点赞事件处理
  const likeIds = props.config.user.likeIds
  emit('like', id, () => {
    if (likeIds.findIndex(item => item == id) == -1) {
      // 点赞
      likeIds.push(id as never)
      editLikeCount(id, 1)
    } else {
      // 取消点赞
      let index = likeIds.findIndex(item => item == id)
      if (index != -1) {
        likeIds.splice(index, 1)
        editLikeCount(id, -1)
      }
    }
  })
}
/**
 * 评论盒子参数或方法
 */
const contentBoxParam: InjectContentBoxApi = {
  user: user,
  like: like,
  relativeTime: isNull(props.relativeTime, false),
  showInfo: (uid, finish) => emit('showInfo', uid, finish),
  aTarget: isNull(aTarget, '_blank')
}
provide(InjectContentBox, contentBoxParam)

// 回复盒子
const replyBoxParam: InjectReplyBoxApi = {
  page: props.page,
  replyPage: (parentId, pageNum, pageSize, finish) => {
    emit('replyPage', { parentId, pageNum, pageSize, finish })
  },
  replyShowSize: isNull(replyShowSize?.value, 3),
  comments: comments
}
provide(InjectReplyBox, replyBoxParam)

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

// 表情包
provide(InjectionEmojiApi, props.config.emoji)

// 工具卡槽
provide(InjectSlots, useSlots())

defineExpose({
  remove: remove
})
</script>

<style lang="scss" scoped>
@use '../style/comment.scss';
</style>

<template>
  <div class="u-comment">
    <div v-if="showForm" class="comment-form">
      <slot name="header">
        <div class="header">
          <span class="header-title">{{ $u('comment.headerTitle') }}</span>
        </div>
      </slot>
      <div class="content">
        <div class="avatar-box">
          <el-avatar :size="40" :src="config.user.avatar">
            <span v-if="config.user.username">{{ config.user.username }}</span>
            <img v-else src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
        </div>
        <InputBox v-bind="$attrs" ref="inputBox" :placeholder="$u('comment.placeholder')" :content-btn="$u('comment.contentBtn')" />
      </div>
    </div>
    <!-- <div class="hot-list"></div> -->
    <div v-if="showContent" class="comment-list-wrapper">
      <slot>
        <div class="title">{{ $u('comment.title') }}</div>
      </slot>
      <CommentList :data="comments"></CommentList>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, toRefs, useSlots } from 'vue'
import { ElAvatar } from 'element-plus'
import { translate as $u } from 'undraw-ui'
import InputBox from './tools/input-box.vue'
import CommentList from './comment-list.vue'
import { isNull, debounce, isEmpty } from '~/util'
import { InjectContentBox, InjectInputBox, InjectReplyBox, InjectSlots, InjectionEmojiApi } from '~/components/comment'
/* eslint-disable */
import { InjectContentBoxApi, InjectReplyBoxApi, InjectInputBoxApi } from '~/components/comment'
import { SubmitParamApi, ReplyPageParamApi, ConfigApi, CommentApi, SubmitParam2Api } from '~/components/comment'
/* eslint-enable */

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
  replyShowSize,
  aTarget,
  showForm = true,
  showContent = true,
  showLevel = true,
  showLikes = true,
  showAddress = true,
  showHomeLink = true,
  showReply = true
} = toRefs(props.config)

const emit = defineEmits<{
  (e: 'submit', { content, parentId, files, reply, finish }: SubmitParamApi): void
  (e: 'like', id: string, finish: () => void): void
  (e: 'replyPage', { parentId, pageNum, pageSize, finish }: ReplyPageParamApi): void
  (e: 'showInfo', id: string, finish: Function): void
  (e: 'focus'): void
  (e: 'cancel'): void
  (e: 'getMentionList', arr: any[]): void
  (e: 'mentionSearch', searchStr: string): void
  (e: 'before-data', val: any): void
}>()

/**
 * 提交评论
 */
const submit = ({ content, parentId, reply, files, clear }: SubmitParam2Api) => {
  // 添加评论
  const finish = (comment?: CommentApi) => {
    // 清空输入框内容
    clear()
    // 提交评论添加到评论列表
    if (comment) {
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
  }
  // 提取出来content里面所有拥有自定义属性的提及标签
  let spans = content.match(/<span [^>]*data-id="([^"]*)"[^>]*>/g) || []
  let dataIds = spans.map(tag => {
    let match = tag.match(/data-id="([^"]*)"/)
    return match ? match[1] : null
  })
  emit('submit', { content, parentId, reply, files, mentionList: dataIds, finish })
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
  let tar: any = null
  comments.value.forEach(v => {
    if (v.id == id) {
      tar = v
    } else {
      let tmp = v.reply?.list.find(v => v.id == id)
      if (tmp) {
        tar = tmp
      }
    }
  })
  if (tar && !isEmpty(tar.likes)) {
    tar.likes += count
  }
}

/**
 * 点赞事件
 * @param id
 */
const like = (id: string) => {
  // 点赞事件处理
  const likeIds = props.config.user.likeIds
  if (likeIds) {
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
}
/**
 * 评论盒子参数或方法
 */
const contentBoxParam: InjectContentBoxApi = {
  user: user,
  like: like,
  showInfo: (uid, finish) => emit('showInfo', uid, finish),
  aTarget: isNull(aTarget, '_blank'),
  showLevel,
  showLikes,
  showAddress,
  showHomeLink,
  showReply
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
const inputBox = ref(null)
// 表情包
provide(InjectionEmojiApi, props.config.emoji)
// 工具卡槽
provide(InjectSlots, useSlots())
//提及配置
provide('injectMention', props.config.mention)
// mentionList 触发事件
const mentionSearch = debounce((searchStr: string) => {
  emit('mentionSearch', searchStr)
}, 300)
provide('injectMentionSearch', mentionSearch)
provide('injectBeforeData', (val: any) => {
  emit('before-data', val)
})

defineExpose({
  remove: remove
})
</script>

<style lang="scss" scoped>
@use '../style/comment.scss';
</style>

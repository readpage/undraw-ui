<template>
  <div class="comment" :class="{ small: small }">
    <div>
      <el-avatar :size="40" fit="cover" :src="data.avatar">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </el-avatar>
    </div>
    <div class="content-box">
      <div class="user-box">
        <a href="/user/1556564194374926" target="_blank" rel="" class="username">
          <span class="name" style="max-width: 10em">{{ data.username }}</span>
          <span blank="true" class="rank">
            <u-icon name="Lv1" size="24"></u-icon>
          </span>
        </a>
        <!-- <span class="author-badge-text">（作者）</span> -->
        <time datetime="1646629604000" title="Mon Mar 07 2022 13:06:44 GMT+0800 (中国标准时间)" class="time">6天前</time>
      </div>
      <u-fold unfold>
        <div v-html="content"></div>
      </u-fold>
      <div class="action-box user-select">
        <div class="item">
          <u-icon name="dianzan"></u-icon>
          <span>1</span>
        </div>
        <div ref="btnRef" class="item" :class="{ active: active }" @click="reply">
          <u-icon name="comment"></u-icon>
          <span>{{ active ? '取消回复' : '回复' }}</span>
        </div>
      </div>
      <div v-if="active">
        <CommentBox ref="commentRef" :parent-id="parentId" :placeholder="`回复${data.username}...`" content-btn="发布" style="margin-top: 12px" @hide="hide" />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import CommentBox from './comment-box.vue'
import { UFold, UIcon } from '~/components'
import type { CommentBoxApi } from './comment-box.vue'
import { emojiList } from './emoji/emoji'
import { commentApi } from '.'

interface Props {
  small?: boolean
  data: commentApi
  parentId: number
}

const props = defineProps<Props>()

const active = ref(false)
const commentRef = ref<CommentBoxApi>()
const btnRef = ref<HTMLDivElement>()

function reply() {
  active.value = !active.value
  if (active.value) {
    nextTick(() => {
      commentRef.value?.focus()
    })
  }
}

function hide(event: Event) {
  const target = event.target as HTMLElement

  if (!btnRef.value?.contains(target)) {
    active.value = false
  }
}

const content = computed(() => parse(props.data.content))

function parse(val: string): string {
  //解析表情
  const reg = /\[.+?\]/g
  val = val.replace(reg, (str: any) => {
    let src = ''
    emojiList.map((item: any) => {
      if (item[str]) {
        src = item[str]
      }
    })
    return "<img src= '" + src + "' width='24'height='24' style='margin: 0 1px;vertical-align: text-bottom'/>"
  })
  return val
}
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  padding: 16px 0;
}

.small {
  .content-box {
    margin-left: 12px;
  }
  .el-avatar {
    --el-avatar-size: 24px !important;
  }
  padding: 0 !important;
}
.small:not(:first-child) {
  margin-top: 2rem;
}

.content-box {
  flex: 1;
  margin-left: 16px;
  .user-box {
    display: flex;
    align-items: center;
    .username {
      display: flex;
      align-items: center;
      .name {
        max-width: 10rem;
        font-weight: 500;
        font-size: 15px;
        color: #252933;
        line-height: 26px;
        margin-right: 4px;
      }
    }

    .time {
      margin-left: auto;
      font-size: 14px;
      line-height: 22px;
      color: #8a919f;
    }
  }
}

.action-box {
  display: flex;
  align-items: center;

  .item {
    margin-right: 16px;
    line-height: 20px;
    line-height: 22px;
    font-size: 14px;
    cursor: pointer;
    color: #8a919f;
    svg {
      margin-right: 4px;
    }
  }
  .item:hover {
    color: #1171ee;
  }
  .active {
    color: #1e80ff;
  }
}

.u-fold {
  margin-top: 8px;
}
</style>

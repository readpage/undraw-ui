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
          <u-icon>
            <svg t="1650360973068" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1168" width="200" height="200">
              <path
                d="M547.968 138.88c6.656-4.672 14.08-6.976 20.48-5.056 6.08 1.792 22.848 10.752 40.192 56.128 8.576 22.4 27.264 81.536-5.632 197.504a45.44 45.44 0 0 0 42.88 57.984l217.6 3.008h0.448a53.12 53.12 0 0 1 20.096 3.328 16.256 16.256 0 0 1 5.568 3.648 14.464 14.464 0 0 1 3.264 6.4c2.176 7.808 4.608 33.984-0.256 77.248-4.672 41.984-15.936 97.408-38.784 162.368-19.136 54.336-43.52 100.48-81.472 161.792a56.384 56.384 0 0 0-1.664 2.496l-0.128 0.128-1.408 2.112a7.872 7.872 0 0 1-1.28 1.472 3.84 3.84 0 0 1-1.28 0.64 20.48 20.48 0 0 1-6.848 0.96H356.032V421.44c19.712-10.624 40.704-24.576 62.592-47.616 25.472-26.88 51.008-64.768 78.208-121.6 5.568-11.584 9.856-24.384 13.632-36.032l3.072-9.856c2.688-8.448 5.184-16.384 8.064-24.32 8.064-22.4 16.128-36.032 26.368-43.136z m120.96 27.968c-20.48-53.44-48-84.736-81.984-94.912-33.6-9.984-61.952 4.16-76.032 14.08-27.584 19.264-41.28 49.6-50.048 74.048-3.392 9.344-6.464 19.2-9.216 27.968l-2.688 8.448a227.84 227.84 0 0 1-10.432 27.904c-25.28 52.928-47.36 84.544-66.752 104.96-18.944 19.968-36.48 30.464-55.168 39.808a45.376 45.376 0 0 0-25.088 40.576l-0.064 480.64c0 24.96 20.224 45.248 45.184 45.248h423.04c21.76 0 38.144-6.912 50.048-16.96a71.808 71.808 0 0 0 14.528-16.896l0.128-0.256 0.128-0.128 0.832-0.96 1.152-1.92c39.424-63.872 66.816-114.688 88.256-175.68a810.24 810.24 0 0 0 42.048-176.64c5.12-45.632 3.776-81.664-1.6-101.376a77.952 77.952 0 0 0-45.568-52.288 116.544 116.544 0 0 0-45.44-8.64l-192.768-2.688c28.096-115.072 10.048-181.568-2.496-214.336z m-604.864 247.04a45.184 45.184 0 0 1 45.12-47.296h67.008c24.96 0 45.184 20.288 45.184 45.248v480.64c0 24.96-20.224 45.12-45.184 45.12H131.84a45.184 45.184 0 0 1-45.12-43.072l-22.656-480.64z"
                p-id="1169"
              ></path>
            </svg>
          </u-icon>
          <span>1</span>
        </div>
        <div ref="btnRef" class="item" :class="{ active: active }" @click="reply">
          <u-icon>
            <svg t="1650360988343" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1320" width="200" height="200">
              <path
                d="M147.264 647.296V220.928c0-49.536 40.128-89.728 89.6-89.728H793.6c49.536 0 89.728 40.192 89.728 89.728v426.368c0 49.536-40.128 89.728-89.6 89.728h-145.216a47.04 47.04 0 0 0-28.16 9.408l-194.56 145.792a3.392 3.392 0 0 1-5.12-1.984l-26.752-116.672a47.04 47.04 0 0 0-45.824-36.544H236.992a89.728 89.728 0 0 1-89.728-89.728zM236.864 64A156.928 156.928 0 0 0 80 220.928l0.064 426.368a156.928 156.928 0 0 0 156.928 156.928h94.976l23.232 101.312 0.064 0.448a70.592 70.592 0 0 0 109.696 40.832l190.208-142.592H793.6a156.928 156.928 0 0 0 156.928-156.928l-0.064-426.368A156.928 156.928 0 0 0 793.536 64H236.928z m69.44 442.496a65.344 65.344 0 1 0 0-130.752 65.344 65.344 0 0 0 0 130.752z m268.8-65.344a65.344 65.344 0 1 1-130.752 0 65.344 65.344 0 0 1 130.752 0z m138.368 65.344a65.344 65.344 0 1 0 0-130.752 65.344 65.344 0 0 0 0 130.752z"
                p-id="1321"
              ></path>
            </svg>
          </u-icon>
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
import { computed, inject, nextTick, ref } from 'vue'
import CommentBox from './comment-box.vue'
import { EmojiApi, InjectionEmojiApi, UFold, UIcon } from '~/components'
import type { CommentBoxApi } from './comment-box.vue'
import { CommentApi } from '.'

interface Props {
  small?: boolean
  data: CommentApi
  parentId: number
}

const props = defineProps<Props>()

const active = ref(false)
const commentRef = ref<CommentBoxApi>()
const btnRef = ref<HTMLDivElement>()

const emojiApi = inject(InjectionEmojiApi) as EmojiApi

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
    emojiApi.emojiList.map((item: any) => {
      if (item[str]) {
        src = item[str]
      }
    })
    return "<img src= '" + src + "' width='24' height='24' style='margin: 0 1px;vertical-align: text-bottom'/>"
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
    .u-icon {
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

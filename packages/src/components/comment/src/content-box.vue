<template>
  <div class="comment" :class="{ reply: props.reply }">
    <div class="comment-sub">
      <UserCard :uid="str(data.uid)">
        <!-- avatar -->
        <a :href="data.user.homeLink" :target="aTarget" :class="{ 'pointer-events-none': !showHomeLink }" class="no-underline" style="display: block">
          <el-avatar style="margin-top: 5px" :size="40" fit="cover" :src="data.user.avatar">
            <span v-if="data.user.avatar">{{ data.user.username }}</span>
            <img v-else src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
        </a>
      </UserCard>
    </div>
    <div class="comment-primary">
      <div class="comment-main">
        <div class="user-info">
          <UserCard :uid="str(data.uid)">
            <a :href="data.user.homeLink" :target="aTarget" :class="{ 'pointer-events-none': !showHomeLink }" class="no-underline" style="display: block">
              <div class="username">
                <span class="name" style="max-width: 10em">{{ data.user.username }}</span>
                <!-- level -->
                <span v-if="showLevel" blank="true" class="rank">
                  <u-icon size="24" v-html="useLevel(data.user.level || 1)"></u-icon>
                </span>
              </div>
            </a>
          </UserCard>
          <!-- <span class="author-badge-text">（作者）</span> -->
          <span v-if="showAddress" class="address" style="color: #939393; font-size: 12px">&nbsp;&nbsp;{{ data.address }}</span>
          <template v-if="slots.info">
            <Info />
          </template>
          <time class="time">{{ data.createTime }}</time>
        </div>
        <div class="content">
          <u-fold unfold>
            <div v-html="contents"></div>
            <div class="imgbox" style="display: flex">
              <template v-for="(url, index) in imgList" :key="index">
                <ElImage :src="url" style="height: 72px; padding: 8px 4px" lazy :preview-src-list="imgList" :initial-index="index"></ElImage>
              </template>
            </div>
          </u-fold>
        </div>
        <div class="action-box select-none">
          <!-- 点赞 -->
          <div v-if="showLikes" class="item" @click="like(str(data.id))">
            <u-icon v-if="user.likeIds && user.likeIds.map(String).indexOf(str(data.id)) == -1">
              <svg t="1650360973068" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1168" width="200" height="200">
                <path
                  d="M547.968 138.88c6.656-4.672 14.08-6.976 20.48-5.056 6.08 1.792 22.848 10.752 40.192 56.128 8.576 22.4 27.264 81.536-5.632 197.504a45.44 45.44 0 0 0 42.88 57.984l217.6 3.008h0.448a53.12 53.12 0 0 1 20.096 3.328 16.256 16.256 0 0 1 5.568 3.648 14.464 14.464 0 0 1 3.264 6.4c2.176 7.808 4.608 33.984-0.256 77.248-4.672 41.984-15.936 97.408-38.784 162.368-19.136 54.336-43.52 100.48-81.472 161.792a56.384 56.384 0 0 0-1.664 2.496l-0.128 0.128-1.408 2.112a7.872 7.872 0 0 1-1.28 1.472 3.84 3.84 0 0 1-1.28 0.64 20.48 20.48 0 0 1-6.848 0.96H356.032V421.44c19.712-10.624 40.704-24.576 62.592-47.616 25.472-26.88 51.008-64.768 78.208-121.6 5.568-11.584 9.856-24.384 13.632-36.032l3.072-9.856c2.688-8.448 5.184-16.384 8.064-24.32 8.064-22.4 16.128-36.032 26.368-43.136z m120.96 27.968c-20.48-53.44-48-84.736-81.984-94.912-33.6-9.984-61.952 4.16-76.032 14.08-27.584 19.264-41.28 49.6-50.048 74.048-3.392 9.344-6.464 19.2-9.216 27.968l-2.688 8.448a227.84 227.84 0 0 1-10.432 27.904c-25.28 52.928-47.36 84.544-66.752 104.96-18.944 19.968-36.48 30.464-55.168 39.808a45.376 45.376 0 0 0-25.088 40.576l-0.064 480.64c0 24.96 20.224 45.248 45.184 45.248h423.04c21.76 0 38.144-6.912 50.048-16.96a71.808 71.808 0 0 0 14.528-16.896l0.128-0.256 0.128-0.128 0.832-0.96 1.152-1.92c39.424-63.872 66.816-114.688 88.256-175.68a810.24 810.24 0 0 0 42.048-176.64c5.12-45.632 3.776-81.664-1.6-101.376a77.952 77.952 0 0 0-45.568-52.288 116.544 116.544 0 0 0-45.44-8.64l-192.768-2.688c28.096-115.072 10.048-181.568-2.496-214.336z m-604.864 247.04a45.184 45.184 0 0 1 45.12-47.296h67.008c24.96 0 45.184 20.288 45.184 45.248v480.64c0 24.96-20.224 45.12-45.184 45.12H131.84a45.184 45.184 0 0 1-45.12-43.072l-22.656-480.64z"
                  p-id="1169"
                ></path>
              </svg>
            </u-icon>
            <u-icon v-else color="#1e80ff">
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1534">
                <path
                  d="M668.928 166.912c-20.48-53.504-47.9744-84.7872-82.0224-94.9248-33.5872-10.0352-61.952 4.096-76.032 13.9776-27.5456 19.3536-41.216 49.664-50.0224 74.1376-3.3792 9.3184-6.4512 19.0976-9.216 27.9552l-2.6624 8.3968a227.8912 227.8912 0 0 1-10.3936 27.9552c-25.344 52.9408-47.4112 84.5312-66.7648 104.96-18.944 19.968-36.4544 30.464-55.1936 39.7824a45.3632 45.3632 0 0 0-25.088 40.5504l-0.1024 480.7168c0 24.9344 20.2752 45.2096 45.2096 45.2096h423.0656c21.7088 0 38.144-6.912 50.0224-16.9984a72.192 72.192 0 0 0 14.4896-16.896l0.2048-0.2048 0.0512-0.1536 0.8192-1.024 1.2288-1.8944c39.424-63.7952 66.7648-114.688 88.2176-175.616 24.4224-69.4784 36.8128-129.6896 42.0352-176.64 5.12-45.6704 3.7888-81.664-1.5872-101.376a77.9776 77.9776 0 0 0-45.568-52.3264 116.5824 116.5824 0 0 0-45.4144-8.6016l-192.8192-2.6624c28.1088-115.0976 10.0864-181.6064-2.4576-214.3744zM64.0512 413.9008a45.2096 45.2096 0 0 1 45.1584-47.36H176.128c24.9344 0 45.2096 20.2752 45.2096 45.2096v480.6144a45.2096 45.2096 0 0 1-45.2096 45.2096h-44.288a45.2096 45.2096 0 0 1-45.1584-43.0592L64 413.952z"
                  p-id="1535"
                ></path>
              </svg>
            </u-icon>
            <span v-if="data.likes != 0">{{ data.likes }}</span>
          </div>
          <!-- 回复 -->
          <div v-if="showReply" ref="btnRef" class="item" :class="{ active: state.active }" @click="reply">
            <u-icon>
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1320" width="200" height="200">
                <path
                  d="M147.264 647.296V220.928c0-49.536 40.128-89.728 89.6-89.728H793.6c49.536 0 89.728 40.192 89.728 89.728v426.368c0 49.536-40.128 89.728-89.6 89.728h-145.216a47.04 47.04 0 0 0-28.16 9.408l-194.56 145.792a3.392 3.392 0 0 1-5.12-1.984l-26.752-116.672a47.04 47.04 0 0 0-45.824-36.544H236.992a89.728 89.728 0 0 1-89.728-89.728zM236.864 64A156.928 156.928 0 0 0 80 220.928l0.064 426.368a156.928 156.928 0 0 0 156.928 156.928h94.976l23.232 101.312 0.064 0.448a70.592 70.592 0 0 0 109.696 40.832l190.208-142.592H793.6a156.928 156.928 0 0 0 156.928-156.928l-0.064-426.368A156.928 156.928 0 0 0 793.536 64H236.928z m69.44 442.496a65.344 65.344 0 1 0 0-130.752 65.344 65.344 0 0 0 0 130.752z m268.8-65.344a65.344 65.344 0 1 1-130.752 0 65.344 65.344 0 0 1 130.752 0z m138.368 65.344a65.344 65.344 0 1 0 0-130.752 65.344 65.344 0 0 0 0 130.752z"
                  p-id="1321"
                ></path>
              </svg>
            </u-icon>
            <span>{{ state.active ? $u('comment.cancelReply') : $u('comment.reply') }}</span>
          </div>
          <!-- 操作栏 -->
          <template v-if="slots.operate">
            <Operate />
          </template>
        </div>
        <div v-if="state.active">
          <InputBox
            ref="commentRef"
            :parent-id="str(id)"
            :placeholder="`${$u('comment.placeholder2')}@${data.user.username}...`"
            :reply="data"
            :content-btn="$u('comment.contentBtn2')"
            style="margin-top: 12px"
            @hide="hide"
            @close="state.active = false"
          />
        </div>
      </div>
      <!-- 回复列表 -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, ref, reactive, h } from 'vue'
import { ElImage, ElAvatar } from 'element-plus'
import { UFold, UIcon, translate as $u } from 'undraw-ui'
import '~/components/icon/icon.scss'
import { EmojiApi } from '~/components/emoji'
import UserCard from './tools/user-card.vue'
import InputBox from './tools/input-box.vue'
import type { InputBoxApi } from './tools/input-box.vue'
import { str, isEmpty } from '~/util'
import { useEmojiParse, useLevel } from '~/hooks'
import { InjectContentBox, InjectContentBoxApi, InjectSlots, CommentApi, InjectionEmojiApi } from '~/components/comment'
import { emit } from 'process'

interface Props {
  reply?: boolean
  data: CommentApi
  id: string
}

const props = defineProps<Props>()

const state = reactive({
  active: false
})

const commentRef = ref<InputBoxApi>()
const btnRef = ref<HTMLDivElement>()

const injectBeforeData = inject('injectBeforeData') as Function
const data = computed(() => {
  let val = props.data
  injectBeforeData(val)
  return val
})

const imgList = computed(() => {
  let temp = props.data.contentImg
  if (isEmpty(temp)) return []
  return temp?.split('||')
})

const { allEmoji } = inject(InjectionEmojiApi) as EmojiApi
const { like, user, aTarget, showLevel, showLikes, showAddress, showHomeLink, showReply } = inject(InjectContentBox) as InjectContentBoxApi

//点击回复按钮打开输入框
function reply() {
  state.active = !state.active
  if (state.active) {
    nextTick(() => {
      commentRef.value?.focus()
    })
  }
}

// 提交评论关闭输入框
function hide(event: Event) {
  const target = event.target as HTMLElement

  if (!btnRef.value?.contains(target)) {
    state.active = false
  }
}

//工具slots
const slots = inject(InjectSlots) as any
// 信息卡槽
const Info = () => h('div', slots.info(props.data))

//操作栏卡槽
const Operate = () => h('div', slots.operate(props.data))

const contents = computed(() => useEmojiParse(allEmoji, props.data.content))
</script>

<style lang="scss" scoped>
@use '../style/content-box.scss';
</style>

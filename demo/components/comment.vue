<template>
  <u-comment-scroll style="width: 820px; margin-left: 20px" :disable="disable" @more="more">
    <u-comment
      ref="commentRef"
      :config="config"
      relative-time
      page
      upload
      @submit="submit"
      @like="like"
      @reply-page="replyPage"
      @show-info="showInfo"
      @focus="focus"
    >
      <!-- <template>导航栏卡槽</template> -->
      <!-- <template #header>头部卡槽</template> -->
      <!-- <template #info>用户信息卡槽</template> -->
      <!-- <template #card>用户信息卡片卡槽</template> -->
      <!-- <template #func>功能区域卡槽</template> -->
      <u-comment-nav v-model="latest" @sorted="sorted"></u-comment-nav>
      <template #card="scope">
        <el-skeleton :loading="loading" :throttle="200" animated>
          <template #template>
            <el-skeleton-item variant="image" style="width: 50px; height: 50px; margin-bottom: 10px" />
            <div>
              <el-skeleton-item variant="h3" style="width: 50%" />
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </template>
          <template #default>
            <div class="user-card">
              <div class="user-avatar">
                <el-avatar style="margin-top: 5px" :size="40" fit="cover" :src="scope.avatar">
                  <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                </el-avatar>
              </div>
              <div class="user-content">
                <div class="user-info">
                  <a href="" class="username" target="_blank">
                    <span class="name" style="max-width: 10em">{{ scope.username }}</span>
                    <span blank="true" class="rank">
                      <u-icon size="24" v-html="useLevel(scope.level)"></u-icon>
                    </span>
                  </a>
                </div>
                <div class="social-info">
                  <a href="" class="attention">
                    <span>{{ scope.attention }}</span>
                    <span>关注</span>
                  </a>
                  <a href="" class="follower">
                    <span>{{ scope.follower }}</span>
                    <span>粉丝</span>
                  </a>
                  <a href="" class="like">
                    <span>{{ scope.like }}</span>
                    <span>获赞</span>
                  </a>
                </div>
                <div class="card-btn">
                  <el-button type="primary">关注</el-button>
                  <el-button>发消息</el-button>
                </div>
              </div>
            </div>
          </template>
        </el-skeleton>
      </template>
      <template #operate="scope">
        <Operate :comment="scope" @remove="remove" />
      </template>
    </u-comment>
  </u-comment-scroll>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
  UToast,
  ConfigApi,
  CommentApi,
  createObjectURL,
  useLevel,
  usePage,
  throttle,
  SubmitParamApi,
  ReplyPageParamApi
} from '~/index'
// 下载表情包资源emoji.zip https://readpage.lanzouy.com/b04duelxg 密码:undraw
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from '@/assets/emoji'
import { ElAvatar, ElButton, dayjs, CommentInstance } from '~/index'
import { getComment, reply, commentSize } from '@/assets/comment'
import Operate from './comment/operate.vue'

defineOptions({
  name: 'comment'
})
const config = reactive<ConfigApi>({
  user: {
    id: 0,
    username: '',
    avatar: '',
    // 评论id数组 建议:存储方式用户id和文章id和评论id组成关系,根据用户id和文章id来获取对应点赞评论id,然后加入到数组中返回
    likeIds: []
  },
  emoji: emoji,
  comments: [],
  total: 10
})

const commentRef = ref<CommentInstance>()

setTimeout(() => {
  const user = {
    id: 1,
    username: 'user',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    // 评论id数组 建议:存储方式用户id和文章id和评论id组成关系,根据用户id和文章id来获取对应点赞评论id,然后加入到数组中返回
    likeIds: [1, 2, 3]
  }
  config.user = user
}, 100)

setTimeout(() => {
  config.user.likeIds = [2, 3]
}, 5000)

// 用户信息是否加载
const loading = ref(false)

// 请求获取用户详细信息
const showInfo = (uid: string, finish: Function) => {
  console.log(loading.value)
  loading.value = true
  console.log('获取用户信息: ' + uid)
  let userInfo
  setTimeout(() => {
    userInfo = {
      id: String(uid),
      username: '落🤍尘' + uid,
      avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
      level: 6,
      like: 36011,
      attention: 15,
      follower: 6878
    }
    loading.value = false
    finish(userInfo)
  }, 200)
}

let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, files, finish, reply }: SubmitParamApi) => {
  let str = '提交评论:' + content + ';\t父id: ' + parentId + ';\t图片:' + files + ';\t被回复评论:' + reply
  console.log(str)

  /**
   * 上传文件后端返回图片访问地址，格式以'||'为分割; 如:  '/static/img/program.gif||/static/img/normal.webp'
   */
  let contentImg = files?.map(e => createObjectURL(e)).join('||')

  temp_id += 1
  const comment: CommentApi = {
    id: String(temp_id),
    parentId: parentId,
    uid: config.user.id,
    address: '来自江苏',
    content: content,
    likes: 0,
    createTime: dayjs().subtract(5, 'seconds').toString(),
    contentImg: contentImg,
    user: {
      username: config.user.username,
      avatar: config.user.avatar,
      level: 6,
      homeLink: `/${temp_id}`
    },
    reply: null
  }
  setTimeout(() => {
    console.log(comment)
    finish(comment)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}

// 点赞按钮事件
const like = (id: string, finish: () => void) => {
  console.log('点赞: ' + id)
  setTimeout(() => {
    finish()
  }, 200)
}

// 评论框焦点事件
const focus = () => {
  console.log('评论框焦点事件')
}

// 删除评论
const remove = (comment: CommentApi) => {
  setTimeout(() => {
    commentRef.value?.remove(comment)
  }, 200)
}

const _throttle = throttle((type: string, comment: CommentApi, finish: Function) => {
  switch (type) {
    case '删除':
      alert(`删除成功: ${comment.id}`)
      finish()
      break
    case '举报':
      alert(`举报成功: ${comment.id}`)
      break
  }
})

//回复分页
const replyPage = ({ parentId, pageNum, pageSize, finish }: ReplyPageParamApi) => {
  let tmp = {
    total: reply.total,
    list: usePage(pageNum, pageSize, reply.list)
  }
  setTimeout(() => {
    finish(tmp)
  }, 200)
}

// 初始化评论列表
config.comments = getComment(1, 1)

// 是否禁用滚动加载评论
const disable = ref(false)

// 当前页数
let pageNum = 2
// 页大小
let pageSize = 1
// 评论总数量
let total = commentSize
// 加载更多评论
const more = () => {
  console.log(disable.value)
  if (pageNum <= Math.ceil(total / pageSize)) {
    setTimeout(() => {
      config.comments.push(...getComment(pageNum, 1))
      pageNum++
    }, 200)
  } else {
    disable.value = true
  }
}

//排序
const latest = ref(true)
const sorted = (latest: boolean) => {
  console.log(latest)
}
</script>

<style lang="scss" scoped>
.user-card {
  display: flex;
  .user-content {
    flex: 1;
    margin-left: 16px;
    .user-info {
      .username {
        display: flex;
        align-items: center;
        text-decoration: none;
        .name {
          max-width: 100px;
          font-weight: 500;
          font-size: 15px;
          color: #252933;
          line-height: 32px;
          margin-right: 4px;
        }
      }
    }
    .social-info {
      font-size: 12px;
      margin-bottom: 10px;
      a {
        text-decoration: none;
      }
      a:not(:first-child) {
        margin-left: 18px;
      }
      a span:last-child {
        margin-left: 3px;
        color: #9499a0;
      }
    }
  }
}
</style>

<template>
  <div class="comment-view">
    <u-comment :config="config" @submit="submit" @like="like" @get-user="getUser">
      <!-- <template #list-title>全部评论</template> -->
      <template #userInfo>
        <div class="user-card">
          <div class="user-avatar">
            <el-avatar style="margin-top: 5px" :size="40" fit="cover" :src="userInfo.avatar">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
          </div>
          <div class="user-content">
            <div class="user-info">
              <a href="" class="username" target="_blank">
                <span class="name" style="max-width: 10em">{{ userInfo.username }}</span>
                <span blank="true" class="rank">
                  <u-icon size="24" v-html="useLevel(userInfo.level)"></u-icon>
                </span>
              </a>
            </div>
            <div class="social-info">
              <a href="" class="attention">
                <span>{{ userInfo.attention }}</span>
                <span>关注</span>
              </a>
              <a href="" class="follower">
                <span>{{ userInfo.follower }}</span>
                <span>粉丝</span>
              </a>
              <a href="" class="like">
                <span>{{ userInfo.like }}</span>
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
    </u-comment>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { UToast, ConfigApi, CommentSubmitParam, CommentApi, useLevel, ElAvatar, ElButton } from 'undraw-ui'
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases
// static文件放在public下,引入emoji.ts文件可以移动到自定义位置
import emoji from './emoji'

const config = reactive<ConfigApi>({
  user: {
    id: 1,
    username: 'user',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    // 评论id数组 建议:存储方式用户id和文章id和评论id组成关系,根据用户id和文章id来获取对应点赞评论id,然后加入到数组中返回
    likes: [1, 2, 11]
  },
  emoji: emoji,
  comments: []
})

const userInfo = ref({} as any)

// 请求获取用户详细信息
const getUser = (id: number, show: Function) => {
  setTimeout(() => {
    userInfo.value = {
      id: id,
      username: '落🤍尘',
      avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
      level: 6,
      like: 360118,
      attention: 15,
      follower: 6878
    }
    show()
  }, 500)
}

// 提交评论事件
const submit = ({ clear, content, parentId }: CommentSubmitParam) => {
  console.log(content, parentId)
  UToast({ message: '评论成功!', type: 'info' })
  // 提交评论 --后端接口处理
  editSubmit(content, parentId as number)
  clear()
}

// 点赞按钮事件
const like = (id: number) => {
  const likes = config.user.likes
  if (likes.indexOf(id) == -1) {
    // 点赞 --后端接口处理
    likes.push(id)
    editLike(id, 1)
  } else {
    // 取消点赞 --后端接口
    likes.splice(
      likes.findIndex(item => item == id),
      1
    )
    editLike(id, -1)
  }
}

// 模拟后端处理
const editLike = (id: number, count: number) => {
  let tar = null
  config.comments.forEach(v => {
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

let temp_id = 100
// 模拟后端处理
const editSubmit = (content: string, parentId: number) => {
  let comment: CommentApi = {
    id: (temp_id += 1),
    parentId: parentId,
    avatar: config.user.avatar,
    username: config.user.username,
    level: 6,
    link: `/${(temp_id += 1)}`,
    address: '来自江苏',
    content: content,
    like: 0,
    createTime: '1分钟前',
    reply: null
  }
  if (parentId == undefined) {
    config.comments.push(comment)
  } else {
    let raw_comment = config.comments.find(v => v.id == parentId)
    let reply = raw_comment?.reply
    if (reply) {
      reply.list.push(comment)
    } else if (raw_comment) {
      raw_comment.reply = { total: 1, list: [comment] }
    } else {
      config.comments.push(comment)
    }
  }
}

config.comments = [
  {
    id: 4,
    parentId: null,
    username: 'Blizzard1',
    avatar:
      'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    level: 3,
    link: '/4',
    address: '来自杭州',
    content:
      '鱼说：我时时刻刻睁开眼睛，就是为了能让你永远在我眼中！<br>水说：我时时刻刻流淌不息，就是为了能永远把你拥抱！！<br>锅说：都快熟了，还这么贫。',
    like: 13,
    createTime: '2天前',
    reply: {
      total: 2,
      list: [
        {
          id: 41,
          parentId: 4,
          avatar:
            'https://static.juzicon.com/avatars/avatar-20210308112705-zqf0.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
          username: '过往~',
          level: 4,
          link: '/41',
          address: '来自北京',
          content: '鱼对水说，你看不到我流泪，因为我在水中。水对鱼说，我看到你悲伤，因为你在我心中。[呲牙]',
          like: 36,
          createTime: '1分钟前'
        },
        {
          id: 42,
          parentId: 4,
          avatar:
            'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
          username: 'Blizzard1',
          level: 3,
          link: '/42',
          address: '来自杭州',
          content: ' 约束条件变了，原来的收益，一下子都变为成本。生命如果架在锅上，成本自然也就很高了[tv_微笑]',
          like: 16,
          createTime: '1天前'
        }
      ]
    }
  }
]
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
          max-width: 10rem;
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

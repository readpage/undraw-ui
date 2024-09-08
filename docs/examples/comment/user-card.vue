<template>
  <u-comment :config="config" @submit="submit" @show-info="showInfo">
    <!-- <template>导航栏卡槽</template> -->
    <!-- <template #header>头部卡槽</template> -->
    <!-- <template #action="{ user }">动作卡槽{{ user.username }}</template> -->
    <!-- <template #avatar="{ id, user }">头像卡槽{{ user.avatar }}</template> -->
    <!-- <template #info>信息卡槽</template> -->
    <!-- <template #card>用户信息卡片卡槽</template> -->
    <!-- <template #func>功能区域卡槽</template> -->
    <template #card="scope">
      <el-skeleton :loading="loading" :throttle="200" animated>
        <template #template>
          <el-skeleton-item variant="image" style="width: 50px; height: 50px; margin-bottom: 10px" />
          <div>
            <el-skeleton-item variant="h3" style="width: 100px" />
            <el-skeleton-item variant="text" style="margin-right: 16px;" />
            <el-skeleton-item variant="text" style="width: 100px" />
          </div>
        </template>
        <template #default>
          <div class="user-card">
            <div class="user-avatar">
              <el-avatar style="margin-top: 5px" :size="40" fit="cover" :src="scope.avatar">
                <span>{{ scope.username }}</span>
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
  </u-comment>
</template>

<script setup lang="ts">
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from './emoji'
import { reactive, ref } from 'vue'
import { UToast, Time, CommentApi, CommentSubmitApi, ConfigApi, useLevel } from 'undraw-ui'

const config = reactive<ConfigApi>({
  user: {} as any, // 当前用户信息
  emoji: emoji, // 表情包数据
  comments: [], // 评论数据
  relativeTime: true, // 开启人性化时间
  show: {
    likes: false
  },
  page: true // 开启分页
})

// 用户信息是否加载
const loading = ref(false)
// 模拟请求获取用户详细信息
const showInfo = (uid: string, finish: Function) => {
  console.log(loading.value)
  loading.value = true
  console.log('获取用户信息: ' + uid)
  let userInfo
  // 模拟获取后端根据uid查询用户信息
  setTimeout(() => {
    userInfo = {
      username: '杜甫 [唐代]',
      level: 6,
      avatar: 'https://static.juzicon.com/images/image-180327173755-IELJ.jpg',
      like: 36011,
      attention: 15,
      follower: 6878
    }
    loading.value = false
    finish(userInfo)
  }, 200)
}


// 评论提交事件
let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, finish }: CommentSubmitApi) => {
  let str = '提交评论:' + content + ';\t父id: ' + parentId
  console.log(str)

  // 模拟请求接口生成数据
  const comment: CommentApi = {
    id: String((temp_id += 1)),
    parentId: parentId,
    uid: config.user.id,
    address: '来自江苏',
    content: content,
    likes: 0,
    createTime: new Date().toString(),
    user: config.user,
    reply: null
  }
  setTimeout(() => {
    finish(comment)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}

/**
 * 评论对象数据结构
 * 存储结构: 一个评论表，通过paretnId是否为空判断类型 评论/回复
 * 层数: 两层
 * 第一层：评论 parentId属性为空; 第二层关系: id等于parentId的数据，则为第二层回复的评论数据
 * 第二层: 回复 parentId属性不为空; 第一层关系: parentId等于第一层id，则为第一层评论的回复数据
 * 
 */
// --> 初始化评论列表
const comments = [
  {
    id: '1',
    parentId: null,
    uid: '2',
    content: '床前明月光，疑是地上霜。<br>举头望明月，低头思故乡。<img class="a" id="a" style="width: 50px" src=a onerror="window.location.href=\'https://baidu.com\'">',
    createTime: new Time().add(-2, 'hour'),
    user: {
      username: '李白 [唐代]',
      level: 6,
      avatar: 'https://static.juzicon.com/images/image-231107185110-DFSX.png',
      homeLink: '/2'
    },
    reply: {
      total: 1,
      list: [
        {
          id: '11',
          parentId: 1,
          uid: '1',
          content: '[狗头][微笑2]',
          likes: 6666,
          createTime: new Time().add(-1, 'hour'),
          user: {
            username: '杜甫 [唐代]',
            level: 6,
            avatar: 'https://static.juzicon.com/images/image-180327173755-IELJ.jpg',
            homeLink: '/1'
          }
        }
      ]
    }
  },
  {
    id: '2',
    parentId: null,
    uid: '1',
    content: '国破山河在，城春草木深。<br>感时花溅泪，恨别鸟惊心。<br>烽火连三月，家书抵万金。<br>白头搔更短，浑欲不胜簪。',
    createTime: new Time().add(-6, 'hour'),
    user: {
      username: '杜甫 [唐代]',
      level: 5,
      avatar: 'https://static.juzicon.com/images/image-180327173755-IELJ.jpg',
      homeLink: '/1'
    }
  },
  {
    id: '3',
    parentId: null,
    uid: '2',
    content: '日照香炉生紫烟，遥看瀑布挂前川。<br>飞流直下三千尺，疑是银河落九天。',
    likes: 3411,
    createTime: new Time().add(-12, 'hour'),
    user: {
      username: '李白 [唐代]',
      level: 4,
      avatar: 'https://static.juzicon.com/images/image-231107185110-DFSX.png',
      homeLink: '/2'
    }
  }
] as CommentApi[]

// 模拟请求接口获取评论数据
setTimeout(() => {
  // 当前登录用户数据
  config.user = {
    id: 1,
    username: '杜甫 [唐代]',
    level: 6,
    avatar: 'https://static.juzicon.com/images/image-180327173755-IELJ.jpg',
    // 评论id数组 建议:存储方式用户id和文章id和评论id组成关系,根据用户id和文章id来获取对应点赞评论id,然后加入到数组中返回
    likeIds: [1, 2, 3]
  } as any
  config.comments = comments
}, 500)

// <-
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

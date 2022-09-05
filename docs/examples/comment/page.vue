<template>
  <div class="comment-view">
    <u-comment
      :config="config"
      @submit="submit"
      @like="like"
      @reply-more="replyMore"
      @reply-page="replyPage"
    ></u-comment>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { UToast, ConfigApi, CommentSubmitParam, CommentApi, useLevel } from 'undraw-ui'
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

//加载更多回复
const replyMore = (parentId: number, closeLoad: Function) => {
  setTimeout(() => {
    closeLoad()
    replyPage(parentId, 1, 4)
  }, 1000)
}

//模拟数据
const replyList = [
  {
    id: 31,
    parentId: 3,
    avatar:
      'https://static.juzicon.com/avatars/avatar-20220310090547-fxvx.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
    username: '陆呈洋',
    level: 4,
    link: '/31',
    address: '来自成都',
    content: '人生就像愤怒的小鸟，当你失败时，总有几只猪在笑。',
    like: 7,
    createTime: '1天前'
  },
  {
    id: 32,
    parentId: 3,
    avatar:
      'https://static.juzicon.com/avatars/avatar-190919180152-2VDE.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    username: '哑谜',
    level: 3,
    link: '/32',
    address: '来自杭州',
    content: '深思熟虑的结果往往就是说不清楚。',
    like: 3,
    createTime: '2天前'
  },
  {
    id: 33,
    parentId: 3,
    username: 'Mia',
    avatar:
      'https://static.juzicon.com/avatars/avatar-190919181554-L2ZO.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    like: 3,
    link: '/33',
    level: 2,
    address: '来自深圳',
    content: '当我跨过沉沦的一切，向着永恒开战的时候，你是我的军旗。',
    createTime: '5天前'
  },
  {
    id: 34,
    parentId: 3,
    username: 'poli301',
    avatar:
      'https://static.juzicon.com/avatars/avatar-190919180043-XPLP.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    like: 34,
    level: 4,
    link: '/34',
    address: '来自西安',
    content: '不要由于别人不能成为我们所希望的人而愤怒，因为我们自己也难以成为自己所希望的人。',
    createTime: '1天前'
  },
  {
    id: 35,
    parentId: 3,
    username: 'fish_eno',
    avatar:
      'https://static.juzicon.com/avatars/avatar-190919180320-NAQJ.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    like: 32,
    level: 6,
    link: '/35',
    address: '来自武汉',
    content: '世上莫名其妙走霉运的人多的是，都是一边为命运生气，一边化愤怒为力量地活着。',
    createTime: '11小时前'
  },
  {
    id: 36,
    parentId: 3,
    username: '十三',
    avatar:
      'https://static.juzicon.com/user/avatar-f103e42d-a5c9-4837-84e3-d10fad0bcb36-210108053135-E90E.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    like: 21,
    level: 4,
    link: '/36',
    address: '来自上海',
    content: '这世上所有的不利情况，都是当事者能力不足造成的',
    createTime: '10小时前'
  },
  {
    id: 37,
    parentId: 3,
    username: 'D.z.H****',
    avatar:
      'https://static.juzicon.com/avatars/avatar-190919181051-M3HK.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    like: 18,
    level: 3,
    link: '/37',
    address: '来自广州',
    content: ' 绝望自有绝望的力量，就像希望自有希望的无能。',
    createTime: '9小时前'
  },
  {
    id: 38,
    parentId: 3,
    username: '繁星Cong2',
    avatar:
      'https://static.juzicon.com/user/avatar-f81b3655-03fd-485c-811b-4b5ceaca52b6-210817180051-YTO4.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    like: 17,
    level: 1,
    link: '/38',
    address: '来自重庆',
    content: ' 无论这个世界对你怎样，都请你一如既往的努力，勇敢，充满希望。',
    createTime: '8小时前'
  }
] as any[]

const page = (pageNum: number, pageSize: number, arr: any[]) => {
  var skipNum = (pageNum - 1) * pageSize
  var newArr =
    skipNum + pageSize >= arr.length ? arr.slice(skipNum, arr.length) : arr.slice(skipNum, skipNum + pageSize)
  return newArr
}

//回复分页
const replyPage = (parentId: number, pageNum: number, pageSize: number) => {
  config.comments.forEach(e => {
    if (e.id == parentId) {
      if (e.reply) {
        let page1 = page(pageNum, pageSize, replyList)
        e.reply.list = page1
      }
    }
  })
}

config.comments = [
  {
    id: 3,
    parentId: null,
    avatar:
      'https://static.juzicon.com/user/avatar-0d70406e-5d4a-4107-a689-652ffd063f99-200425180341-1QK6.jpg?x-oss-process=image/resize,m_fill,w_100,h_1000',
    username: '半个句号',
    level: 5,
    link: '/3',
    address: '来自北京',
    content: '人的一切痛苦，本质上都是对自己的无能的愤怒。',
    like: 34116,
    createTime: '2分钟前',
    reply: {
      total: 8,
      // https://www.juzikong.com/posts/122a7f89-6b8f-4843-b90e-58b9b7808930#comments
      list: [
        {
          id: 31,
          parentId: 3,
          avatar:
            'https://static.juzicon.com/avatars/avatar-20220310090547-fxvx.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
          username: '陆呈洋',
          level: 4,
          link: '/31',
          address: '来自成都',
          content: '人生就像愤怒的小鸟，当你失败时，总有几只猪在笑。',
          like: 7,
          createTime: '1天前'
        },
        {
          id: 32,
          parentId: 3,
          avatar:
            'https://static.juzicon.com/avatars/avatar-190919180152-2VDE.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
          username: '哑谜',
          level: 3,
          link: '/32',
          address: '来自杭州',
          content: '深思熟虑的结果往往就是说不清楚。',
          like: 3,
          createTime: '2天前'
        }
      ]
    }
  }
]
</script>

<style lang="scss">
.vp-doc ul {
  list-style: none !important;
}

.vp-doc ul,
.vp-doc ol {
  padding-left: 0 !important;
  margin: 0 !important;
}

.vp-doc li + li {
  margin-top: 0px !important;
}
</style>

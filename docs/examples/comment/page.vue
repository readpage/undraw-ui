<template>
  <div class="comment-view">
    <u-comment
      :config="config"
      page
      @submit="submit"
      @like="like"
      @remove="remove"
      @report="report"
      @reply-page="replyPage"
    ></u-comment>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { UToast, ConfigApi, CommentApi, ReplyPageParam } from 'undraw-ui'
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases
// static文件放在public下,引入emoji.ts文件可以移动到自定义位置
import emoji from './emoji'

const config = reactive<ConfigApi>({
  user: {
    id: '1',
    username: 'user',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    // 评论id数组 建议:存储方式用户id和文章id和评论id组成关系,根据用户id和文章id来获取对应点赞评论id,然后加入到数组中返回
    likeIds: ['1', '2', '11']
  },
  emoji: emoji,
  comments: []
})

let temp_id = 100
// 提交评论事件
const submit = (content: string, parentId: string, finish: (comment: CommentApi) => void) => {
  console.log(content, parentId)
  let comment: CommentApi = {
    id: String((temp_id += 1)),
    parentId: parentId,
    uid: config.user.id,
    username: config.user.username,
    avatar: config.user.avatar,
    level: 6,
    link: `/${(temp_id += 1)}`,
    address: '来自江苏',
    content: content,
    like: 0,
    createTime: '1分钟前',
    reply: null
  }
  setTimeout(() => {
    finish(comment)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}

// 删除评论
const remove = (id: number, finish: () => void) => {
  setTimeout(() => {
    finish()
    alert(`删除成功: ${id}`)
  }, 200)
}

//举报用户
const report = (id: number, finish: () => void) => {
  console.log(id)
  setTimeout(() => {
    finish()
    alert(`举报成功: ${id}`)
  }, 200)
}

// 点赞按钮事件
const like = (id: number, finish: () => void) => {
  console.log(id)
  setTimeout(() => {
    finish()
  }, 200)
}

//模拟数据
const replyList = [
  {
    id: '31',
    parentId: '3',
    uid: '6',
    username: '陆呈洋',
    avatar:
      'https://static.juzicon.com/avatars/avatar-20220310090547-fxvx.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
    level: 4,
    link: '/31',
    address: '来自成都',
    content: '人生就像愤怒的小鸟，当你失败时，总有几只猪在笑。',
    like: 7,
    createTime: '1天前'
  },
  {
    id: '32',
    parentId: '3',
    uid: '7',
    username: '哑谜',
    avatar:
      'https://static.juzicon.com/avatars/avatar-190919180152-2VDE.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
    level: 3,
    link: '/32',
    address: '来自杭州',
    content: '深思熟虑的结果往往就是说不清楚。',
    like: 3,
    createTime: '2天前'
  },
  {
    id: '33',
    parentId: '3',
    uid: '8',
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
    id: '34',
    parentId: '3',
    uid: '9',
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
    id: '35',
    parentId: '3',
    uid: '10',
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
    id: '36',
    parentId: '3',
    uid: '11',
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
    id: '37',
    parentId: '3',
    uid: '12',
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
    id: '38',
    parentId: '3',
    uid: '13',
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
] as CommentApi[]

const page = (pageNum: number, pageSize: number, arr: any[]) => {
  var skipNum = (pageNum - 1) * pageSize
  var newArr =
    skipNum + pageSize >= arr.length ? arr.slice(skipNum, arr.length) : arr.slice(skipNum, skipNum + pageSize)
  return newArr
}

//回复分页
const replyPage = ({ parentId, pageNum, pageSize, finish }: ReplyPageParam) => {
  let tmp = page(pageNum, pageSize, replyList)
  console.log(parentId)
  setTimeout(() => {
    finish(tmp)
  }, 200)
}

config.comments = [
  {
    id: '3',
    parentId: null,
    uid: '5',
    username: '半个句号',
    avatar:
      'https://static.juzicon.com/user/avatar-0d70406e-5d4a-4107-a689-652ffd063f99-200425180341-1QK6.jpg?x-oss-process=image/resize,m_fill,w_100,h_1000',
    level: 5,
    link: '/3',
    address: '来自北京',
    content: '人的一切痛苦，本质上都是对自己的无能的愤怒。',
    like: 34116,
    createTime: '2分钟前',
    reply: {
      total: 8,
      list: [
        {
          id: '31',
          uid: '6',
          username: '陆呈洋',
          parentId: '3',
          avatar:
            'https://static.juzicon.com/avatars/avatar-20220310090547-fxvx.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
          level: 4,
          link: '/31',
          address: '来自成都',
          content: '人生就像愤怒的小鸟，当你失败时，总有几只猪在笑。',
          like: 7,
          createTime: '1天前'
        },
        {
          id: '32',
          parentId: '3',
          uid: '7',
          username: '哑谜',
          avatar:
            'https://static.juzicon.com/avatars/avatar-190919180152-2VDE.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
          level: 3,
          link: '/32',
          address: '来自杭州',
          content: '深思熟虑的结果往往就是说不清楚。',
          like: 3,
          createTime: '2天前'
        },
        {
          id: '33',
          parentId: '3',
          uid: '15',
          username: '过往~',
          avatar:
            'https://static.juzicon.com/avatars/avatar-20210308112705-zqf0.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
          level: 4,
          link: '/41',
          address: '来自北京',
          content: '鱼对水说，你看不到我流泪，因为我在水中。水对鱼说，我看到你悲伤，因为你在我心中。[呲牙]',
          like: 36,
          createTime: '1分钟前'
        },
        {
          id: '34',
          parentId: '3',
          uid: '16',
          username: 'Blizzard1',
          avatar:
            'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
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

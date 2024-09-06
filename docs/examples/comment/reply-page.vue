<template>
  <u-comment :config="config" @submit="submit" @like="like" @reply-page="replyPage">
    <!-- <template>导航栏卡槽</template> -->
    <!-- <template #header>头部卡槽</template> -->
    <!-- <template #action="{ user }">动作卡槽{{ user.username }}</template> -->
    <!-- <template #avatar="{ id, user }">头像卡槽{{ user.avatar }}</template> -->
    <!-- <template #info>信息卡槽</template> -->
    <!-- <template #card>用户信息卡片卡槽</template> -->
    <!-- <template #func>功能区域卡槽</template> -->
  </u-comment>
</template>

<script setup lang="ts">
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from './emoji'
import { reactive, ref } from 'vue'
import { UToast, Time, CommentApi, CommentSubmitApi, ConfigApi, cloneDeep, usePage, CommentReplyPageApi } from 'undraw-ui'

const config = reactive<ConfigApi>({
  user: {} as any, // 当前用户信息
  emoji: emoji, // 表情包数据
  comments: [], // 评论数据
  relativeTime: true, // 开启人性化时间
  page: true // 开启分页
})

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

// 点赞按钮事件
const like = (id: string, finish: () => void) => {
  console.log('点赞: ' + id)
  // 模拟请求接口成功处理
  setTimeout(() => {
    finish()
  }, 200)
}



/**
 * 评论对象数据结构
 * 存储结构: 一个评论表，通过paretnId是否为空判断类型 评论/回复
 * 层数: 两层
 * 第一层：评论 parentId属性为空 第二层关系: id等于parentId的数据，则为第二层回复的评论数据
 * 第二层: 回复 第一层关系: parentId等于id，则为第一层评论的回复数据
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
          parentId: null,
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
  },
  {
    id: '4',
    parentId: null,
    uid: '3',
    content: '明月几时有？把酒问青天。',
    likes: 3422,
    createTime: new Time().add(-1, 'day'),
    user: {
      username: '苏轼[宋代]',
      level: 6,
      avatar: 'https://static.juzicon.com/images/image-180327175138-PCH1.jpg',
      homeLink: '/3'
    },
    reply: {
      total: 7,
      list: [
        {
          id: '41',
          parentId: 4,
          uid: '3',
          content: '不知天上宫阙，今夕是何年。',
          likes: 34116,
          createTime: new Time().add(-23, 'hour'),
          user: {
            username: '苏轼[宋代]',
            level: 6,
            avatar: 'https://static.juzicon.com/images/image-180327175138-PCH1.jpg',
            homeLink: '/3'
          }
        },
        {
          id: '42',
          parentId: 4,
          uid: '3',
          content: '我欲乘风归去，又恐琼楼玉宇，高处不胜寒。',
          likes: 34116,
          createTime: new Time().add(-20, 'hour'),
          user: {
            username: '苏轼[宋代]',
            level: 5,
            avatar: 'https://static.juzicon.com/images/image-180327175138-PCH1.jpg',
            homeLink: '/3'
          }
        },
        {
          id: '43',
          parentId: 4,
          uid: '3',
          content: '起舞弄清影，何似在人间。',
          likes: 34116,
          createTime: new Time().add(-15, 'hour'),
          user: {
            username: '苏轼[宋代]',
            level: 4,
            avatar: 'https://static.juzicon.com/images/image-180327175138-PCH1.jpg',
            homeLink: '/3'
          }
        },
        {
          id: '44',
          parentId: 4,
          uid: '3',
          content: '转朱阁，低绮户，照无眠。',
          likes: 34116,
          createTime: new Time().add(-14, 'hour'),
          user: {
            username: '苏轼[宋代]',
            level: 3,
            avatar: 'https://static.juzicon.com/images/image-180327175138-PCH1.jpg',
            homeLink: '/3'
          }
        },
        {
          id: '45',
          parentId: 4,
          uid: '3',
          content: '不应有恨，何事长向别时圆？',
          likes: 34116,
          createTime: new Time().add(-10, 'hour'),
          user: {
            username: '苏轼[宋代]',
            level: 2,
            avatar: 'https://static.juzicon.com/images/image-180327175138-PCH1.jpg',
            homeLink: '/3'
          }
        },
        {
          id: '46',
          parentId: 4,
          uid: '3',
          content: '人有悲欢离合，月有阴晴圆缺，此事古难全。',
          likes: 34116,
          createTime: new Time().add(-8, 'hour'),
          user: {
            username: '苏轼[宋代]',
            avatar: 'https://static.juzicon.com/images/image-180327175138-PCH1.jpg',
            homeLink: '/3'
          }
        },
        {
          id: '47',
          parentId: 4,
          uid: '3',
          content: '但愿人长久，千里共婵娟。',
          likes: 34116,
          createTime: new Time().add(-4, 'hour'),
          user: {
            username: '苏轼[宋代]',
            avatar: 'https://static.juzicon.com/images/image-180327175138-PCH1.jpg',
            homeLink: '/3'
          }
        }
      ]
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

// 模拟请求接口分页 请求覆盖评论对应的回复数据(全量覆盖回复数据)
let reply = cloneDeep(comments[3].reply)
//回复分页
const replyPage = ({ parentId, pageNum, pageSize, finish }: CommentReplyPageApi) => {
  console.log(pageNum, pageSize)
  // 根据 parentId查询后端分页回复列表返回并覆盖回复
  if (reply) {
    let tmp = {
      total: reply?.total,
      // 分页提取回复
      list: usePage(pageNum, pageSize, reply.list)
    }
    setTimeout(() => {
      finish(tmp)
    }, 200)
  }
}
// <-
</script>

<style lang="scss" scoped></style>

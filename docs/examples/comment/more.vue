<template>
  <u-comment-scroll :disable="disable" @more="more">
    <u-comment :config="config" @submit="submit" @like="like">
      <u-comment-nav v-model="latest" @sorted="sorted"></u-comment-nav>
      <!-- <template>导航栏卡槽</template> -->
      <!-- <template #header>头部卡槽</template> -->
      <!-- <template #action="{ user }">动作卡槽{{ user.username }}</template> -->
      <!-- <template #avatar="{ id, user }">头像卡槽{{ user.avatar }}</template> -->
      <!-- <template #info>信息卡槽</template> -->
      <!-- <template #card>用户信息卡片卡槽</template> -->
      <!-- <template #func>功能区域卡槽</template> -->
    </u-comment>
  </u-comment-scroll>
</template>

<script setup lang="ts">
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v1.0.0
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
}, 500)

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
  },
  {
    id: '5',
    parentId: null,
    uid: '1',
    content: '折戟沉沙铁未销，自将磨洗认前朝。<br>东风不与周郎便，铜雀春深锁二乔。',
    createTime: new Time().add(-10, 'day'),
    user: {
      username: '杜甫 [唐代]',
      level: 6,
      avatar: 'https://static.juzicon.com/images/image-180327173755-IELJ.jpg',
      homeLink: '/1'
    }
  },
  {
    id: '6',
    parentId: null,
    uid: '2',
    content: '日照香炉生紫烟，遥看瀑布挂前川。<br>飞流直下三千尺，疑是银河落九天。',
    createTime: new Time().add(-20, 'day'),
    user: {
      username: '李白 [唐代]',
      level: 6,
      avatar: 'https://static.juzicon.com/images/image-231107185110-DFSX.png',
      homeLink: '/2'
    }
  },
  {
    id: '7',
    parentId: null,
    uid: '4',
    content: '东临碣石，以观沧海。<br>水何澹澹，山岛竦峙。<br>树木丛生，百草丰茂。<br>秋风萧瑟，洪波涌起。<br>日月之行，若出其中；<br>星汉灿烂，若出其里。<br>幸甚至哉，歌以咏志。',
    createTime: new Time().add(-30, 'day'),
    user: {
      username: '曹操 [东汉末年]',
      level: 6,
      avatar: 'https://static.juzicon.com/images/image-200821112305-QQ9O.jpg',
      homeLink: '/4'
    }
  },
  {
    id: '8',
    parentId: null,
    uid: '5',
    content: '爆竹声中一岁除，春风送暖入屠苏。<br>千门万户曈曈日，总把新桃换旧符。',
    createTime: new Time().add(-1, 'month'),
    user: {
      username: '王安石[宋代]',
      level: 4,
      avatar: 'https://static.juzicon.com/images/image-200821112258-TTUH.jpg',
      homeLink: '/5'
    }
  },
  {
    id: '9',
    parentId: null,
    uid: '6',
    content: '半亩方塘一鉴开，天光云影共徘徊。<br>问渠那得清如许？为有源头活水来。',
    createTime: new Time().add(-2, 'month'),
    user: {
      username: '朱熹[宋代]',
      level: 3,
      avatar: 'https://static.juzicon.com/images/image-200821112252-JOJY.jpg',
      homeLink: '/6'
    }
  },
  {
    id: '10',
    parentId: null,
    uid: '7',
    content: '孤山寺北贾亭西，水面初平云脚低。<br>几处早莺争暖树，谁家新燕啄春泥。<br>乱花渐欲迷人眼，浅草才能没马蹄。<br>最爱湖东行不足，绿杨阴里白沙堤。',
    createTime: new Time().add(-3, 'month'),
    user: {
      username: '白居易[唐代]',
      level: 2,
      avatar: 'https://static.juzicon.com/images/image-200821112251-LVYW.jpg',
      homeLink: '/7'
    }
  }
] as CommentApi[]
// 模拟请求接口部分评论数据； 回复按需提取部分如: 5条回复，总数为总回复10条。
config.comments = usePage(1, 2, comments)

// 当前页数
let pageNum = 3
// 页大小
let pageSize = 1
// 评论总数量
let total = comments.length
// 是否禁用滚动加载评论
const disable = ref(false)
// 模拟接口请求加载更多评论
const more = () => {
  console.log(disable.value)
  if (pageNum <= Math.ceil(total / pageSize)) {
    setTimeout(() => {
      config.comments.push(...usePage(pageNum, 1, comments))
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
</style>

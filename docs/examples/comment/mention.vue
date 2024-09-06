<template>
  <u-comment :config="config" @submit="submit"  @mention-search="mentionSearch">
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
import { UToast, Time, CommentApi, CommentSubmitApi, ConfigApi } from 'undraw-ui'


const userArr = [
  {
    id: 1,
    name: '张三',
    avatar: 'https://gd-hbimg.huaban.com/cba6c7af94997ba172c32bbe668794553f29e91ef26f-qnroJ7_fw240webp'
  },
  {
    id: 2,
    name: '李四',
    avatar: 'https://gd-hbimg.huaban.com/d01263d11d07748a2193bbbdd3b9a0c8a4b062b9f39d-PKvV2t_fw240webp'
  },
  {
    id: 3,
    name: '王五',
    avatar: 'https://gd-hbimg.huaban.com/69d92bfbf36fc111e1f563403311e7943628c9fc108bf-6l34Pa_fw240webp'
  },
  {
    id: 4,
    name: '赵六',
    avatar: 'https://gd-hbimg.huaban.com/7f5c54a455f61f431ec1f7b7c0e583f4a725fb73adba-5DgU3q_fw240webp'
  },
  {
    id: 5,
    name: '孙七',
    avatar: 'https://gd-hbimg.huaban.com/edea85f44f3f8bce8d094ed78f390164a9eba229cb2e-1Lc22F_fw240webp'
  },
  {
    id: 6,
    name: '周八',
    avatar: 'https://gd-hbimg.huaban.com/c1b2131c6977e01a430d6575ba678a4afeabcad222605-UJUwwb_fw240webp'
  },
  {
    id: 7,
    name: '吴九',
    avatar: 'https://gd-hbimg.huaban.com/4942e77078bda39a458980049b528236bf79183814998-zVzEJv_fw240webp'
  },
  {
    id: 8,
    name: '郑十',
    avatar: 'https://gd-hbimg.huaban.com/628236086a2ca12d2074bdd29f496f38a4d0c06ae50f-Rj3vsO_fw240webp'
  },
  {
    id: 9,
    name: '王富贵',
    avatar: 'https://gd-hbimg.huaban.com/0108a6b65d211d3bc602bc0431e84b31f9e62ac08015f-JifENm_fw240webp'
  },
  {
    id: 10,
    name: '赵富贵',
    avatar: 'https://gd-hbimg.huaban.com/d9643d6181d506ccc159a940e11bdc6b9a2b53ae57139-pxAnk9_fw240webp'
  }
]

const config = reactive<ConfigApi>({
  user: {} as any, // 当前用户信息
  emoji: emoji, // 表情包数据
  comments: [], // 评论数据
  relativeTime: true, // 开启人性化时间
  page: true, // 开启分页
  show: {
    likes: false
  },
  mention: {  // 开启提交功能
    data: userArr, 
    alias: {  
      username: 'name'
    },
    showAvatar: true
  },
})

// 提交触发搜索: 模拟请求接口返回搜索用户数据
const mentionSearch = (val: string) => {
  config.mention!.data = userArr.filter(v => v.name.includes(val))
}


// 评论提交事件
let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, finish, mentionList }: CommentSubmitApi) => {
  let str = '提交评论:' + content + ';\t父id: ' + parentId + ';\t提及数据: ' + mentionList
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
</style>

<template>
  <div class="comment-view">
    <u-comment :user="user" :comments="comments" :emoji="emoji" style="width: 820px; margin-left: 2rem" @submit="submit" @like="like"></u-comment>
  </div>
</template>

<script setup lang="ts">
import { CommentApi, CommentSubmitParam, UserApi, UToast } from '~/index'
import { onMounted, reactive, ref } from 'vue'
import emoji from '@/assets/emoji'

const comments = ref([] as CommentApi[])

const user = reactive<UserApi>({
  id: 1,
  username: 'user',
  avatar: 'https://p6-passport.byteacctimg.com/img/user-avatar/20d2a9586e883e32f0ec97bcf4a77221~300x300.image',
  // 评论id数组
  likes: [1, 2, 11]
})

const submit = ({ clear, content, parentId }: CommentSubmitParam) => {
  console.log(content, parentId)
  UToast({ message: '评论成功!', type: 'info' })
}

const like = (id: number) => {
  if (user.likes.indexOf(id) == -1) {
    // 点赞
    user.likes.push(id)
  } else {
    // 取消点赞
    console.log(id, user.likes.indexOf(id) == -1)
    user.likes.splice(
      user.likes.findIndex(item => item == id),
      1
    )
  }
}

onMounted(() => {
  setTimeout(() => {
    comments.value = [
      {
        id: 1,
        parentId: null,
        username: '小生凡一',
        avatar: 'https://p6-passport.byteacctimg.com/img/user-avatar/20d2a9586e883e32f0ec97bcf4a77221~300x300.image',
        like: 3,
        content:
          '是的，[狗头]掘友反馈第一版任务规则比较复杂。我们合并了任务，之前的参赛文章可以修改正文第一句关键词，依然算投稿成功。目前春招打卡任务为 4 关奖励。经验复盘（可以写项目经验、也可以写上岸经验）完成 1 篇的同学都有机会被明星导师选中、进行 1v1 职业规划咨询 or 模拟面试。是的，掘友反馈第一版任务规则比较复杂。我们合并了任务，之前的参赛文章可以修改正文第一句关键词，依然算投稿成功。目前春招打卡任务为 4 关奖励。经验复盘（可以写项目经验、也可以写上岸经验）完成 1 篇的同学都有机会被明星导师选中、进行 1v1 职业规划咨询 or 模拟面试。',
        reply: null
      },
      {
        id: 2,
        parentId: null,
        username: '掘金酱',
        avatar: 'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/mirror-assets/168e0858b6ccfd57fe5~tplv-t2oaga2asx-no-mark:40:40:40:40.awebp',
        like: 4,
        content: '大家要阅读全文[大哭2]，找文中的 评论有奖关键词哦！发关键词才能参与抽奖～～',
        reply: {
          total: 1,
          list: [
            {
              id: 11,
              parentId: 2,
              username: '11王',
              avatar: 'https://p6-passport.byteacctimg.com/img/user-avatar/8803c8cce2f8567c524d075ee5d7f9ca~300x300.image',
              content: '二月的更文奖励啥时候才能发啊',
              like: 1
            }
          ]
        }
      },
      {
        id: 3,
        parentId: null,
        username: 'JowayYoung',
        avatar: 'https://p9-passport.byteacctimg.com/img/user-avatar/9ff5bb9ae1c53fd2c93a7a1a9e52da2e~300x300.image',
        like: 5,
        content:
          '个人觉得这种应试式面试，只会让大家在面试前封装刷题包装自己，而真正有能力的人有可能被这种反人类操作刷掉，见过太多面试良好试用期被无情刷掉的人了，为什么这么多公司跟风，不好好考察应试人各方面的技能，而去搞这种八股文和算法刷题？整个市场都被污浊了，相信再过几年，真正厉害的人都不多了，盲目内卷终究会导致盲目躺平，时间问题而已👏',
        reply: {
          total: 3,
          list: [
            {
              id: 12,
              parentId: 3,
              username: '杰出D',
              avatar: 'https://p3-passport.byteacctimg.com/img/user-avatar/2e8908f0995d5b92dfe5884745a78d4d~300x300.image',
              content: '这个题目还算不上八股文和算法题吧。主要是想看能不能写递归，这个开发过程中还是很常见。😂',
              like: 0
            },
            {
              id: 13,
              parentId: 3,
              username: 'ssslc',
              avatar: 'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/7/1728d1e35d9b207f~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp',
              content: '这种题算还好吧，在项目里也算实用。之前看过二叉树、深度遍历、广度遍历那些变形，就感觉属于刷题了😢',
              like: 1
            },
            {
              id: 14,
              parentId: 3,
              username: '迷失的夜',
              avatar: 'https://p3-passport.byteacctimg.com/img/mosaic-legacy/3797/2889309425~300x300.image',
              like: 3,
              content: '这个还真不是太复杂的转换 而且很常见，特别是在做图表 后端不给你特定的接口、或者是改版后端接口不动的时候，我尝试着实现了一下，没用递归大概十几分钟搞定吧'
            }
          ]
        }
      }
    ]
  }, 2000)
})
</script>

<style lang="scss" scoped>
.comment-view {
  background-color: #f4f5f5;
  min-height: 800px;
}
</style>

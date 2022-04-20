<template>
  <u-comment :emojis="emojis" :comments="comments" @submit="submit"></u-comment>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UToast, CommentApi, CommentSubmitFun } from 'undraw-ui'
import emojis from './emoji'

const comments = ref([] as CommentApi[])

const submit: CommentSubmitFun = (clear, content, parentId) => {
  console.log(content, parentId)
  UToast({ message: '评论成功!', type: 'info' })
  clear()
}

comments.value = [
  {
    id: 1,
    parentId: null,
    username: '落🤍尘',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    content: '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
    reply: null
  },
  {
    id: 1,
    parentId: null,
    username: '碎梦遗忘录',
    avatar: 'https://static.juzicon.com/avatars/avatar-20210310192149-vkuj.jpeg?x-oss-process=image/resize,w_100',
    content: '说谎和沉默可以说是现在人类社会里日渐蔓延的两大罪恶。事实上，我们经常说谎，动不动就沉默不语',
    reply: {
      total: 3,
      list: [
        {
          id: 11,
          parentId: 2,
          username: '欲知欲忘',
          avatar: 'https://static.juzicon.com/avatars/avatar-20220310090547-fxvx.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
          content: '沉默，是保护自己。说谎是让自己不被注意，且不被攻击[狗头]'
        },
        {
          id: 12,
          parentId: 2,
          username: '陵薮市朝',
          avatar: 'https://static.juzicon.com/avatars/avatar-20220302110828-1hm0.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
          content: '[吃瓜]果真是了'
        },
        {
          id: 13,
          parentId: 2,
          username: '每天至少八杯水',
          avatar: 'https://static.juzicon.com/avatars/avatar-20220308235453-v09s.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
          content: '沉默是金[困狗]'
        }
      ]
    }
  },
  {
    id: 3,
    parentId: null,
    username: '悟二空',
    avatar: 'https://static.juzicon.com/user/avatar-bf22291e-ea5c-4280-850d-88bc288fcf5d-220408002256-ZBQQ.jpeg',
    content: '知道在学校为什么感觉这么困吗？因为学校，是梦开始的地方。[脱单doge]',
    reply: {
      total: 3,
      list: [
        {
          id: 14,
          parentId: 3,
          username: '别扰我清梦*ぁ',
          avatar: 'https://static.juzicon.com/user/avatar-8b6206c1-b28f-4636-8952-d8d9edec975d-191001105631-MDTM.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
          content: '说的对，所以，综上所述，上课睡觉不怪我呀💤'
        },
        {
          id: 12,
          parentId: 3,
          username: '三分打铁',
          avatar: 'https://static.juzicon.com/avatars/avatar-191031205903-I6EP.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
          content: ' 仔细一想还真有点感伤[大哭2]'
        },
        {
          id: 12,
          parentId: 3,
          username: 'Blizzard',
          avatar: 'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
          content: '看完打了一个哈切。。。会传染。。。[委屈]'
        }
      ]
    }
  }
]
</script>

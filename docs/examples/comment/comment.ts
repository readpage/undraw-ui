import { CommentApi, ReplyApi, usePage } from 'undraw-ui'

const comment = [
  {
    id: '1',
    parentId: null,
    uid: '1',
    address: '来自上海',
    content:
      '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
    likes: 2,
    contentImg: '/static/img/program.gif, /static/img/normal.webp',
    createTime: '2023-04-30 16:22',
    user: {
      username: '落🤍尘',
      avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
      level: 6,
      homeLink: '/1'
    }
  },
  {
    id: '2',
    parentId: null,
    uid: '2',
    address: '来自苏州',
    content: '知道在学校为什么感觉这么困吗？[大笑2]因为学校，是梦开始的地方。[脱单doge]',
    likes: 11,
    createTime: '2023-04-28 09:00',
    user: {
      username: '悟二空',
      avatar: 'https://static.juzicon.com/user/avatar-bf22291e-ea5c-4280-850d-88bc288fcf5d-220408002256-ZBQQ.jpeg',
      level: 1,
      homeLink: '/2'
    },
    reply: {
      total: 2,
      list: [
        {
          id: '21',
          parentId: '2',
          uid: '3',
          address: '来自重庆',
          content: '说的对[大笑2]，所以，综上所述，上课睡觉不怪我呀💤',
          likes: 3,
          createTime: '2023-04-28 10:00',
          user: {
            username: '别扰我清梦*ぁ',
            avatar:
              'https://static.juzicon.com/user/avatar-8b6206c1-b28f-4636-8952-d8d9edec975d-191001105631-MDTM.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 5,
            homeLink: '/21'
          }
        },
        {
          id: '22',
          parentId: '2',
          uid: '4',
          content:
            '回复 <span style="color: var(--u-color-success-dark-2);">@别扰我清梦*ぁ:</span> 看完打了一个哈切。。。会传染。。。[委屈]',
          address: '来自广州',
          likes: 9,
          createTime: '2023-04-28 10:00',
          user: {
            username: 'Blizzard',
            avatar:
              'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 3,
            homeLink: '/22'
          }
        }
      ]
    }
  },
  {
    id: '3',
    parentId: null,
    uid: '5',
    address: '来自北京',
    content: '人的一切痛苦，本质上都是对自己的无能的愤怒。',
    likes: 34116,
    createTime: '2023-04-27 09:00',
    user: {
      username: '半个句号',
      avatar:
        'https://static.juzicon.com/user/avatar-0d70406e-5d4a-4107-a689-652ffd063f99-200425180341-1QK6.jpg?x-oss-process=image/resize,m_fill,w_100,h_1000',
      level: 5,
      homeLink: '/3'
    },
    reply: {
      total: 2,
      list: [
        {
          id: '31',
          uid: '6',
          parentId: '3',
          address: '来自成都',
          content: '人生就像愤怒的小鸟，当你失败时，总有几只猪在笑。',
          likes: 7,
          createTime: '2023-04-28 09:00',
          user: {
            username: '陆呈洋',
            avatar:
              'https://static.juzicon.com/avatars/avatar-20220310090547-fxvx.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 4,
            homeLink: '/31'
          }
        },
        {
          id: '32',
          parentId: '3',
          uid: '7',
          address: '来自杭州',
          content: '深思熟虑的结果往往就是说不清楚。',
          likes: 3,
          createTime: '2023-04-28 10:00',
          user: {
            username: '哑谜',
            avatar:
              'https://static.juzicon.com/avatars/avatar-190919180152-2VDE.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 3,
            homeLink: '/32'
          }
        }
      ]
    }
  },
  {
    id: '4',
    parentId: null,
    uid: '14',
    address: '来自杭州',
    content:
      '鱼说：我时时刻刻睁开眼睛，就是为了能让你永远在我眼中！<br>水说：我时时刻刻流淌不息，就是为了能永远把你拥抱！！<br>锅说：都快熟了，还这么贫。',
    likes: 13,
    createTime: '2023-03-28 13:00',
    user: {
      username: 'Blizzard1',
      avatar:
        'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
      level: 3,
      homeLink: '/4'
    },
    reply: {
      total: 2,
      list: [
        {
          id: '41',
          parentId: '4',
          uid: '15',
          address: '来自北京',
          content: '鱼对水说，你看不到我流泪，因为我在水中。水对鱼说，我看到你悲伤，因为你在我心中。[呲牙]',
          likes: 36,
          createTime: '2023-04-01 13:00',
          user: {
            username: '过往~',
            avatar:
              'https://static.juzicon.com/avatars/avatar-20210308112705-zqf0.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 4,
            homeLink: '/41'
          }
        },
        {
          id: '42',
          parentId: '4',
          uid: '16',
          address: '来自杭州',
          content: '约束条件变了，原来的收益，一下子都变为成本。生命如果架在锅上，成本自然也就很高了[tv_微笑]',
          likes: 16,
          createTime: '2023-04-01 15:00',
          user: {
            username: 'Blizzard1',
            avatar:
              'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 3,
            homeLink: '/42'
          }
        }
      ]
    }
  },


  {
    id: '4',
    parentId: null,
    uid: '14',
    address: '来自杭州',
    content:
      '鱼说：我时时刻刻睁开眼睛，就是为了能让你永远在我眼中！<br>水说：我时时刻刻流淌不息，就是为了能永远把你拥抱！！<br>锅说：都快熟了，还这么贫。',
    likes: 13,
    createTime: '2023-04-29 14:00',
    user: {
      username: 'Blizzard1',
      avatar:
        'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
      level: 3,
      homeLink: '/4'
    }
  },
  {
    id: '4',
    parentId: null,
    uid: '14',
    address: '来自杭州',
    content:
      '鱼说：我时时刻刻睁开眼睛，就是为了能让你永远在我眼中！<br>水说：我时时刻刻流淌不息，就是为了能永远把你拥抱！！<br>锅说：都快熟了，还这么贫。',
    likes: 13,
    createTime: '2023-04-29 17:00',
    user: {
      username: 'Blizzard1',
      avatar:
        'https://static.juzicon.com/user/avatar-3cb86a0c-08e7-4305-9ac6-34e0cf4937cc-180320123405-BCV6.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
      level: 3,
      homeLink: '/4'
    }
  }
] as CommentApi[]

export const reply = {
  total: 6,
  list: [
    {
      id: '31',
      parentId: '3',
      uid: '6',
      address: '来自成都',
      content: '人生就像愤怒的小鸟，当你失败时，总有几只猪在笑。',
      likes: 7,
      createTime: '2023-04-29 14:00',
      user: {
        username: '陆呈洋',
        avatar:
          'https://static.juzicon.com/avatars/avatar-20220310090547-fxvx.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/31'
      }
    },
    {
      id: '32',
      parentId: '3',
      uid: '7',
      address: '来自杭州',
      content: '深思熟虑的结果往往就是说不清楚。',
      likes: 3,
      createTime: '2023-04-29 15:00',
      user: {
        username: '哑谜',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919180152-2VDE.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 3,
        homeLink: '/32'
      }
    },
    {
      id: '33',
      parentId: '3',
      uid: '8',
      level: 2,
      address: '来自深圳',
      content: '当我跨过沉沦的一切，向着永恒开战的时候，你是我的军旗。',
      createTime: '2023-04-29 17:00',
      user: {
        username: 'Mia',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919181554-L2ZO.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        likes: 3,
        homeLink: '/33'
      }
    },
    {
      id: '34',
      parentId: '3',
      uid: '9',
      address: '来自西安',
      likes: 34,
      content: '不要由于别人不能成为我们所希望的人而愤怒，因为我们自己也难以成为自己所希望的人。',
      createTime: '2023-04-29 14:00',
      user: {
        username: 'poli301',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919180043-XPLP.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/34'
      }
    },
    {
      id: '35',
      parentId: '3',
      uid: '10',
      likes: 32,
      address: '来自武汉',
      content: '世上莫名其妙走霉运的人多的是，都是一边为命运生气，一边化愤怒为力量地活着。',
      createTime: '2023-04-29 14:00',
      user: {
        username: 'fish_eno',
        avatar:
        'https://static.juzicon.com/avatars/avatar-190919180320-NAQJ.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 6,
        homeLink: '/34'
      }
    },
    {
      id: '36',
      parentId: '3',
      uid: '11',
      likes: 21,
      address: '来自上海',
      content: '这世上所有的不利情况，都是当事者能力不足造成的',
      createTime: '2023-04-29 14:00',
      user: {
        username: '十三',
        avatar:
          'https://static.juzicon.com/user/avatar-f103e42d-a5c9-4837-84e3-d10fad0bcb36-210108053135-E90E.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 4,
        homeLink: '/36'
      }
    },
    {
      id: '37',
      parentId: '3',
      uid: '12',
      likes: 18,
      address: '来自广州',
      content: ' 绝望自有绝望的力量，就像希望自有希望的无能。',
      createTime: '2023-04-30 14:00',
      user: {
        username: 'D.z.H****',
        avatar:
          'https://static.juzicon.com/avatars/avatar-190919181051-M3HK.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 3,
        homeLink: '/37'
      }
    },
    {
      id: '38',
      parentId: '3',
      uid: '13',
      likes: 17,
      address: '来自重庆',
      content: ' 无论这个世界对你怎样，都请你一如既往的努力，勇敢，充满希望。',
      createTime: '2023-04-30 15:00',
      user: {
        username: '繁星Cong2',
        avatar:
          'https://static.juzicon.com/user/avatar-f81b3655-03fd-485c-811b-4b5ceaca52b6-210817180051-YTO4.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
        level: 1,
        homeLink: '/38'
      }
    }
  ]
} as ReplyApi

export const commentSize = comment.length
export const getComment = (pageNum: number, pageSize: number) => usePage(pageNum, pageSize, comment)

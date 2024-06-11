<template>
  <div style="padding: 10px" class="space-y-2">
    <u-editor
      ref="editorRef"
      v-model="content"
      :mention="mention"
      @mention-change="mentionChange"
      placeholder="请输入内容"
    />
    <el-button @click="() => editorRef?.addText('test')">添加</el-button>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { EditorInstance, isNull } from 'undraw-ui'

defineOptions({
  name: 'editor'
})

const content = ref('')
const editorRef = ref<EditorInstance>()

const userArr = [
  {
    id: 1,
    name: '张三',
    avatar:
      'https://gd-hbimg.huaban.com/cba6c7af94997ba172c32bbe668794553f29e91ef26f-qnroJ7_fw240webp'
  },
  {
    id: 2,
    name: '李四',
    avatar:
      'https://gd-hbimg.huaban.com/d01263d11d07748a2193bbbdd3b9a0c8a4b062b9f39d-PKvV2t_fw240webp'
  },
  {
    id: 3,
    name: '王五',
    avatar:
      'https://gd-hbimg.huaban.com/69d92bfbf36fc111e1f563403311e7943628c9fc108bf-6l34Pa_fw240webp'
  },
  {
    id: 4,
    name: '赵六',
    avatar:
      'https://gd-hbimg.huaban.com/7f5c54a455f61f431ec1f7b7c0e583f4a725fb73adba-5DgU3q_fw240webp'
  },
  {
    id: 5,
    name: '孙七',
    avatar:
      'https://gd-hbimg.huaban.com/edea85f44f3f8bce8d094ed78f390164a9eba229cb2e-1Lc22F_fw240webp'
  },
  {
    id: 6,
    name: '周八',
    avatar:
      'https://gd-hbimg.huaban.com/c1b2131c6977e01a430d6575ba678a4afeabcad222605-UJUwwb_fw240webp'
  },
  {
    id: 7,
    name: '吴九',
    avatar:
      'https://gd-hbimg.huaban.com/4942e77078bda39a458980049b528236bf79183814998-zVzEJv_fw240webp'
  },
  {
    id: 8,
    name: '郑十',
    avatar:
      'https://gd-hbimg.huaban.com/628236086a2ca12d2074bdd29f496f38a4d0c06ae50f-Rj3vsO_fw240webp'
  },
  {
    id: 9,
    name: '王富贵',
    avatar:
      'https://gd-hbimg.huaban.com/0108a6b65d211d3bc602bc0431e84b31f9e62ac08015f-JifENm_fw240webp'
  },
  {
    id: 10,
    name: '赵富贵',
    avatar:
      'https://gd-hbimg.huaban.com/d9643d6181d506ccc159a940e11bdc6b9a2b53ae57139-pxAnk9_fw240webp'
  }
]

const mention = reactive<MentionApi>({
  data: userArr,
  alias: {
    username: 'name'
  },
  showAvatar: true
})

function mentionChange(val: string) {
  console.log(val)
  mention.data = isNull(
    userArr.filter(v => v.name.includes(val)),
    userArr
  )
}
</script>

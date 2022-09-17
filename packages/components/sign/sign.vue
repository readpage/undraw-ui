<template>
  <div class="u-sign">
    <el-button link @click="visible = true">登录/注册</el-button>
    <u-dialog v-model="visible" :title="title" width="320px" top="30vh" :close-on-click-modal="false">
      <img v-if="toggle == 0" class="sign-img normal" src="/static/img/normal.webp" alt="" />
      <img v-else-if="toggle == 1" class="sign-img greeting" src="/static/img/greeting.webp" alt="" />
      <img v-else class="sign-img blindfold" src="/static/img/blindfold.webp" alt="" />
      <formVue v-model="type" @toggle="val => (toggle = val)" @submit="form => $emit('submit', form)" />
      <u-divider>其他方式登录</u-divider>
      <div class="sign-oauth">
        <u-icon name="QQ"></u-icon>
        <u-icon name="weixin"></u-icon>
        <u-icon name="gitee"></u-icon>
        <u-icon name="github"></u-icon>
      </div>
    </u-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { SignApi } from '.'
import formVue from './form.vue'

import { ElButton } from 'element-plus'
// import 'element-plus/es/components/button/style/css'

defineOptions({
  name: 'USign'
})

const emit = defineEmits<{
  (e: 'submit', form: SignApi): void
}>()

const visible = ref(false)
const type = ref('login')
const toggle = ref(0)

const title = computed(() => {
  switch (type.value) {
    case 'login':
      return '登录'
    case 'register':
      return '注册'
    case 'forget':
      return '修改密码'
    default:
      return ''
  }
})
</script>

<style lang="scss" scoped>
.u-sign {
  .sign-img {
    width: 120px;
    position: absolute;
    top: 0;
    left: 50%;
  }

  .normal {
    transform: translate(-50%, -83%);
  }
  .greeting {
    transform: translate(-50%, -75.8%);
  }
  .blindfold {
    transform: translate(-50%, -75%);
  }

  .sign-oauth {
    display: flex;
    justify-content: space-evenly;
    .u-icon {
      cursor: pointer;
      font-size: 32px !important;
    }
  }
}
</style>

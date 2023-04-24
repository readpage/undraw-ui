<template>
  <el-form ref="ruleFormRef" :model="form" :rules="rules" class="select-none">
    <el-form-item prop="email">
      <el-input
        v-model="form.email"
        placeholder="请输入邮箱"
        @focus="$emit('toggle', 1)"
        @blur="$emit('toggle', 0)"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="form.password"
        placeholder="请输入密码"
        @focus="$emit('toggle', 2)"
        @blur="$emit('toggle', 0)"
      ></el-input>
    </el-form-item>
    <el-form-item v-show="modelValue == 'forget'" prop="checkPass">
      <el-input
        v-model="form.checkPass"
        placeholder="请确认密码"
        @focus="$emit('toggle', 2)"
        @blur="$emit('toggle', 0)"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button style="width: 100%" type="primary" @click="submit">{{ param.type }}</el-button>
    </el-form-item>
    <el-form-item>
      <div @click="$emit('update:modelValue', param.one.key)">{{ param.one.value }}</div>
      <div @click="$emit('update:modelValue', param.two.key)">{{ param.two.value }}</div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref, watch } from 'vue'
import { SignApi, ValidateApi } from '.'

import { ElForm, ElFormItem, ElInput } from 'element-plus'
// import 'element-plus/es/components/form/style/css'
// import 'element-plus/es/components/form-item/style/css'
// import 'element-plus/es/components/input/style/css'

interface Props {
  modelValue: string
}

const props = defineProps<Props>()

const form = reactive<SignApi>({
  type: '',
  email: '',
  password: ''
})

const checkEmail: ValidateApi = (rule, value, callback) => {
  const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (!value) {
    return callback('请输入邮箱!')
  }
  if (!emailReg.test(value)) callback('邮箱地址不合法')
  callback()
}

const validatePass: ValidateApi = (rule, value, callback) => {
  if (!value) {
    callback('请确认密码')
  } else if (value != form.password) {
    callback('输入密码不一致')
  } else {
    callback()
  }
}
const ruleFormRef = ref()

const rules = ref()
const rules1 = reactive({
  email: {
    required: true,
    validator: checkEmail,
    trigger: 'blur'
  },
  password: {
    required: true,
    message: '请输入密码'
  }
})

const rules2 = reactive({
  email: {
    required: true,
    validator: checkEmail,
    trigger: 'blur'
  },
  password: {
    required: true,
    message: '请输入密码'
  },
  checkPass: {
    required: true,
    validator: validatePass,
    trigger: 'blur'
  }
})

const param = reactive({
  type: '',
  one: { key: '', value: '' },
  two: { key: '', value: '' }
})

watch(
  () => props.modelValue,
  val => {
    nextTick(() => reset())
    switch (val) {
      case 'login':
        rules.value = rules1
        param.type = '登录'
        param.one = { key: 'register', value: '邮箱注册' }
        param.two = { key: 'forget', value: '忘记密码' }
        break
      case 'register':
        rules.value = rules1
        param.type = '注册'
        param.one = { key: 'login', value: '邮箱登录' }
        param.two = { key: '', value: '' }
        break
      case 'forget':
        rules.value = rules2
        param.type = '修改密码'
        param.one = { key: 'login', value: '邮箱登录' }
        param.two = { key: '', value: '' }
        break
    }
  },
  { immediate: true }
)

const emit = defineEmits<{
  (e: 'submit', form: SignApi): void
  (e: 'update:modelValue', key: string): void
  (e: 'toggle', val: number): void
}>()

function submit() {
  form.type = props.modelValue
  ruleFormRef.value.validate((valid: any) => {
    if (valid) {
      emit('submit', form)
    }
  })
}

function reset() {
  ruleFormRef.value.resetFields()
}

defineExpose({
  reset
})
</script>

<style lang="scss" scoped>
.el-form {
  .el-form-item {
    margin-bottom: 25px;
  }
  .el-form-item:nth-last-child(2),
  .el-form-item:last-child {
    margin-bottom: 10px;
  }

  .el-form-item:last-child :deep(.el-form-item__content) {
    display: flex;
    justify-content: space-between;
    div {
      cursor: pointer;
    }
    div:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>

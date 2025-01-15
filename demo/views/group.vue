<template>
  <u-group ref="groupRef" :form="form">
    <template #form-role="{ item, data }">
      <el-radio-group v-model="data.role">
        <el-radio value="用户" size="small">用户</el-radio>
        <el-radio value="管理员" size="small">管理员</el-radio>
      </el-radio-group>
    </template>
  </u-group>
  <div>
    <el-button @click="reset">重置</el-button>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FormApi } from '~/components';
import { Time } from '~/util'

const form = reactive<FormApi>({
  data: {
  },
  group: {
    type: 'collapse',
    labels: ['基础信息', '详细信息'],
  },
  items: [
    {
      label: '用户名',
      prop: 'username',
      width: 300,
      required: true,
      component: {
        name: 'el-input'
      },
      group: '基础信息'
    },
    {
      label: '性别',
      prop: 'sex',
      value: '',
      width: 200,
      rule: [{ required: true, message: '性别不能为空', trigger: 'blur' }],
      component: {
        name: 'el-select',
        options: ['男', '女']
      },
      group: '基础信息'
    },
    {
      label: '角色',
      prop: 'role',
      value: '用户',
      group: '详细信息'
    },
    {
      label: '年龄',
      prop: 'age',
      value: 0,
      component: {
        name: 'el-input'
      },
      group: '详细信息'
    },
    {
      label: '日期',
      prop: 'date',
      value: new Time().value,
      component: {
        name: 'el-date'
      },
      group: '详细信息'
    }
  ]
})


const groupRef = ref()

function reset() {
  groupRef.value.resetFields()
}

async function submit() {
 groupRef.value.validate((valid: boolean) => {
  if (valid) {
    console.log(form.data)
  } else {
    console.log(valid)
  }
 })
}
</script>

<style lang="scss">
.u-form {
  .el-form {
    display: grid;
    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    grid-template-columns: repeat(2, 1fr);
    .form-role {
      grid-column: 1 / -1;
    }
  }
}
</style>

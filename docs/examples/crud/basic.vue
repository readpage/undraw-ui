<template>
  <u-crud ref="crudRef" :table="table" :crud="crud" :form="form" max-height="800">
    <template #query>
      <!-- <Query v-model="query" :allergen="form.options['allergen'] || []" @submit="_submit" /> -->
    </template>
    <!-- <Form v-model="form.visible" v-bind="form" @finish="crudRef?.refresh" /> -->
    <template #tool>
      <el-button :icon="Upload" class="u-small">导入</el-button>
      <el-button :icon="Download" class="u-small" type="info" @click="download">导出</el-button>
    </template>
    <template #table-role="{row}">
      <template v-for="(item, index) in state.tags" :key="index">
        <el-tag v-if="row.role == item.label" :type="item.value">{{ item.label }}</el-tag>
      </template>
    </template>
    <template #form-role="{ item, data }">
      <el-radio-group v-model="data.role">
        <el-radio value="用户" size="small">用户</el-radio>
        <el-radio value="管理员" size="small">管理员</el-radio>
      </el-radio-group>
    </template>
  </u-crud>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { debounce } from 'undraw-ui'
import { Download, Upload } from '@element-plus/icons-vue'
import { TableApi, CrudApi, FormApi, CrudInstance, Time, throttle} from 'undraw-ui'

defineOptions({
  name: 'assets'
})

const crudRef = ref<CrudInstance>()

const table = reactive<TableApi>({
  columns: [
    {
      type: 'selection',
      width: 50
    },
    {
      label: '序号',
      type: 'index',
      width: 60
    },
    {
      label: '用户名',
      prop: 'username',
      minWidth: 140,
      align: 'center'
    },
    {
      label: '角色',
      prop: 'role',
      type: 'custom'
    },
    {
      label: '性别',
      prop: 'sex',
      minWidth: 100
    },
    {
      label: '年龄',
      prop: 'age',
      minWidth: 100,
    },
    {
      label: '日期',
      prop: 'date',
      minWidth: 160,
    },
    {
      type: 'operation',
      width: 110
    }
  ],
  data: [],
  total: 0,
  refresh: refresh
})

const crud = reactive<CrudApi>({
  save: (val, finish) => {
    console.log('save', val)
    finish()
  },
  update: (val, finish) => {
    console.log('update', val)
    finish()
  },
  remove: (val, finish) => {
    console.log(val)
    finish()
  }
})

const form = reactive<FormApi>({
  data: {},
  group: {
    type: 'tabs',
    labels: ['基础信息', '详细信息']
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

const state = reactive({
  tags: [{label: '用户', value: 'primary'}, { label: '管理员', value: 'success'}]
})

// --> 查询
const query = reactive({
  keyword: '',
  assetsNum: ['', '']
})
export type queryType = typeof query

function refresh(finish: () => void, current: number, size: number) {
  let data = [
    { username: '刘一', sex: '男', role: '用户', age: 23, date: '2024-07-01' },
    { username: '陈二', sex: '男', role: '管理员', age: 22, date: '2024-07-06' },
    { username: '张三', sex: '男', role: '用户', age: 25, date: '2024-07-21' },
    { username: '李四', sex: '男', role: '管理员', age: 21, date: '2024-07-11' },
    { username: '王五', sex: '女', role: '用户', age: 24, date: '2024-07-03' },
    { username: '赵六', sex: '男', role: '用户', age: 23, date: '2024-04-01' },
    { username: '孙七', sex: '女', role: '管理员', age: 24, date: '2024-07-01' },
    { username: '周八', sex: '男', role: '用户', age: 26, date: '2024-05-05' },
    { username: '吴九', sex: '女', role: '管理员', age: 22, date: '2024-03-01' },
    { username: '郑十', sex: '男', role: '用户', age: 24, date: '2024-02-21' }
  ]
  setTimeout(() => {
    table.data = data
    table.total = 10
    finish()
  }, 300)
}
// <-

const download = throttle(() => {}, 1000)

const _submit = debounce(() => {
  crudRef.value?.refresh()
})
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

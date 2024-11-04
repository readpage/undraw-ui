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
    <template #table-role="{ row }">
      <template v-for="(item, index) in options.roles" :key="index">
        <el-tag v-if="row.role == item.value" :type="item.type">{{ item.label }}</el-tag>
      </template>
    </template>
    <!-- <template #form-role="{ item, data }">
      <el-radio-group v-model="data.role">
        <el-radio value="user" size="small">用户</el-radio>
        <el-radio value="admin" size="small">管理员</el-radio>
      </el-radio-group>
    </template> -->
  </u-crud>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { debounce } from 'undraw-ui'
import { Download, Upload, UploadFilled } from '@element-plus/icons-vue'
import { TableApi, CrudApi, FormApi, CrudInstance } from '~/components'
import { Time, throttle } from '~/util'

defineOptions({
  name: 'assets'
})

const options = reactive({
  roles: [
    { label: '用户', value: 'user', type: 'primary' },
    { label: '管理员', value: 'admin', type: 'success' },
    { label: 'test', value: '1', type: 'success' }
  ]
})

const crudRef = ref<CrudInstance>()
const title = ref()
const table = reactive<TableApi>({
  type: 'page',
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
      align: 'center',
      sort: 'asc'
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
      minWidth: 100
    },
    {
      label: '日期',
      prop: 'date',
      minWidth: 160
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
  save: (val, done) => {
    console.log('save', val)
    done()
  },
  update: (val, done) => {
    console.log('update', val)
    done()
  },
  remove: (val, done) => {
    console.log(val)
    done()
  }
})

const form = reactive<FormApi>({
  data: {},
  group: {
    type: 'collapse',
    labels: ['基础信息', '详细信息']
  },
  items: [
    {
      label: '用户名',
      prop: 'username',
      required: true,
      component: {
        name: 'el-input',
      },
      group: '基础信息'
    },
    {
      label: '性别',
      prop: 'sex',
      value: '',
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
      component: {
        name: 'el-select',
        options: options.roles
      },
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

// --> 查询
const query = reactive({
  keyword: '',
  assetsNum: ['', '']
})
export type queryType = typeof query
let total = ref(20)
function refresh(done: () => void, current: number, size: number, sort: any) {
  console.log(sort)
  let data = [
    { username: '刘一', sex: '男', role: 1, age: 23, date: '2024-07-01' },
    { username: '陈二', sex: '男', role: 'admin', age: 22, date: '2024-07-06' },
    { username: '张三', sex: '男', role: 'user', age: 25, date: '2024-07-21' },
    { username: '李四', sex: '男', role: 'admin', age: 21, date: '2024-07-11' },
    { username: '王五', sex: '女', role: 'user', age: 24, date: '2024-07-03' },
    { username: '赵六', sex: '男', role: 'user', age: 23, date: '2024-04-01' },
    { username: '孙七', sex: '女', role: 'admin', age: 24, date: '2024-07-01' },
    { username: '周八', sex: '男', role: 'user', age: 26, date: '2024-05-05' },
    { username: '吴九', sex: '女', role: 'admin', age: 22, date: '2024-03-01' },
    { username: '郑十', sex: '男', role: 'user', age: 24, date: '2024-02-21' }
  ]
  setTimeout(() => {
    table.data = data
    table.total = total.value
    console.log(table.total, total.value)
    done()
  }, 300)
}
// <-

const download = throttle(() => {}, 1000)

</script>

<style lang="scss" scoped>
:deep(.el-dialog .el-form) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .form-role {
    grid-column: 1 / -1;
  }
}

</style>

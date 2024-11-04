<template>
  <u-table ref="tableRef" :table="table" max-height="800">
    <template #table-role="{ row, column }">
      <el-radio-group v-model="row.role">
        <el-radio value="用户" size="small">用户</el-radio>
        <el-radio value="管理员" size="small">管理员</el-radio>
      </el-radio-group>
    </template>
  </u-table>
  <el-button @click="submit">submit</el-button>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { TableApi } from '~/components'
import { Time } from '~/util'

defineOptions({
  name: 'assets'
})

const table = reactive<TableApi>({
  columns: [
    {
      type: 'selection',
      width: 50
    },
    {
      label: '序号',
      width: 60,
      type: 'index'
    },
    {
      label: '用户名',
      prop: 'username',
      required: true,
      width: 300,
      align: 'center',
      component: {
        name: 'el-input',
        disabled: true
      }
    },
    {
      label: '性别',
      prop: 'sex',
      value: '男',
      width: 300,
      rule: [{ required: true, message: '性别不能为空', trigger: 'blur' }],
      component: {
        name: 'el-select',
        options: ['男', '女'],
      }
    },
    {
      label: '年龄',
      prop: 'age',
      value: 0,
      minWidth: 100,
      align: 'center',
      editor: true
    },
    {
      label: '角色',
      prop: 'role',
      value: '用户',
      type: 'custom'
    },
    {
      label: '日期',
      prop: 'date',
      value: new Time().value,
      minWidth: 100,
      component: {
        name: 'el-date'
      }
    },
    {
      label: '操作',
      width: 60,
      type: 'row-add'
    }
  ],
  data: []
})
const tableRef = ref()

async function submit() {
  tableRef.value.validate((valid: boolean) => {
    if (valid) {
      console.log(table.data)
    } else {
      console.log(valid)
    }
  })
}

</script>

<style lang="scss" scoped></style>

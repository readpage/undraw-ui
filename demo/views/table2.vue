<template>
  <u-table ref="tableRef" :table="table" max-height="800" @sort-change="sortChange"></u-table>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { TableApi } from '~/components'
import { Time } from '~/util'

defineOptions({
  name: 'assets'
})

const table = reactive<TableApi>({
  sort: 'custom',
  type: 'page',
  size: 2,
  columns: [
    {
      label: '序号',
      width: 60,
      type: 'index'
    },
    {
      label: '名称',
      prop: 'name',
      width: 100,
      overflow: true,
      sort: null
    },
    {
      label: '标签',
      prop: 'tag',
      width: 100,
      align: 'center',
      component: {
        name: 'el-tag',
        options: [
          { type: 'primary', label: 'Tag 1' },
          { type: 'success', label: 'Tag 2' },
          { type: 'info', label: 'Tag 3' },
          { type: 'warning', label: 'Tag 4' },
          { type: 'danger', label: 'Tag 5' }
        ]
      }
    },
    {
      label: '日期',
      prop: 'date',
      align: 'center',
      width: 180,
      sort: 'desc'
    },
    {
      label: '地址',
      align: 'center',
      prop: 'address'
    }
  ],
  data: []
})
const tableRef = ref()

function sortChange(val: any) {
  console.log(val)
}

const data = [
  {
    date: '2016-05-03',
    name: 'Tom',
    tag: 'Tag 1',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    tag: 'Tag 2',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    tag: 'Tag 3',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom testttttttttttttttttttttt',
    tag: 'Tag 4',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

table.data = data
</script>

<style lang="scss" scoped></style>

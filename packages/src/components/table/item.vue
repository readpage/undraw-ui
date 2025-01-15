<template>
  <el-table-column
    :show-overflow-tooltip="item.overflow"
    :label="item.label"
    :prop="item.prop"
    :width="item.width"
    :min-width="item.minWidth"
    :sortable="item.sort !== undefined && (props.sort == 'custom' ? 'custom' : true)"
    :align="item.align"
    :type="item.type"
    :fixed="item.fixed"
  >
    <template #default="scope" v-if="!['selection', 'index'].includes(item.type || '')">
      <el-form-item
        :prop="`${scope.$index}.${item.prop}`"
        :rules="item.required ? { required: true, message: `${item.label}不能为空`, trigger: 'change' } : item.rule"
        :class="{ 'no-add': noAdd, center: item.align == 'center' }"
      >
        <!-- basic -->
        <template v-if="!item.component && (!item.type || item.type == 'basic')">
          <slot name="basic" v-bind="scope"></slot>
        </template>
        <!-- img -->
        <template v-else-if="item.prop && item.type == 'img'">
          <el-image :src="scope.row[item.prop]" :preview-src-list="[scope.row[item.prop]]" preview-teleported fit="fill" class="w-10 h-10">
            <template #error>
              <u-icon style="display: flex; justify-content: center; align-items: center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-974b4c7f="">
                  <path fill="currentColor" d="M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32"></path>
                  <path
                    fill="currentColor"
                    d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64M185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952z"
                  ></path>
                </svg>
              </u-icon>
            </template>
          </el-image>
        </template>
        <!-- componnet 组件 -->
        <template v-else-if="item.component">
          <template v-if="item.prop && item.component.name == 'el-input'">
            <el-input v-model="scope.row[item.prop]" clearable :placeholder="item.component.placeholder || `请选择${item.label}`" v-bind="item.component"></el-input>
          </template>
          <template v-else-if="item.prop && item.component.name == 'el-select'">
            <el-select v-model="scope.row[item.prop]" clearable :placeholder="item.component.placeholder || `请选择${item.label}`" v-bind="item.component">
              <el-option v-for="e in item.component.options" :key="e.value" :label="e.label" :value="e.value || e.label || e" />
            </el-select>
          </template>
          <template v-else-if="item.prop && item.component.name == 'el-date'">
            <el-date-picker
              v-model="scope.row[item.prop]"
              type="date"
              value-format="YYYY-MM-DD"
              :shortcuts="shortcuts"
              :placeholder="item.component.placeholder || `请选择${item.label}`"
              v-bind="item.component"
            />
          </template>
          <template v-else-if="item.prop && item.component.name == 'el-tag'">
            <el-tag v-for="e in getTags(item.component.options, scope.row[item.prop])" :type="e.type">
              {{ e.label }}
            </el-tag>
          </template>
          <template v-else-if="item.prop && item.component.name == 'u-search2'">
            <u-search2 v-model="scope.row[item.prop]" @remote-search="item.component.remoteSearch" :placeholder="item.component.placeholder || `请选择${item.label}`" v-bind="item.component" />
          </template>
        </template>
        <!-- custom 自定义 -->
        <template v-if="item.type == 'custom'">
          <div :class="{ overflow: item.overflow }">
            <slot :name="`table-${item.prop}`" v-bind="scope"></slot>
          </div>
        </template>
      </el-form-item>
    </template>
  </el-table-column>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { TableItemApi } from './table.vue'
import { ElTableColumn, ElFormItem, ElImage, ElInput, ElDatePicker, ElSelect, ElOption, ElTag } from 'element-plus'
import { UIcon, USearch2 } from 'undraw-ui'
import { Time } from '~/util'

interface Props {
  item: TableItemApi
  noAdd: boolean
  sort?: string
}

const shortcuts = [
  {
    text: '今天',
    value: new Date()
  },
  {
    text: '昨天',
    value: new Time().add(-1, 'day')
  },
  {
    text: '一周前',
    value: new Time().add(-1, 'week')
  }
]

const props = defineProps<Props>()

function getSort(val: any) {
  let sort: any = { order: null }
  switch (val) {
    case 'asc':
      sort.order = 'ascending'
      break
    case 'desc':
      sort.order = 'descending'
      break
  }
  return sort
}

function getTags(arr: any[] | undefined, v: any) {
  if (!arr) arr = [{ label: '', type: 'primary' }]
  let tag = arr.find(e => e.value == v || e.label == v) || { label: '', type: 'primary' }
  return [tag]
}
</script>

<style lang="scss" scoped>
.no-add {
  margin-bottom: 0;
}

.center :deep(.el-form-item__content) {
  display: flex;
  justify-content: center;
}
.overflow {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

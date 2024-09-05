<template>
  <div class="u-table">
    <el-form ref="formRef" :model="table.data">
      <el-table
        ref="tableRef"
        v-loading="state.loading"
        :data="table.data"
        :max-height="maxHeight"
        stripe
        border
        :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
        row-key="id"
        :element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-text="拼命加载中"
        @expand-change="expandChange"
        @selection-change="handleSelectionChange"
      >
        <template v-for="(item, index) in table.columns" :key="index">
          <!-- basic -->
          <el-table-column
            v-if="!item.type || item.type == 'basic'"
            :label="item.label"
            :prop="item.prop"
            :align="item.align"
            :width="item.width"
            :min-width="item.minWidth"
            :fixed="item.fixed"
          >
            <template #default="scope">
              <!-- 判断为编辑状态 -->
              <el-input
                v-if="
                  item.editor &&
                  state.tableRowEditIndex == scope.$index &&
                  state.tableColumnEditIndex == scope.column.id
                "
                id="u-table-input"
                v-model="scope.row[item.prop || '']"
                @keyup.enter="$event.target.blur()"
                @blur="onInputBlur(scope)"
              />
              <!-- 判断为显示状态 -->
              <div v-else class="row-content" @dblclick="dbClickCell(scope)">
                {{ scope.row[item.prop || ''] }}
              </div>
            </template>
          </el-table-column>
          <!-- rowAdd -->
          <el-table-column
            v-else-if="item.type == 'row-add'"
            :label="item.label"
            :width="item.width"
            :min-width="item.minWidth"
            :align="item.align"
          >
            <template #default="scope">
              <el-link :underline="false" type="primary" link @click="rowAdd(scope.$index)">
                <u-icon size="12px" style="margin-right: 10px"><svg data-v-c4997ac3="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"></path></svg></u-icon>
              </el-link>
              <el-link :underline="false" link @click="rowDel(scope.$index)">
                <u-icon size="12px"><svg data-v-c4997ac3="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path></svg></u-icon>
              </el-link>
            </template>
          </el-table-column>
          <!-- operation -->
          <el-table-column
            v-else-if="item.type == 'operation'"
            fixed="right"
            :align="item.align"
            label="操作"
            :width="item.width"
          >
            <template #default="scope">
              <el-link
                v-if="crud && crud.update"
                :underline="false"
                type="primary"
                style="font-size: 12px; margin-right: 5px"
                link
                @click="edit(cloneDeep(scope.row))"
              >
                <u-icon size="12px">
                  <svg data-v-c4997ac3="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"></path></svg>
                </u-icon>
                <span>修改</span>
              </el-link>
              <el-link
                v-if="crud && crud.remove"
                :underline="false"
                type="primary"
                :loading="state.btnLoading"
                style="font-size: 12px; margin: 0"
                link
                @click="remove([scope.row])"
              >
                <u-icon size="12px">
                  <svg data-v-c4997ac3="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></svg>
                </u-icon>
                <span>删除</span>
              </el-link>
            </template>
          </el-table-column>
          <!-- item -->
          <Item v-else :item="item" :no-add="state.noAdd">
            <!-- custom 自定义 -->
            <template v-if="item.type == 'custom'" #[`table-${item.prop}`]="v">
              <slot :name="`table-${item.prop}`" v-bind="v"></slot>
            </template>
          </Item>
        </template>
        <slot></slot>
        <template #empty>
          <el-empty :style="{ height: emptyHeight + 'px' }" :image-size="200"></el-empty>
        </template>
      </el-table>
    </el-form>
    <el-pagination
      v-if="table.type == 'page'"
      v-model:current-page="state.current"
      layout="total, sizes, prev, pager, next, jumper"
      small
      :hide-on-single-page="table.single"
      :total="total"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="state.size"
      background
      class="flex flex-wrap"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'
import { ElForm, ElTable, ElTableColumn, ElInput, ElLink, ElEmpty, ElPagination, ElMessageBox, FormInstance, FormItemRule } from 'element-plus'
import { UIcon, debounce, cloneDeep, throttle } from 'undraw-ui'
import { CrudApi } from '~/components'
import { mergeObject, toPx } from '~/util'
import { Arrayable } from 'element-plus/es/utils/typescript'
import Item from './item.vue'

defineOptions({
  name: 'UTable'
})

export interface TableItemApi {
  label?: string
  prop?: string
  value?: any
  width?: number
  minWidth?: number
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right' | false
  type?: 'basic' | 'index' | 'selection' | 'img' | 'input' | 'date' | 'select'
  | 'row-add' | 'custom' | 'operation'
  editor?: boolean
  required?: boolean
  rule?: Arrayable<FormItemRule>
  options?: {label: any, value: any}[] | any[]
}

export interface TableApi {
  key?: string
  type?: 'page' | 'list'
  columns: TableItemApi[]
  data: {}[]
  total?: number
  pageSize?: number
  single?: boolean
  number?: string
  refresh?:(finish: () => void, current: number, size: number) => void
  rowForm?: any
}

export interface Props {
  table: TableApi
  maxHeight?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  maxHeight: window.innerHeight - 300,
  pageSize: 10
})
const tableRef = ref<InstanceType<typeof ElTable>>()

const state = reactive({
  btnLoading: false,
  loading: false, // 表格加载动画
  visible: false,
  current: 1, // 页数
  size: props.table.pageSize || 10, // 页大小
  tableRowEditIndex: undefined, // 编辑的表格行
  tableColumnEditIndex: undefined, // 编辑的表格列
  noAdd: false
})

const crud = inject('u-crud', {}) as CrudApi
const edit = inject('edit', () => {}) as (val: any) => void

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

const emptyHeight = computed(() => toPx(props.maxHeight).replace('px') - 40)

const remove = (val: any[]) => {
  ElMessageBox.confirm('你确定要删除吗？', '系统提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true
  }).then(() => {
    if (crud.remove) {
      crud.remove(val, () => {
        reload()
      })
    }
  })
}

const emit = defineEmits<{
  onSelection: [val: any]
  inputBlur: [val: any]
}>()

// --> load
const _debounce = debounce(() => {
  state.loading = true
}, 300)

// 超出规定响应时间开启加载动画
const showLoading = () => {
  _debounce()
  return () => {
    setTimeout(() => {
      _debounce.cancel()
      state.loading = false
      tableRef.value?.clearSelection()
    }, 100)
  }
}

const reload = throttle(() => {
  let refresh = props.table.refresh
  refresh && refresh(showLoading(), state.current, state.size)
})
reload()

// <-

function handleCurrentChange(val: number) {
  state.current = val
  reload()
}

function handleSizeChange(val: number) {
  state.size = val
  reload()
}
function handleSelectionChange(val: any) {
  emit('onSelection', val)
}


//树形类型只展开一个
function expandChange(row: any, expanded: boolean) {
  if (expanded) {
    function tree(menu: any[]) {
      menu.forEach(item => {
        const child = item.children
        if (child) {
          tree(child)
        }
        if (row.id != item.id && row.parentId == item.parentId) {
          const child = item.children
          tableRef.value?.toggleRowExpansion(item, false)
        }
      })
    }
    tree(props.table.data)
  }
}

// --> editor input 可编辑
// 双击可编辑的单元格
const dbClickCell = (scope: any) => {
  // 找到单个格子独有的属性 - 这里是用所在行跟列id区别显示
  state.tableRowEditIndex = scope.$index
  state.tableColumnEditIndex = scope.column.id
  nextTick(() => {
    // 获取焦点
    let input = document.querySelector<HTMLInputElement>('#u-table-input')
    if (input) {
      input.focus()
      if (input.setSelectionRange) {
        input.setSelectionRange(0, input.value.length)
      }
    }
  })
}
// 表格中input取消焦点
const onInputBlur = (scope: any) => {
  state.tableRowEditIndex = undefined
  state.tableColumnEditIndex = undefined
  emit('inputBlur', scope.row)
}
// <-

// --> 行表单添加和删除
let newItem = () => (
  props.table.columns.reduce((acc: any, cur) => {
    // @ts-ignore
    cur.prop && (acc[cur.prop] = cur.value)
    return acc
  }, {})
)

function init() {
  let table = props.table
  mergeObject(table, {
    single: true
  })
  state.noAdd = !table.columns.some(e => e.type == 'row-add')
  if (!state.noAdd) {
    props.table.data.push(newItem())
  }
}
init()

function rowAdd(index: number) {
  props.table.data.splice(index + 1, 0, newItem())
}

function rowDel(index: number) {
  let data = props.table.data
  data.splice(index, 1)
  if (data==null || (data && data.length < 1)) {
    data.push(newItem())
  }
}

// <-

const total = computed(() => props.table.total || (props.table.data && props.table.data.length))

const windowHeight = ref(props.maxHeight)

const setWindowHeight = () => {
  windowHeight.value = window.innerHeight - 300
}

function resize() {
  setWindowHeight()
}
onMounted(() => {
  
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

const formRef = ref<FormInstance>()

// 提交校验
function validate(callback: (vaild: boolean, fields: any) => void) {
  formRef.value?.validate((valid, fields) => {
    callback(valid, fields)
  })
}

defineExpose({
  reload,
  validate: validate
})
</script>
<style lang="scss">
.u-table {
  .el-table .cell {
    display: flex;
    align-items: center;
    .row-content {
      min-height: 23px;
      width: 100%;
    }
  }
}
</style>
<style lang="scss" scoped>
.el-table {
  margin-bottom: 10px;
}
</style>

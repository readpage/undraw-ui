<template>
  <div class="u-crud">
    <div v-show="searchVisible">
      <slot name="query"></slot>
    </div>
    <div ref="toolRef" class="tool">
      <div>
        <el-button v-if="crud.save" class="u-small" type="primary" @click="save">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"></path></svg>
          </template>
          新增
        </el-button>
        <el-button
          v-if="crud.update"
          class="u-small"
          :disabled="state.selections?.length != 1"
          type="success"
          @click="update(state.selections[0])"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"></path></svg>
          </template>
          修改
        </el-button>
        <el-button
          v-if="crud.remove"
          class="u-small"
          :loading="btnLoading"
          :disabled="state.selections?.length == 0"
          type="danger"
          @click="remove(state.selections)"
        >
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></svg>
          </template>
          删除
        </el-button>
        <slot name="tool"></slot>
      </div>
      <div>
        <el-tooltip v-if="$slots.search" :content="searchVisible ? '隐藏搜索' : '显示搜索'" placement="top">
          <el-button size="small" circle @click="searchVisible = !searchVisible">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path></svg>
            </template>
          </el-button>
        </el-tooltip>
        <el-tooltip content="刷新" placement="top">
          <el-button size="small" circle @click="refresh">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"></path></svg>
            </template>
          </el-button>
        </el-tooltip>
      </div>
    </div>
    <u-table
      ref="tableRef"
      :table="table"
      :max-height="maxHeight"
      @on-selection="val => (state.selections = val)"
      @input-blur="val => $emit('inputBlur', val)"
    >
      <template v-for="(item, index) in table.columns" :key="index" #[`table-${item.prop}`]="v">
        <slot :name="`table-${item.prop}`" v-bind="v"></slot>
      </template>
    </u-table>
    <u-dialog v-model="visible.form" :title="state.title">
      <u-group v-if="form" ref="groupRef" :form="form">
        <template v-for="(item, index) in form.items" :key="index" #[`form-${item.prop}`]="v">
          <slot v-if="!item.component" :name="`form-${item.prop}`" v-bind="v" />
        </template>
      </u-group>
      <template #footer>
        <div style="width: 100%; display: flex; justify-content: flex-end">
          <el-button @click="visible.form = false">取消</el-button>
          <el-button type="primary" :loading="state.btnLoading" @click="submit()">确定</el-button>
        </div>
      </template>
    </u-dialog>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, provide, reactive, ref } from 'vue'
import { UGroup, UTable, UDialog, FormApi, TableApi } from 'undraw-ui'
import { ElMessageBox, ElButton, ElTooltip } from 'element-plus'
import { cloneDeep } from '~/util'

defineOptions({
  name: 'UCrud'
})

export interface CrudApi {
  save?: (val: any, finish: () => void) => void // 添加
  update?: (val: any, finish: () => void) => void // 修改
  remove?: (val: any[], finish: () => void) => void // 删除
}

interface Props {
  table: TableApi
  crud: CrudApi
  form?: FormApi
  maxHeight?: number | string
}

const props = withDefaults(defineProps<Props>(), {})

const searchVisible = ref(true)
const btnLoading = ref(false)
const state = reactive({
  selections: [] as any[],
  btnLoading: false,
  title: ''
})

const visible = reactive({
  form: false
})

const tableRef = ref<InstanceType<typeof UTable>>()
const groupRef = ref()

const emit = defineEmits<{
  inputBlur: [val: any]
}>()

function save() {
  state.title = '新增'
  visible.form = true
  nextTick(() => {
    groupRef.value.resetFields()
  })
}

const update = (val: any) => {
  state.title = '修改'
  visible.form = true
  nextTick(() => {
    groupRef.value.resetFields()
    props.form!.data = cloneDeep(val)
  })
}

function edit(val: any) {
  update(val)
}
provide('edit', edit)

const remove = (val: any[]) => {
  ElMessageBox.confirm('你确定要删除吗？', '系统提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true
  }).then(() => {
    if (props.crud.remove) {
      props.crud.remove(val, refresh)
    }
  })
}

function submit() {
  groupRef.value.validate((valid: boolean) => {
    if (valid) {
      let crud = props.crud
      if (state.title == '新增') {
        crud.save && crud.save(props.form?.data, refresh)
      } else if (state.title == '修改') {
        crud.update && crud.update(props.form?.data, refresh)
      }
    }
  })
}

const refresh = () => {
  visible.form = false
  tableRef.value?.reload()
}

const toolRef = ref()
const tableHeight = ref()

provide('u-crud', props.crud)
onMounted(() => {
  tableHeight.value = toolRef.value.clientHeight
})

defineExpose({
  refresh
})
</script>

<style lang="scss" scoped>
.u-crud {
  height: 100%;
  padding: 10px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .tool {
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
  }
  .u-table {
    flex: 1;
  }
}
</style>
<style>
.u-small {
  height: 28px !important;
  padding: 5px 11px !important;
  font-size: 12px !important;
  border-radius: calc(var(--el-border-radius-base) - 1px) !important;
}
</style>

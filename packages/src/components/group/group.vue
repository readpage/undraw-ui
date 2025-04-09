<template>
  <el-tabs class="u-group" v-if="form.group && form.group.type == 'tabs'" v-model="form.group.value">
    <template v-for="(label, index) in form.group.labels" :key="index">
      <el-tab-pane :label="label" :name="label">
        <u-form ref="formRef" :form="form">
          <template v-for="(item, index) in form.items" :key="index" #[`form-${item.prop}`]="v">
            <slot v-if="!item.component" :name="`form-${item.prop}`" v-bind="v" />
          </template>
        </u-form>
      </el-tab-pane>
    </template>
  </el-tabs>
  <template v-else-if="form.group && form.group.type == 'collapse'">
    <template v-for="(label, index) in form.group.labels" :key="index">
      <Collapse :label="label">
        <u-form ref="formRef" :group="label" :form="form" style="margin-top: 10px">
          <template v-for="(item, index) in form.items" :key="index" #[`form-${item.prop}`]="v">
            <slot v-if="!item.component" :name="`form-${item.prop}`" v-bind="v" />
          </template>
        </u-form>
      </Collapse>
    </template>
  </template>
  <template v-else>
    <u-form ref="formRef" :form="form">
      <template v-for="(item, index) in form.items" :key="index" #[`form-${item.prop}`]="v">
        <slot v-if="!item.component" :name="`form-${item.prop}`" v-bind="v" />
      </template>
    </u-form>
  </template>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { FormApi, UForm } from 'undraw-ui'
import { ElTabs, ElTabPane } from 'element-plus'
import Collapse from './collapse.vue'
import { nextTick } from 'vue'

defineOptions({
  name: 'UGroup'
})

interface Props {
  form: FormApi
}

const formRef = ref([] as any[])

const props = defineProps<Props>()

// 提交校验
function validate(callback: (vaild: boolean, fields: any) => void) {
  ;(formRef.value[0] || formRef.value).validate((valid: boolean, fields: any) => {
    if (fields) {
      const [key] = Object.entries(fields)[0]
      let form = props.form
      let item = form.items.find(e => e.prop == key)
      form.group!.value = item?.group
    }
    callback(valid, fields)
  })
}

function init() {
  let group = props.form.group
  if (group && !group.value) {
    group.value = group.labels[0]
  }
}
init()

function resetFields() {
  ;(formRef.value[0] || formRef.value).resetFields()
  let group = props.form.group
  if (group) {
    group.value = group.labels[0]
  }
}

defineExpose({
  validate: validate,
  resetFields: resetFields,
})
</script>

<style lang="scss">
.u-group {
  .el-tabs__content {
    overflow: unset;
  }
}
</style>

<template>
  <el-autocomplete v-model="value" ref="autocompleteRef" clearable :fetch-suggestions="remoteSearch" :placeholder="placeholder" @select="onSelect"/>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { ElAutocomplete } from 'element-plus'
import { isEmpty } from 'undraw-ui';

defineOptions({
  name: 'USearch2'
})

interface Props {
  modelValue: string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '请输入关键词'
})

const loading = ref(true)
const autocompleteRef = ref()

const emit = defineEmits<{
  remoteSearch: [val: string, done: (arg: any) => void]
  'update:modelValue': [val: string]
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

watch(
  () => value.value,
  (newVal, oldVal) => {
    if (isEmpty(newVal) && !isEmpty(oldVal)) {
      keywords.value = []
      loading.value = true
    }
    if (autocompleteRef.value.activated) {
      loading.value = true
    }
  }
)

let keywords = ref<any[]>([])
function remoteSearch(queryString: string, cb: (arg: any[]) => void) {
  if (loading.value) {
    emit('remoteSearch', queryString, (arg: any[]) => {
      if (arg) {
        keywords.value = arg.map(e => ({ label: e.label || e, value: e.value || e }))
      }
      cb(keywords.value)
      loading.value = false
    })
  } else {
    cb(keywords.value)
  }
}

function onSelect(item: Record<string, any>) {
  keywords.value = [item]
}
</script>

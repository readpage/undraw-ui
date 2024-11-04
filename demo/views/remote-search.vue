<template>
  <el-autocomplete v-model="value" ref="autocompleteRef" clearable :fetch-suggestions="remoteSearch" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'

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
    loading.value = true
  }
)

const remoteSearch = (queryString: string, cb: (arg: any[]) => void) => {
  if (loading.value) {
    emit('remoteSearch', queryString, (arg: any[]) => {
      if(arg) {
        arg = arg.map(e => ({label: e.label || e, value: e.value || e}))
      }
      cb(arg)
      loading.value = false
    })
  } else {
    cb(autocompleteRef.value.suggestions)
  }
}

</script>

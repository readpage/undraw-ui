<template>
  <el-autocomplete v-model="value" ref="autocompleteRef" clearable :fetch-suggestions="remoteSearch" :placeholder="placeholder" @select="onSelect" @blur="event => emit('blur', event)" @focus="event => emit('focus', event)" />
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { AutocompleteInstance, ElAutocomplete } from 'element-plus'
import { debounce, isEmpty, str } from 'undraw-ui'

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
const autocompleteRef = ref<AutocompleteInstance>()

const emit = defineEmits<{
  remoteSearch: [val: string, done: (arg: any) => void]
  'update:modelValue': [val: string]
  select: [item: any]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
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
    if (autocompleteRef.value?.activated) {
      loading.value = true
    }
  }
)

let keywords = ref<any[]>([])
const remoteSearch = (queryString: string, cb: (arg: any[]) => void) => {
  if (loading.value || isEmpty(keywords.value)) {
    emit('remoteSearch', queryString, (arg: any[]) => {
      if (arg) {
        keywords.value = arg.map(e => {
          if (e.value == undefined) {
            return { value: e }
          }
          return e
        })
      }
      cb(keywords.value)
      loading.value = false
    })
  } else {
    cb(keywords.value)
  }
}

function onSelect(item: any) {
  keywords.value = [item]
  emit('select', item)
}

defineExpose({
  blur: () => autocompleteRef.value?.blur(),
  focus: () => autocompleteRef.value?.focus()
})
</script>

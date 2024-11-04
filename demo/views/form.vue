<template>
  <u-form  ref="formRef" :form="form">
    <template #form-role="{ item, data }">
      <el-radio-group v-model="data.role">
        <el-radio value="用户" size="small">用户</el-radio>
        <el-radio value="管理员" size="small">管理员</el-radio>
      </el-radio-group>
    </template>
    <div class="submit">
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
  </u-form>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FormApi } from '~/components'
import { Time } from '~/util'

const form = reactive<FormApi>({
  data: {},
  items: [
    {
      label: '用户名',
      prop: 'username',
      width: 300,
      required: true,
      component: {
        name: 'el-input',
        disabled: true
      }
    },
    {
      label: '性别',
      prop: 'sex',
      value: '',
      rule: [{ required: true, message: '性别不能为空', trigger: 'blur' }],
      component: {
        name: 'el-select',
        width: 250,
        options: ['男', '女']
      }
    },
    {
      label: '角色',
      prop: 'role',
      value: '用户',
      group: '详细信息'
    },
    {
      label: '年龄',
      prop: 'age',
      value: 0,
      component: {
        name: 'el-input'
      }
    },
    {
      label: '日期',
      prop: 'date',
      value: new Time().value,
      component: {
        name: 'el-date'
      }
    },
    {
      label: '关键词',
      prop: 'search',
      value: '',
      component: {
        name: 'u-search2',
        remoteSearch: (val: string, done: (arg: any[]) => void) => {
          setTimeout(() => {
            done(states.filter(e => e.toLowerCase().includes(val.toLowerCase())))
          }, 200)
        }
      }
    }
  ]
})

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]

const formRef = ref()

function reset() {
  formRef.value.resetFields()
}

async function submit() {
  formRef.value.validate((valid: boolean) => {
    if (valid) {
      console.log(form.data)
    } else {
      console.log(valid)
    }
  })
}
</script>

<style lang="scss" scoped>

.u-form {
  :deep(.el-form) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .form-role {
      grid-column: 1 / -1;
    }
    .submit {
      grid-column: 1 / -1;
      margin-left: 80px;
    }
  }
}

</style>

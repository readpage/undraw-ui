<template>
  <div>
    <el-popover v-if="isUserInfo" placement="top" :width="300" :show-after="300" @show="show">
      <slot name="userInfo"></slot>
      <template #reference>
        <slot></slot>
      </template>
    </el-popover>
    <slot v-else></slot>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { ContentBoxParam, InjectionContentBox } from '~/components'
import { ElPopover } from '~/element'

interface Props {
  isUserInfo: boolean
  uid: string
}

const props = defineProps<Props>()
const { getUser } = inject(InjectionContentBox) as ContentBoxParam
const show = () => {
  getUser(props.uid, () => {})
}
</script>

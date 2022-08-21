<template>
  <div>
    <el-popover v-if="isUserInfo" placement="top" :width="300">
      <slot name="userInfo"></slot>
      <template #reference>
        <slot></slot>
      </template>
    </el-popover>
    <slot v-else></slot>
  </div>
</template>

<script setup lang="ts">
import { ElPopover } from '~/element'

interface Props {
  isUserInfo: boolean
}

const props = defineProps<Props>()
</script>

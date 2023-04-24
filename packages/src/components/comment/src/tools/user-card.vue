<template>
  <el-popover
    v-if="slots.card"
    placement="top"
    :width="300"
    :show-after="300"
    @before-enter="() => showInfo(uid, (v: any) => (userInfo = v))"
  >
    <Card />
    <template #reference>
      <slot></slot>
    </template>
  </el-popover>
  <template v-else>
    <slot />
  </template>
</template>

<script setup lang="ts">
import { h, inject, ref } from 'vue'
import { ElPopover } from '~/element/popover'

import { } from '~/index'

import { InjectContentBox, InjectContentBoxApi, InjectSlots } from '../../key'

interface Props {
  uid: string
}

const props = defineProps<Props>()

const userInfo = ref({})

const { showInfo } = inject(InjectContentBox) as InjectContentBoxApi

//工具slots
const slots = inject(InjectSlots) as any
const Card = () => h('div', slots.card(userInfo.value))
</script>

<style lang="scss" scoped></style>

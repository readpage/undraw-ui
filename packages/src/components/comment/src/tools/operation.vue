<template>
  <el-popover v-if="tools" ref="popoverRef" placement="bottom-end" popper-class="operatoin-popover" trigger="click">
    <ul class="operation-list select-none">
      <template v-for="(v, i) in tools" :key="i">
        <template v-if="v.split('#')[1]">
          <li
            v-if="
              (comment.uid == user.id && v.split('#')[1] == '1') || (v.split('#')[1] == '2' && comment.uid != user.id)
            "
            :class="{ active: active }"
            class="operation-option"
            @click="report(v.split('#')[0])"
          >
            <span>{{ v.split('#')[0] }}</span>
          </li>
        </template>
        <li v-else :class="{ active: active }" class="operation-option" @click="report(v.split('#')[0])">
          <span>{{ v }}</span>
        </li>
      </template>
    </ul>
    <template #reference>
      <div class="operation-warp">
        <u-icon>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M586.624 234.624a74.624 74.624 0 1 1-149.184 0 74.624 74.624 0 0 1 149.12 0z m0 554.624a74.624 74.624 0 1 1-149.248 0 74.624 74.624 0 0 1 149.248 0zM512 586.624a74.624 74.624 0 1 0 0-149.248 74.624 74.624 0 0 0 0 149.248z"
              fill="currentColor"
            ></path>
          </svg>
        </u-icon>
      </div>
    </template>
  </el-popover>
</template>
<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { ElPopover } from '~/element/popover'
import { CommentApi } from '~/components'
import { InjectOperation, InjectOperationApi } from '../../key'

interface Props {
  comment: CommentApi
}

const props = defineProps<Props>()
// 是否可以点击
const active = ref(false)
const popoverRef = ref()

const { user, tools, operate } = inject(InjectOperation) as InjectOperationApi

/**
 * 工具栏点击事件
 * @param type 功能类型
 */
const report = (type: string) => {
  close()
  operate(type, props.comment, () => {})
}
/**
 * 隐藏操作栏
 */
const close = () => {
  popoverRef.value?.hide()
}
</script>

<style lang="scss">
.el-popover.operatoin-popover {
  padding: 0px !important;
  width: 90px !important;
  min-width: 90px !important;
}
</style>
<style lang="scss" scoped>
.active {
  pointer-events: none;
}
.operation-list {
  padding: 5px 0;
  margin: 0;
  list-style: none;
  .operation-option {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 32px;
    cursor: pointer;

    .u-icon {
      margin-right: 5px;
    }

    &:hover {
      background: var(--el-color-primary-light-9);
      color: var(--el-color-primary);
    }
  }
}
.operation-warp {
  position: absolute;
  right: 0;
  font-size: 16px;
  color: #9499a0;
  cursor: pointer;
}
.operation-warp:hover {
  color: #00aeec;
}

.action-operation {
  display: block;
}
</style>

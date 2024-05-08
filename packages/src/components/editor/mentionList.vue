<template>
  <ul
    v-show="isShow"
    ref="mentionList"
    class="mention-list"
    tabindex="0"
    :style="`left: ${position.left}px; top: ${position.top}px`"
    @keydown.up.prevent="moveSelection(-1)"
    @keydown.down.prevent="moveSelection(1)"
    @keydown.enter.prevent="printSelectedItem"
  >
    <el-scrollbar ref="scrollbarRef" style="padding: 10px">
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ hover: index === selectedIndex }"
        @click="clickSelectedItem(index)"
      >
        <slot name="user" :item="item" :index="index">
          <div class="userInfo">
            <img v-if="showAvatar" :src="item.userAvatar" width="30" class="avatar" />
            <span class="username">{{ item.userName }}</span>
          </div>
        </slot>
      </li>
      <div v-show="!list.length" class="empty">
        <el-empty description="暂无匹配数据" />
      </div>
    </el-scrollbar>
  </ul>
</template>

<script setup lang="ts">
import { ElScrollbar, ElEmpty } from 'element-plus'
import { nextTick, onMounted, ref, watch } from 'vue'
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
interface Props {
  isShow: boolean
  position?: {
    left: number
    top: number
  }
  list: any[]
  showAvatar?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isShow: false,
  position: () => ({
    left: 0,
    top: 0
  }),
  list: () => [],
  showAvatar: true
})

const selectedIndex = ref(-1)
const mentionList = ref<HTMLElement | null>(null)
const moveSelection = (step: number) => {
  selectedIndex.value += step
  if (selectedIndex.value < 0) {
    selectedIndex.value = props.list.length - 1 // 如果超出上边界，跳到最后一个
  } else if (selectedIndex.value >= props.list.length) {
    selectedIndex.value = 0 // 如果超出下边界，跳到第一个
  }
  // 如果选中的图标不在当前的视口范围内 那么就滚动到选中的item的位置

  if (scrollbarRef.value) {
    const item = (scrollbarRef.value as any).wrapRef.children[0].children[selectedIndex.value] as HTMLElement
    if (item) {
      const h = (scrollbarRef.value as any).wrapRef.offsetHeight || 0
      scrollbarRef.value?.setScrollTop((selectedIndex.value - h / item.offsetHeight + 1) * item.offsetHeight)
    }
  }
}
const printSelectedItem = () => {
  if (selectedIndex.value >= 0 && selectedIndex.value < props.list.length) {
    return props.list[selectedIndex.value]
  }
}
const clickSelectedItem = (index: number) => {
  selectedIndex.value = index
  emit('insert', props.list[selectedIndex.value])
  emit('changeShow', false)
}
watch(
  () => props.isShow,
  val => {
    if (val) {
      selectedIndex.value = 0
      // console.log('获取焦点', scrollbarRef.value)
      // 显示的时候，让滚动条滚到第一个
      nextTick(() => {
        if (scrollbarRef.value) {
          scrollbarRef.value.setScrollTop(0)
        }
      })
    }
  }
)
const emit = defineEmits(['insert', 'changeShow'])
const resetSelectIndex = () => {
  selectedIndex.value = 0
}

onMounted(() => {
  mentionList.value?.focus()
})

defineExpose({
  moveSelection,
  printSelectedItem,
  resetSelectIndex
})
</script>

<style scoped lang="scss">
.mention-list {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 150px;
  max-height: 200px;
  background-color: #fff;
  list-style: none;
  font-size: 14px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 9999;
  .empty {
    height: 150px;
    padding: 0;
    .el-empty {
      padding: 0;
    }
    :deep(.el-empty__image) {
      width: 100px;
    }
  }
  .el-scrollbar {
    flex: 1; /* 新增 */
    display: flex;
    flex-direction: column;
    .el-scrollbar__wrap {
      flex: 1;
    }
  }
  &:focus {
    outline: none;
  }
  li {
    background-color: #ffffff;
    border-radius: 3px;
    line-height: 30px;
    &.hover {
      background-color: #f3f4f5;
    }
    &.active {
      background-color: #e6f7ff;
    }
    .userInfo {
      cursor: pointer;
      display: flex;
      align-items: center;
      color: #606266;
      .avatar {
        margin-right: 10px;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        object-fit: cover;
      }
      span {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
      }
    }
  }
}
</style>

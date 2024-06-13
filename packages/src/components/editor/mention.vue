<template>
  <ul ref="mentionRef" class="mention-list">
    <el-scrollbar ref="scrollbarRef">
      <li v-for="(item, index) in data" :key="index" :class="{ hover: index === selectedIndex }" @click="clickSelectedItem(index)">
        <slot name="mention-user" :item="item" :index="index">
          <div class="userInfo">
            <img v-if="showAvatar" :src="item[$props.alias.avatar]" width="30" class="avatar" />
            <span class="username">{{ item[$props.alias.username] }}</span>
          </div>
        </slot>
      </li>
      <div v-show="!(data && data.length)" class="empty">
        <el-empty description="暂无匹配数据" />
      </div>
    </el-scrollbar>
  </ul>
</template>
<script setup lang="ts">
import { ElScrollbar, ElEmpty } from 'element-plus'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
export interface MentionApi {
  target?: string
  data?:
    | any[]
    | {
        id: string | number
        username: string
        avatar: string
      }[]
  alias?: any
  showAvatar?: boolean
  showMention?: boolean
}
const props = withDefaults(defineProps<MentionApi>(), {})
const target = computed(() => document.querySelector(props.target || '.u-editor') as HTMLElement)

const mentionRef = ref<HTMLElement>()
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const selectedIndex = ref(0)

const emit = defineEmits<{
  (e: 'insert', val: any): void
}>()

watch(
  () => props.showMention,
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

// 提及窗口位置
function setPosition() {
  let rect = getRange()?.getBoundingClientRect()
  let editor = target.value?.getBoundingClientRect()

  // 设置弹出层的位置
  let mention = mentionRef.value
  if (mention && rect && editor) {
    mention.style.top = `${rect.top - editor.top}px`
    mention.style.left = `${rect.left - editor.left}px`
  }
}

// 获取光标
function getRange() {
  try {
    return window.getSelection()?.getRangeAt(0)
  } catch (e) {
    console.log('光标丢失了!')
    return undefined
  }
}

const moveSelection = (step: number) => {
  selectedIndex.value += step
  if (props.data) {
    if (selectedIndex.value < 0) {
      selectedIndex.value = props.data.length - 1 // 如果超出上边界，跳到最后一个
    } else if (selectedIndex.value >= props.data.length) {
      selectedIndex.value = 0 // 如果超出下边界，跳到第一个
    }
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

const clickSelectedItem = (index: number) => {
  selectedIndex.value = index
  if (props.data) {
    emit('insert', props.data[selectedIndex.value])
  }
}

function getSelectItem() {
  return props.data && props.data[selectedIndex.value]
}

function onInput(event: Event) {
  setPosition()
}

onMounted(() => {
  target.value?.addEventListener('input', onInput)
})

onUnmounted(() => {
  target.value?.removeEventListener('input', onInput)
})

defineExpose({
  moveSelection,
  getSelectItem
})
</script>

<style lang="scss" scoped>
.mention-list {
  position: absolute;
  left: 30px;
  top: 20px;
  flex-direction: column;
  width: 150px;
  height: 240px;
  contain: layout;
  list-style: none;
  background-color: #fff;
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
    padding: 5px 10px;
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

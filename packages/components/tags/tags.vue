<template>
  <div class="u-tabs">
    <el-scrollbar ref="scrollbarRef">
      <ul :class="{ 'classic-style': classic }" class="u-tabs-ul">
        <li
          v-for="(v, k) in modelValue"
          :key="k"
          :class="{ 'is-active': active == k }"
          class="u-tabs-ul-li"
          @click="active = k"
          @contextmenu.prevent="onContextmenu(v, $event)"
        >
          <span class="select-none">{{ v.title }}</span>
          <u-icon v-if="!v.isAffix" @click.stop="close(k)">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
              ></path>
            </svg>
          </u-icon>
        </li>
      </ul>
    </el-scrollbar>
    <ContextMenu ref="contextmenuRef" :dropdown="dropdown" @submit="onSubmit" />
  </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, reactive, ref, toRef, watch } from 'vue'
import ContextMenu from './context-menu.vue'
import Sortable from 'sortablejs'
import { getBrowser } from '~/util'
import { ElScrollbar } from '~/element'
import { TagApi } from '.'

defineOptions({
  name: 'UTags'
})

interface Props {
  classic?: boolean
  modelValue: TagApi[]
}

const props = defineProps<Props>()

const scrollbarRef = ref()
const contextmenuRef = ref()
const tagsList = toRef(props, 'modelValue')
const active = ref(0)
const dropdown = reactive({
  x: 0,
  y: 0
})

const emit = defineEmits<{
  (e: 'select', val: TagApi | undefined): void
  (e: 'refresh'): void
  (e: 'fullScreen'): void
}>()

watch(
  () => [...tagsList.value],
  (val, oldVal) => {
    let index = val.findIndex(v => !oldVal.includes(v))
    if (index != -1) {
      active.value = index
    }
    nextTick(() => {
      scrollbarRef.value.update()
    })
  }
)

watch(
  () => active.value,
  val => {
    emit(
      'select',
      tagsList.value.find((v, k) => k == val)
    )
  }
)

const close = (val: number) => {
  tagsList.value.map((v, k) => {
    if (!v.isAffix && val == k) {
      tagsList.value.splice(k, 1)
      if (k == active.value) {
        let arr = [k, k - 1]
        let indexs = arr.filter(v => v >= 0 && v < tagsList.value.length)
        active.value = indexs[0]
      } else if (val < active.value) {
        active.value -= 1
      }
    }
  })
}

const closeOther = (val?: TagApi) => {
  let newList = tagsList.value.filter(v => v.isAffix)
  if (val && !val.isAffix) {
    newList.push(val)
  }
  tagsList.value.length = 0
  tagsList.value.push(...newList)
  let target = tagsList.value.length - 1
  active.value = target >= 0 ? target : 0
}

const onSubmit = (val: number, tag: TagApi) => {
  switch (val) {
    case 0:
      // 刷新当前
      emit('refresh')
      break
    case 1:
      // 关闭当前
      let index = tagsList.value.findIndex(v => v.path == tag.path)
      close(index)
      break
    case 2:
      // 关闭其他
      closeOther(tag)
      break
    case 3:
      // 全部关闭
      closeOther()
      break
    case 4:
      // 全屏
      emit('fullScreen')
      break
  }
}

const onContextmenu = (v: TagApi, e: MouseEvent) => {
  const { clientX, clientY } = e
  dropdown.x = clientX
  dropdown.y = clientY
  contextmenuRef.value.openContextmenu(v)
}

let sortable: Sortable | null = null

const initSortable = () => {
  const el = document.querySelector('.u-tabs-ul') as HTMLElement
  sortable = Sortable.create(el, {
    animation: 300
  })
}

const onSortableResize = () => {
  if (getBrowser().isMobile) {
    if (sortable) {
      sortable.destroy()
    }
  } else {
    initSortable()
  }
}

onMounted(() => {
  initSortable()
  onSortableResize()
  window.addEventListener('resize', onSortableResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onSortableResize)
})
</script>

<style lang="scss" scoped>
.u-tabs {
  &-ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 34px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: var(--el-text-color-regular);
    // 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
    white-space: nowrap;
    padding: 0 15px;
    &-li {
      box-sizing: border-box;
      height: 26px;
      line-height: 26px;
      display: flex;
      align-items: center;
      border: 1px solid #e6e6e6;
      padding: 0 15px;
      margin-right: 5px;
      border-radius: 2px;
      position: relative;
      cursor: pointer;
      justify-content: space-between;
      &:hover {
        background-color: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
        border-color: var(--el-color-primary-light-6);
      }
      .u-icon {
        position: relative;
        right: -5px;
        height: 14px;
        width: 14px;
        text-align: center;
        line-height: 14px;
        font-size: 14px !important;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: var(--el-color-white);
          background-color: var(--el-color-primary-light-3);
        }
      }
    }
    .is-active {
      color: var(--el-color-white);
      background: var(--el-color-primary);
      border-color: var(--el-color-primary);
      transition: border-color 3s ease;
    }
  }

  .classic-style {
    align-items: flex-end;
    .classic-style-svg {
      -webkit-mask-box-image: url("data:image/svg+xml,%3Csvg width='68' height='34' viewBox='0 0 68 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m27,0c-7.99582,0 -11.95105,0.00205 -12,12l0,6c0,8.284 -0.48549,16.49691 -8.76949,16.49691l54.37857,-0.11145c-8.284,0 -8.60908,-8.10146 -8.60908,-16.38546l0,-6c0.11145,-12.08445 -4.38441,-12 -12,-12l-13,0z' fill='%23409eff'/%3E%3C/svg%3E")
        12 27 15;
    }
    .u-tabs-ul-li {
      padding: 0 5px;
      border-width: 15px 27px 15px;
      border-style: solid;
      border-color: transparent;
      margin: 0 -15px;
      &:hover {
        @extend .classic-style-svg;
        background: var(--el-color-primary-light-9);
        color: unset;
      }
    }
    .is-active {
      @extend .classic-style-svg;
      background: var(--el-color-primary-light-9);
      color: var(--el-color-primary) !important;
    }
  }
}
</style>

<template>
  <div class="u-tabs">
    <el-scrollbar>
      <ul :class="{ 'classic-style': classic }" class="u-tabs-ul">
        <li v-for="(v, k) in tabsList" :key="k" :class="{ 'is-active': k == 0 }" class="u-tabs-ul-li">
          <span class="user-select">{{ v }}</span>
          <u-icon>
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
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Sortable from 'sortablejs'

defineOptions({
  name: 'UTabs'
})

interface Props {
  classic?: boolean
}

const props = defineProps<Props>()

const tabsList = ref<any[]>(['首页', '用户管理', '角色管理', '其他xxxxxxxxxxxx'])

onMounted(() => {
  const el = <HTMLElement>document.querySelector('.u-tabs-ul')
  console.log(el)
  const sortable = Sortable.create(el)
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
      color: var(--el-color-primary);
    }
  }
}
</style>

<template>
  <div class="u-collapse">
    <div class="u-collapse__header" @click="() => (state.visible = !state.visible)">
      <span>{{ props.label }}</span>
      <u-icon>
        <svg v-show="state.visible" data-v-93814279="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style=""><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg>
        <svg v-show="!state.visible" data-v-93814279="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style=""><path fill="currentColor" d="m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"></path></svg>
      </u-icon>
    </div>
    <div class="u-collapse__container" :class="{ 'is-fold': !state.visible }">
      <div class="child"><slot /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { UIcon } from 'undraw-ui'

interface Props {
  label: string // 标题
  unfold?: boolean // 是否能展开、收起
}

const props = withDefaults(defineProps<Props>(), {
  unfold: true
})

const state = reactive({
  visible: props.unfold
})
</script>

<style lang="scss" scoped>
.u-collapse {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    height: 32px;
    line-height: normal;
    font-weight: 700;
    padding: 0 10px;
    background-color: #f2f6fc;
    color: #606266;
    border-radius: 4px;
    cursor: pointer;
  }
  &__container {
    display: grid;
    grid-template-rows: 1fr;
    transition: all 0.3s;
    &.is-fold {
      grid-template-rows: 0fr;
    }
    .child {
      overflow-y: auto;
      min-height: 0;
    }
  }
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 6px; /*滚动条宽度*/
  height: 6px; /*滚动条高度*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-track {
  background-color: rgba(73, 177, 245, 0.2);
  border-radius: 2em;
}

::-webkit-scrollbar-thumb {
  background-color: #49b1f5;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.4) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.4) 75%,
    transparent 75%,
    transparent
  );
  border-radius: 2em;
}
</style>

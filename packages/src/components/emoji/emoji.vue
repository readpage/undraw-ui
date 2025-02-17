<template>
  <el-popover :placement="placement" :width="250" popper-class="emoji-popover" trigger="click" @show="show">
    <div v-if="emoji.faceList.length > 1" class="face-tooltip-head select-none">
      <label
        v-for="(item, index) in emoji.faceList"
        :key="index"
        :class="state.activeIndex == index ? 'active' : ''"
        @click="change(index)"
      >
        <span v-if="item.type == 'emoji'">{{ item.label }}</span>
        <img v-else :src="item.label" alt="" />
      </label>
    </div>
    <div class="emoji-body select-none">
      <div class="emoji-container">
        <el-scrollbar ref="scrollbarRef">
          <div class="emoji-wrapper">
            <div
              v-for="(item, index) in emoji.emojiList[state.activeIndex]"
              :key="index"
              class="emoji-item"
              @click="$emit('addEmoji', item.label)"
            >
              <div class="emoji emoji2" v-if="item.type == 'emoji'">{{ item.label }}</div>
              <el-image v-else :src="item.value" :title="item.label" class="emoji" lazy></el-image>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <template #reference>
      <div class="emoji-btn select-none">
        <div v-if="!$slots.default">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
            <path
              data-v-9fe533ba=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.00002 0.666504C12.0501 0.666504 15.3334 3.94975 15.3334 7.99984C15.3334 12.0499 12.0501 15.3332 8.00002 15.3332C3.94993 15.3332 0.666687 12.0499 0.666687 7.99984C0.666687 3.94975 3.94993 0.666504 8.00002 0.666504ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.6667 5.66667V7.66667H9.33333V5.66667H10.6667ZM6.66667 5.66667V7.66667H5.33333V5.66667H6.66667ZM10.0767 9.33333H11.0495C11.1804 9.33333 11.2866 9.43951 11.2866 9.57048C11.2866 9.60754 11.2779 9.64409 11.2612 9.67718L11.244 9.71053C10.6294 10.8739 9.40726 11.6667 7.99998 11.6667C6.61523 11.6667 5.40977 10.8991 4.7859 9.76612L4.73786 9.67593C4.67845 9.56052 4.72385 9.4188 4.83926 9.35939C4.87253 9.34226 4.90941 9.33333 4.94683 9.33333H5.92347C6.02396 9.33332 6.11908 9.37865 6.18238 9.4567C6.26207 9.55496 6.32833 9.62955 6.38117 9.68046C6.80074 10.0847 7.37133 10.3333 7.99998 10.3333C8.63289 10.3333 9.20694 10.0814 9.62728 9.67224C9.67791 9.62296 9.74135 9.55121 9.8176 9.45698C9.88089 9.37877 9.97611 9.33333 10.0767 9.33333Z"
            ></path>
          </svg>
          <span>{{ $u('emoji.content') }}</span>
        </div>
        <slot v-else></slot>
      </div>
    </template>
  </el-popover>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElPopover, ElScrollbar, ElImage } from 'element-plus'
import { translate as $u } from 'undraw-ui'

interface ItemApi {
  type?: 'emoji' | 'img'
  label: string
  value?: string
}

export interface EmojiApi {
  faceList: ItemApi[]
  emojiList: ItemApi[][]
  allEmoji?: any
  activeIndex: number
}

interface Props {
  emoji?: EmojiApi
  placement?: any
}

const scrollbarRef = ref()

defineOptions({
  name: 'UEmoji'
})

const props = withDefaults(defineProps<Props>(), {
  placement: 'bottom',
  emoji: () => ({
    faceList: [{ type: 'emoji', label: '😀' }],
    emojiList: [
      [
        { type: 'emoji', label: '😀' },
        { type: 'emoji', label: '😂' },
        { type: 'emoji', label: '😮' },
        { type: 'emoji', label: '😍' },
        { type: 'emoji', label: '😘' },
        { type: 'emoji', label: '😚' },
        { type: 'emoji', label: '🤩' },
        { type: 'emoji', label: '🥰' },
        { type: 'emoji', label: '😋' },
        { type: 'emoji', label: '😛' },
        { type: 'emoji', label: '😜' },
        { type: 'emoji', label: '😝' },
        { type: 'emoji', label: '🤑' },
        { type: 'emoji', label: '🤪' },
        { type: 'emoji', label: '🤔' },
        { type: 'emoji', label: '🤗' },
        { type: 'emoji', label: '🤫' },
        { type: 'emoji', label: '🤭' },
        { type: 'emoji', label: '😏' },
        { type: 'emoji', label: '🙄' },
        { type: 'emoji', label: '😐' },
        { type: 'emoji', label: '😑' },
        { type: 'emoji', label: '😒' },
        { type: 'emoji', label: '😌' },
        { type: 'emoji', label: '😴' },
        { type: 'emoji', label: '😵' },
        { type: 'emoji', label: '😷' },
        { type: 'emoji', label: '🤕' },
        { type: 'emoji', label: '😷' },
        { type: 'emoji', label: '🤢' },
        { type: 'emoji', label: '🤠' },
        { type: 'emoji', label: '😎' },
        { type: 'emoji', label: '😱' },
        { type: 'emoji', label: '🥺' },
        { type: 'emoji', label: '😡' }
      ]
    ],
    activeIndex: 0
  }),
})

const state = reactive({
  activeIndex: props.emoji.activeIndex
})

function change(val: number) {
  state.activeIndex = val
}

function show() {
  scrollbarRef.value.setScrollTop(1)
}

</script>

<style lang="scss">
.emoji-popover {
  padding: 6px 0 !important;
}
</style>

<style lang="scss" scoped>
.emoji-btn {
  display: inline-flex;
  cursor: pointer;
  color: var(--u-text-color-secondary);
  font-size: 14px;
  .icon {
    fill: var(--u-text-color-secondary);
    margin-right: 4px;
    margin-bottom: 2px;
  }
}

.face-tooltip-head {
  display: flex;

  label {
    width: 0;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid var(--u-border-color);
    cursor: pointer;
    transition: border-color 0.25s;

    &.active {
      color: var(--u-color-primary);
      border-bottom: 1px solid var(--u-color-primary);
    }

    img {
      width: 18px;
      height: 18px;
    }
  }
}

.emoji-body {
  overflow: hidden;
  .emoji-container {
    .emoji-wrapper {
      display: flex;
      flex-wrap: wrap;
      padding: 0 5px;
      height: 170px;
    }
    .emoji-item {
      cursor: pointer;
      width: 34px;
      height: 34px;
      .emoji {
        width: 24px;
        height: 24px;
        margin: 5px;
      }
      .emoji2 {
        font-size: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .emoji-item:hover {
      transition: all 0.2s;
      border-radius: 2.5px;
      background-color: #ddd;
    }
  }
}

.el-image {
  display: block;
}
</style>

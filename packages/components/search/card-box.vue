<template>
  <div v-show="data.cardVisible" class="card-box u-scrollbar">
    <div v-if="data.historySearchList.length != 0" class="history">
      <div class="header">
        <div class="title">历史搜索</div>
        <el-button class="clear" link @click="$emit('onClear')">
          <u-icon>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
              ></path>
            </svg>
          </u-icon>
          清空
        </el-button>
      </div>
      <el-tag
        v-for="(item, id) in data.historySearchList"
        :key="id"
        :type="(item.type as any)"
        closable
        @close="$emit('onClose', item.name)"
        @click="$emit('submit', item.name)"
      >
        {{ item.name }}
      </el-tag>
    </div>
    <div class="trending">
      <div class="title">
        <span>热搜</span>
        <u-icon style="margin: 0 6px">
          <svg
            data-v-5fe91717=""
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
          >
            <path
              data-v-5fe91717=""
              d="M12.8 5.2C13.9532 6.46 14.8 8.2 14.8 10C14.7039 12.8937 12.6843 15.1706 9.97973 15.8159C10.359 12.3442 7.77588 9.35406 7.77588 9.35406C7.77588 9.35406 7.99512 13.7064 6.79514 15.8104C4.03715 15.1428 2 12.7806 2 9.8C2 7.776 2.9336 5.9728 4.4 4.8C5.8608 3.7056 6.8 1.9656 6.8 0C9.684 0.4368 11.894 2.9264 11.894 5.932C11.894 6.5012 11.746 7.0652 11.6 7.6C12.1264 6.9024 12.6184 6.0876 12.8 5.2Z"
              fill="#F53F3F"
            ></path>
          </svg>
        </u-icon>
      </div>
      <div class="hot-list">
        <div v-for="(item, key) in data.hotSearchList" :key="key" class="hot-item" @click="$emit('submit', item)">
          <div :class="['trending-rank', { 'trending-rank-top': key < 3 }]">{{ key + 1 }}</div>
          <div class="trending-text u-ellipsis">
            {{ item }}
          </div>
          <div class="trending-mark"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DataApi } from './search.vue'
import { ElTag, ElButton } from '~/element'

interface Props {
  data: DataApi
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'onClose', val: string): void
  (e: 'submit', val: string): void
  (e: 'onClear'): void
}>()
</script>

<style lang="scss" scoped>
.card-box {
  position: relative;
  max-height: 340px;
  z-index: 15;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.12);
  overflow-y: auto;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
  .history {
    padding: 0 10px 0;
    .el-tag {
      margin: 0 10px 10px 0;
      cursor: pointer;
    }
    .el-tag:hover {
      --el-tag-bg-color: var(--el-color-primary-light-9);
      --el-tag-border-color: var(--el-color-primary-light-8);
      --el-tag-hover-color: var(--el-color-primary);
      --el-tag-text-color: var(--el-color-primary);
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 20px;
      height: 25px;
      font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei, sans-serif;
      font-weight: 500;
      margin-bottom: 5px;
      .title {
        font-size: 16px;
      }
      .clear {
        font-size: 12px;
        .u-icon {
          font-size: 14px;
        }
      }
    }
  }
  .trending {
    .title {
      padding: 0 10px 0;
      height: 24px;
      font-size: 16px;
      line-height: 24px;
    }

    .hot-list {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(5, 1fr);
      .hot-item {
        padding: 0 10px 0;
        box-sizing: border-box;
        overflow: hidden;
        height: 38px;
        display: flex;
        align-items: center;
        cursor: pointer;
        .trending-rank {
          width: 15px;
          min-width: 15px;
          height: 17px;
          line-height: 17px;
          text-align: center;
          font-size: 14px;
          margin-right: 7px;
          color: #9499a0;
        }
        .trending-rank.trending-rank-top {
          color: #18191c;
        }
        .trending-text {
          font-size: 14px;
          line-height: 17px;
          height: 17px;
          margin-right: 6px;
        }
      }
      .hot-item:hover {
        background: #e3e5e7;
      }
    }
  }
}
</style>

<template>
  <div v-if="data.total > 0" class="reply-box">
    <div class="reply-list">
      <ContentBox v-for="(reply, index) in data.list" :key="index" :parent-id="parentId" :data="reply" small>
        <template #userInfo>
          <slot name="userInfo"></slot>
        </template>
      </ContentBox>
      <div v-if="data.total > 2" class="fetch-more">
        <span v-if="state.loading">加载中...</span>
        <div v-else>
          <div v-if="!state.over">
            共{{ data.total }}条回复,
            <span class="fetch-more-comment select-none" @click="replyMore">
              点击查看
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                <path
                  data-v-d6f79dbc=""
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.99976 7.93206L10.0656 3.86619C10.1633 3.76856 10.3215 3.76856 10.4192 3.86619L10.7727 4.21975C10.8704 4.31738 10.8704 4.47567 10.7727 4.5733L6.35331 8.99272C6.15805 9.18798 5.84147 9.18798 5.6462 8.99272L1.22679 4.5733C1.12916 4.47567 1.12916 4.31738 1.22679 4.21975L1.58034 3.86619C1.67797 3.76856 1.83626 3.76856 1.93389 3.86619L5.99976 7.93206Z"
                ></path>
              </svg>
            </span>
          </div>
          <el-pagination
            v-else
            small
            hide-on-single-page
            layout="total, prev, pager, next"
            :total="data.total"
            :page-size="state.pageSize"
            @current-change="currentChange"
            @size-change="sizeChange"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, reactive } from 'vue'
import ContentBox from './content-box.vue'
import { ReplyApi, ElPagination, InjectionReply, ReplyParam } from '~/index'

interface Props {
  data?: ReplyApi | null
  parentId: number
}

const props = defineProps<Props>()
const state = reactive({
  loading: false,
  over: false,
  pageNum: 1,
  pageSize: 4
})

const data = computed(() => {
  if (!props.data) {
    return {
      total: 0,
      list: []
    }
  }
  return props.data
})

const replyInject = inject(InjectionReply) as ReplyParam

const replyMore = () => {
  state.loading = true
  state.over = true
  replyInject.replyMore(props.parentId, () => (state.loading = false))
}

const currentChange = (val: number) => {
  state.pageNum = val
  replyInject.replyPage(props.parentId, val, state.pageSize)
}

const sizeChange = (val: number) => {
  state.pageSize = val
  replyInject.replyPage(props.parentId, state.pageNum, val)
}
</script>

<style lang="scss" scoped>
.el-pagination {
  --el-pagination-button-disabled-bg-color: none;
  --el-pagination-bg-color: none;
  padding: 0;
}
.reply-box {
  margin-top: 16px;

  .reply-list {
    padding: 16px;
    background: rgba(247, 248, 250, 0.7);
    border-radius: 4px;
  }

  .fetch-more {
    margin-left: 36px;
    margin-top: 10px;
    color: #6d757a;
    font-size: 12px;
    line-height: 22px;
    .fetch-more-comment {
      color: #00a1d6;
      box-sizing: border-box;
      cursor: pointer;
      svg {
        fill: currentColor;
        margin-left: 2px;
        margin-bottom: 3px;
      }
    }
  }
}
</style>

<template>
  <div v-if="data.length > 0" class="reply-box">
    <div class="reply-list">
      <ContentBox v-for="(reply, index) in data.list" :id="id" :key="index" :data="reply" reply></ContentBox>
      <div v-if="data.length > replyShowSize" class="fetch-more">
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
        </div>
      </div>
      <div v-if="state.over && page" class="fetch-more">
        <el-pagination
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
</template>

<script setup lang="ts">
import { computed, inject, reactive } from 'vue'
import ContentBox from './content-box.vue'
import { ReplyApi, ElPagination } from '~/index'
import { InjectReplyBox, InjectReplyBoxApi } from '../key'

interface Props {
  data?: ReplyApi | null
  id: string
}

const props = defineProps<Props>()
const state = reactive({
  loading: false,
  over: false,
  pageNum: 1,
  pageSize: 5
})

const { replyPage, replyShowSize, comments } = inject(InjectReplyBox) as InjectReplyBoxApi

const { page } = inject(InjectReplyBox) as InjectReplyBoxApi

// 分页操作
const data = computed(() => {
  let data = {
    total: 0,
    length: 0,
    list: [] as any[]
  }
  if (props.data) {
    let length = props.data.list.length
    data = {
      total: props.data.total,
      length: length,
      list: props.data.list
    }
  }
  if (!state.over) {
    let tmp = data.list.slice(0, replyShowSize)
    data.list = tmp
  }
  if (page) {
    data.list = data.list.slice(0, 5)
  }
  return data
})

const replyMore = () => {
  state.over = true
}

const finish = (val: any) => {
  comments.value.forEach(e => {
    if (e.id == props.id) {
      if (e.reply) {
        e.reply = val
      }
    }
  })
}

const currentChange = (val: number) => {
  state.pageNum = val
  replyPage(props.id, val, state.pageSize, reply => finish(reply))
}

const sizeChange = (val: number) => {
  state.pageSize = val
  replyPage(props.id, state.pageNum, val, reply => finish(reply))
}
</script>

<style lang="scss" scoped>
@use '../style/reply-box.scss';
</style>

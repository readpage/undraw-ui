<template>
  <div class="u-search">
    <div class="search" :class="{ active: isFocus }">
      <div style="display: flex; align-items: center; padding-left: 8px">
        <u-icon>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7187">
            <path
              d="M344.16 960c-58.976-124.256-27.552-195.456 17.76-262.528 49.632-73.472 62.432-146.176 62.432-146.176s39.008 51.36 23.424 131.68c68.928-77.696 81.888-201.472 71.52-248.896 155.776 110.272 222.336 348.992 132.64 525.92C1129.024 686.528 770.56 277.376 708.16 231.264c20.8 46.08 24.736 124.128-17.28 161.984C619.744 120 443.84 64 443.84 64c20.8 140.928-75.392 295.008-168.16 410.144-3.264-56.192-6.72-94.976-35.872-148.736-6.56 102.08-83.552 185.28-104.416 287.552-28.256 138.496 21.152 239.904 208.832 347.008L344.16 960zM344.16 960"
              p-id="7188"
              fill="#F53F3F"
            ></path>
          </svg>
        </u-icon>
      </div>
      <label
        ref="labelRef"
        :data-before="before"
        :data-after="after"
        :class="{ animate: shouldAnimate }"
        @animationend="animationend"
      >
        <input
          ref="inputRef"
          v-model="data.search"
          type="text"
          :placeholder="placeholder"
          @focus="
            () => {
              isFocus = true
              data.cardVisible = true
            }
          "
          @blur="isFocus = false"
          @keyup.enter="searchHandler(data.search)"
        />
      </label>
      <div class="btn">
        <u-icon v-show="data.search" class="close" @click="data.search = ''">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8="">
            <path
              fill="currentColor"
              d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
            ></path>
            <path
              fill="currentColor"
              d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
            ></path>
          </svg>
        </u-icon>
        <div class="search-btn" @click="searchHandler(data.search)">
          <u-icon>
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="738">
              <path
                d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"
                p-id="739"
              ></path>
            </svg>
          </u-icon>
        </div>
      </div>
    </div>
    <CardBox
      v-click-outside:[labelRef]="() => (data.cardVisible = false)"
      :data="data"
      @on-close="closeHander"
      @on-clear="removeAllHistory"
      @submit="searchHandler"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, ref, reactive, toRef, watch } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
import { storage } from '~/util'
import CardBox from './card-box.vue'
import { SearchConfig } from './interface'

export interface HistoryApi {
  name: string
  type: string
}

export interface DataApi {
  search: string
  cardVisible: boolean
  historySearchList: HistoryApi[]
  hotSearchList: string[]
}

interface Props {
  config: SearchConfig
}

const props = defineProps<Props>()

defineOptions({
  name: 'USearch'
})

const inputRef = ref({} as HTMLInputElement)

const keywords = toRef(props.config, 'keywords')
const isFocus = ref(false)
const currentIndex = ref(0)
const animationTriggerFlag = ref(true)
const labelRef = ref()

const state = reactive({
  types: ['success', 'info', 'warning', 'danger'] //搜索历史tag样式
})

const data = reactive<DataApi>({
  search: '',
  cardVisible: false,
  historySearchList: storage.get('searchHistory') || [], // 历史搜索数据
  hotSearchList: props.config.hotSearchList
})

watch(
  () => props.config.hotSearchList,
  val => {
    data.hotSearchList = val
  }
)

const emit = defineEmits<{
  (e: 'submit', val: string): void
}>()

// 动态滚动关键字
const before = computed(() => {
  let keyword = keywords.value[currentIndex.value]
  return isFocus.value || data.search ? '' : keyword
})
const after = computed(() => {
  let keyword =
    typeof keywords.value[currentIndex.value + 1] === 'undefined'
      ? keywords.value[0]
      : keywords.value[currentIndex.value + 1]
  return isFocus.value || data.search ? '' : keyword
})
const placeholder = computed(() => {
  let keyword = keywords.value[currentIndex.value]
  return !isFocus.value ? '' : keyword
})
const shouldAnimate = computed(() => !isFocus.value && !data.search && animationTriggerFlag.value)

// 搜索存储历史记录信息
const searchHandler = (keyword: string) => {
  // 随机生成搜索历史tag样式
  let n = (min: number, max: number) => Math.round(Math.random() * (max - min)) + min

  let exist = (val: string) => data.historySearchList.filter(v => v.name == val).length != 0
  if (keyword && data.historySearchList) {
    if (!exist(keyword)) {
      data.historySearchList.push({ name: keyword, type: state.types[n(0, 3)] })
    }
  } else {
    let t = isFocus.value ? placeholder : before
    keyword = t.value
    if (!exist(t.value)) data.historySearchList.push({ name: t.value, type: state.types[n(0, 3)] })
  }
  // 存储历史搜索记录
  storage.set('searchHistory', data.historySearchList)
  data.search = keyword
  inputRef.value.focus()
  // 提交关键词搜索
  emit('submit', keyword)
}

// 关闭历史标签
const closeHander = (val: string) => {
  data.historySearchList.findIndex(v => v.name == val)
  data.historySearchList.splice(
    data.historySearchList.findIndex(v => v.name == val),
    1
  )
  storage.set('searchHistory', data.historySearchList)
}

// 清除历史标签
const removeAllHistory = () => {
  data.historySearchList.length = 0
  storage.remove('searchHistory')
}

// 关键词动画
const animationend = (e: AnimationEvent) => {
  if (e.pseudoElement == '::after') {
    animationTriggerFlag.value = false
    let newIndex = typeof keywords.value[currentIndex.value + 1] === 'undefined' ? 0 : currentIndex.value + 1

    currentIndex.value = newIndex
    setTimeout(() => {
      animationTriggerFlag.value = true
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.u-search {
  width: 350px;
  .search {
    transition: all 0.3s;
    background: #f2f3f5;
    border: 1px solid #f2f3f5;
    border-radius: 4px;
    display: flex;

    input[type='text'] {
      padding: 4px 10px;
      border-radius: 4px;
      width: 100%;
      color: #252933;
      outline: none;
      border: none;
      overflow: hidden;
      font-size: 14px;
      font-family: inherit;
      box-sizing: border-box;
      line-height: 24px;
      background: transparent;
    }

    .btn {
      display: flex;
      align-items: center;
      .close {
        color: #73767a;
        cursor: pointer;
      }
      .close:hover {
        color: #000000;
      }

      .search-btn {
        display: flex;
        justify-content: center;
        color: var(--el-text-color-primary);
        cursor: pointer;
        width: 30px;
        font-size: 14px;
      }
    }
  }
  .active {
    border-color: #1e80ff;
    background: #fff;
  }

  label {
    display: block;
    position: relative;
    overflow: hidden;
    font-size: 14px;
    flex: 1;
  }

  label:hover {
    cursor: text;
  }

  label::before {
    content: attr(data-before);
  }

  label::after {
    content: attr(data-after);
  }

  label::before,
  label::after {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    padding: 4px 10px;
    line-height: 24px;
    font-family: inherit;
    box-sizing: border-box;
    color: #999;
  }

  @keyframes placeholder-before {
    0% {
      transform: translateY(0%);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  @keyframes placeholder-after {
    0% {
      transform: translateY(0%);
      opacity: 0;
    }
    100% {
      transform: translateY(-100%);
      opacity: 1;
    }
  }

  .animate::before {
    animation: 0.4s placeholder-before ease-out;
  }

  .animate::after {
    animation: 0.4s placeholder-after ease-out;
  }

  .animate::before,
  .animate::after {
    animation-fill-mode: forwards;
  }
}
</style>

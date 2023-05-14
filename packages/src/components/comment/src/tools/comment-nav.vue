<template>
  <div class="nav">
    <span class="nav__title">全部评论</span>
    <div class="nav__sort">
      <div class="item select-none" :class="{ active: latest }" @click="latest = true">
        <u-icon>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.99951 0.5C9.03708 0.5 11.4995 2.96243 11.4995 6C11.4995 9.03757 9.03708 11.5 5.99951 11.5C2.96195 11.5 0.499512 9.03757 0.499512 6C0.499512 2.96243 2.96195 0.5 5.99951 0.5ZM6.25 3.49988C6.38807 3.49988 6.5 3.61181 6.5 3.74988V5.49988H8.25C8.38807 5.49988 8.5 5.61181 8.5 5.74988V6.24988C8.5 6.38795 8.38807 6.49988 8.25 6.49988H5.75C5.61193 6.49988 5.5 6.38795 5.5 6.24988V3.74988C5.5 3.61181 5.61193 3.49988 5.75 3.49988H6.25Z"
            ></path>
          </svg>
        </u-icon>
        最新
      </div>
      <div class="item select-none" :class="{ active: !latest }" @click="latest = false">
        <u-icon>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
            <path
              d="M4.88933 0.613974C4.92947 0.616946 4.96831 0.629568 5.00253 0.650767C6.67348 1.68589 7.55141 3.13884 7.63632 5.00962C7.947 5.00962 8.2245 4.65999 8.46882 3.96072L8.49487 3.88447C8.53862 3.75351 8.68025 3.68282 8.8112 3.72656C8.83398 3.73417 8.85554 3.74502 8.87522 3.75878C9.96316 4.5193 10.5048 5.50231 10.5 6.70782C10.4999 6.73762 10.4982 6.76675 10.495 6.7952C10.4985 6.86294 10.5 6.93131 10.5 7.00005C10.5 9.48533 8.48528 11.5 6 11.5C3.51472 11.5 1.5 9.48533 1.5 7.00005C1.5 6.90255 1.5031 6.80578 1.50921 6.70983C1.5062 6.70917 1.5031 6.70849 1.5 6.70782C1.50864 6.60849 1.52139 6.50994 1.53824 6.41219C1.54515 6.35775 1.55321 6.30373 1.56222 6.25003L1.57017 6.24983C1.7622 5.3813 2.28426 4.57601 3.13635 3.83394C4.00892 3.07405 4.50079 2.11523 4.61198 0.957499L4.62156 0.844839C4.63175 0.707146 4.75163 0.603784 4.88933 0.613974Z"
            ></path>
          </svg>
        </u-icon>
        最热
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()

defineOptions({
  name: 'uCommentNav'
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void
  (e: 'sorted', latest: boolean): void
}>()

const latest = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
    emit('sorted', value)
  }
})
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 30px;
  margin-bottom: 10px;
  &__title {
    font-weight: 600;
    font-size: 18px;
  }
  &__sort {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #4e5969;
    cursor: pointer;
    background-color: #f2f3f5;
    border-radius: 2px;
    padding: 3px;

    .item {
      line-height: 22px;
      font-size: 14px;
      display: flex;
      align-items: center;
      color: #8a919f;
      padding: 2px 12px;
      .u-icon {
        font-size: 12px;
        margin-right: 4px;
      }
    }

    .active {
      color: #1e80ff;
      background: #fff;
    }
  }
}
</style>

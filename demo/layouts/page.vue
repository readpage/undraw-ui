<template>
  <div class="page">
    <el-scrollbar class="slider">
      <div class="title">
        <h2>{{ route.name }}</h2>
      </div>
      <div class="content">
        <div v-for="(tab, index) in tabs" :key="index" class="menu-li" :class="bindClass(tab)" @click="switchTab(tab)">
          {{ tab.name }}
        </div>
      </div>
    </el-scrollbar>
    <el-scrollbar class="container">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </el-scrollbar>
    <el-switch v-model="isDark" inline-prompt :active-icon="Moon" :inactive-icon="Sunny" style="position: absolute; right: 20px; top: 5px" />
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ElScrollbar } from 'element-plus'
import { isDark } from '@/util'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { ElSwitch } from 'element-plus'
import 'element-plus/es/components/switch/style/css'
import { staticRoutes } from '@/router'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const tabs = computed(() => staticRoutes.filter(t => t.name != null))

const bindClass = (tab: any) => {
  return route.name == tab.name ? 'current-tab' : ''
}

const switchTab = (tab: any) => {
  router.push(tab.path)
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: start;
  height: 100vh;
  .slider {
    text-align: center;
    width: 150px;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    min-height: 100vh;
    .title {
      margin-bottom: 10px;
    }
    .menu-li {
      height: 40px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .container {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  .current-tab {
    color: rgb(30, 128, 255);
  }
}
</style>

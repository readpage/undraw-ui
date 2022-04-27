<template>
  <Layout>
    <template #navbar-search>
      <ClientOnly>
        <div class="nav-icon">
          <a href="https://gitee.com/undraw/undraw-ui" target="_blank"><u-icon name="gitee" size="24"></u-icon></a>
          <a href="https://github.com/readpage/undraw-ui" target="_blank"><u-icon name="github" size="24"></u-icon></a>
        </div>
      </ClientOnly>
    </template>
  </Layout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme


</script>

<style lang="scss" scoped>
.nav-icon {
  display: flex;
  justify-content: space-evenly;
  padding-top: 5px;
  margin-left: 10px;
  .u-icon {
    padding: 0 10px;
  }
}
</style>

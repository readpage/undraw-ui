<template>
  <div class="context-menu" @contextmenu.stop.prevent="open"></div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { UContextMenu } from '~/components'
function open(e: MouseEvent) {
  UContextMenu(e, {
    data: [
      {
        label: '按钮1',
        callback(done) {
          console.log('按钮1')
          done()
        }
      },
      {
        label: '按钮2',
        callback(done) {
          console.log('按钮2')
          done()
        }
      }
    ]
  })
}

</script>

<style lang="scss" scoped>
.context-menu {
  height: 200px;
  border: 1px #1f1f1f solid;
}
</style>

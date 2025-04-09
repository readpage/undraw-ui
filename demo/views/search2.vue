<template>
  <div class="search">
    <div class="icon">
      <u-icon class="cursor-pointer" @click="searchBtn"><Search /></u-icon>
    </div>
    <div class="input-box" :class="{ show: show }">
      <u-search2 ref="searchRef" v-model="keyword" @remote-search="remoteSearch" @select="select" @blur="show=false"></u-search2>
    </div>
  </div>
</template>
<script setup lang="ts">
import { isEmpty } from 'undraw-ui'
import { nextTick, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const show = ref(false)

const keyword = ref('')
const searchRef = ref()

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]

function toOptions(menu: any[]) {
  if (isEmpty(menu)) return menu
  let arr = menu.filter(e => e.type != 3)
  let options = new Array()
  function rootNode(val: any) {
    if (isEmpty(val) || val.parentId == null) {
      return val
    }
    // debugger
    let o = arr.find(e => e.id == val.parentId)

    return rootNode(o)
  }
  arr.forEach(e => {
    if (e.type != 1) {
      let root = rootNode(e)
      if (e.parentId == null) {
        options.push({ value: e.title, path: e.path })
      } else {
        options.push({ value: `${root.title}>${e.title}`, path: e.path })
      }
    }
  })
  return options
}

function remoteSearch(val: string, done: (arg: any[]) => void) {
  if (val == '') {
    done([])
    return
  }
  setTimeout(() => {
    // done(states.filter(e => e.toLowerCase().includes(val.toLowerCase())))
    let arr = options.filter(e => e.value.includes(val) || e.path.includes(val))
    console.log(arr, val)
    done(arr)
    console.log('keyword:', keyword.value)
  }, 200)
}

function searchBtn() {
  show.value = true
  searchRef.value.focus()
}

function select(val: any) {
  keyword.value = ''
  searchRef.value.blur()
}

</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  .icon {
    line-height: 32px;
  }
  .input-box {
    width: 0;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
  }
  .show {
    width: 200px;
    margin-left: 10px;
  }
}
</style>

import { isNull } from 'undraw-ui'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/comment'
  }
]

let arr = ['fold', 'comment', 'chat', 'search', 'editor', 'anchor', 'counter', 'notice-bar', 'dialog', 'form', 'group']
let routes = arr.map(v => ({
  path: `/${v}`,
  name: `${v}`,
  component: () => import(`@/views/${v}.vue`),
  meta: {
    title: `${v}`
  }
}))
staticRoutes.push(...routes)

const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes,
  scrollBehavior(to, from, savedPosition) {
    let scrollbar = document.querySelector('.container-view .el-scrollbar__wrap')
    if (scrollbar) {
      scrollbar.scrollTop = 0
    }
  }
})

router.beforeEach(async (to, form, next) => {
  let title = to.meta.title as string
  document.title = title ? title : isNull(document.querySelector('title')?.text, 'loading...')
  next()
})

export default router

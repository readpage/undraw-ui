import { withInstall } from '~/utils'
import tagsVue from './tags.vue'

export interface TagApi {
  title: string
  path: string
  isAffix: boolean
}

export const UTags = withInstall(tagsVue)
export default UTags

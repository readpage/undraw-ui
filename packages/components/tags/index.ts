import { withInstall } from '~/util'
import tagsVue from './tags.vue'

export * from './interface'
export type TagsInstance = InstanceType<typeof tagsVue>
export const UTags = withInstall(tagsVue)
export default UTags

import { withInstall } from '~/util'
import searchVue from './src/search.vue'

export * from './interface'
export type SearchInstance = InstanceType<typeof searchVue>
export const USearch = withInstall(searchVue)
export default USearch

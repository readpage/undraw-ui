import searchVue from './src/search.vue'

export * from './interface'
export type SearchInstance = InstanceType<typeof searchVue>
export const USearch = searchVue
export default USearch

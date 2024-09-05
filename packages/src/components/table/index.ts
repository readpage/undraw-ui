import tableVue from './table.vue'

export type * from './table.vue'
export type TableInstance = InstanceType<typeof tableVue>
export const UTable = tableVue
export default UTable
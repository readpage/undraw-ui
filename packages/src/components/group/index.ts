import groupVue from './group.vue'

export type * from './group.vue'
export type GroupInstance = InstanceType<typeof groupVue>
export const UGroup = groupVue
export default UGroup
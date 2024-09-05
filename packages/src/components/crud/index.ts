import crudVue from './crud.vue'

export type * from './crud.vue'
export type CrudInstance = InstanceType<typeof crudVue>
export const UCrud = crudVue
export default UCrud
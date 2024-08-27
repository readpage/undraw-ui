import formVue from './form.vue'

export type * from './form.vue'
export type FormInstance = InstanceType<typeof formVue>
export const UForm = formVue
export default UForm
import { withInstall } from '~/util'
import signVue from './sign.vue'

export * from './interface'
export type SignInstance = InstanceType<typeof signVue>
export const USign = withInstall(signVue)
export default USign

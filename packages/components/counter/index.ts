import { withInstall } from '~/util'
import counterVue from './counter.vue'

export type CounterInstance = InstanceType<typeof counterVue>
export const UCounter = withInstall(counterVue)
export default UCounter

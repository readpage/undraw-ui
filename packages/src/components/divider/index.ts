import { withInstall } from '~/util'
import dividerVue from './divider.vue'

export type DividerInstance = InstanceType<typeof dividerVue>
export const UDivider = withInstall(dividerVue)
export default UDivider

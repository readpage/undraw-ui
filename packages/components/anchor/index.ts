import { withInstall } from '~/util'
import anchorVue from './anchor.vue'

export type AnchorInstance = InstanceType<typeof anchorVue>
export const UAnchor = withInstall(anchorVue)
export default UAnchor

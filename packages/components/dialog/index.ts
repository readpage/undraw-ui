import { withInstall } from '~/util'
import dialogVue from './dialog.vue'

export type DialogInstance = InstanceType<typeof dialogVue>
export const UDialog = withInstall(dialogVue)
export default UDialog

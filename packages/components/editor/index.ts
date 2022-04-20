import { withInstall } from '~/utils'
import editorVue from './editor.vue'

export type EditorInstance = InstanceType<typeof editorVue>
export const UEditor = withInstall(editorVue)
export default UEditor

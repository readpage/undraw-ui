import { withInstall } from "~/utils";
import editorVue from "./editor.vue";


export type editorInstance = InstanceType<typeof editorVue>
export const Editor = withInstall(editorVue)
export default Editor
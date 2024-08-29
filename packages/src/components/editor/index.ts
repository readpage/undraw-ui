import editorVue from './editor.vue'

export type * from './mention.vue'
export type EditorInstance = InstanceType<typeof editorVue>
export const UEditor = editorVue
export default UEditor
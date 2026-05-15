import editorVue from './editor.vue'

export interface UEditorConfig {
  /** 按键映射：Enter / Shift+Enter / Ctrl+Enter 等组合键行为 */
  keys?: {
    Enter?: 'submit' | 'newline'
    'Shift+Enter'?: 'submit' | 'newline'
    'Ctrl+Enter'?: 'submit' | 'newline'
    [key: string]: 'submit' | 'newline' | undefined
  }
  /** 是否显示内置发送按钮，默认 false */
  sendBtn?: boolean
  /** 发送按钮文字，默认 '发送' */
  sendBtnText?: string
}

export type * from './mention.vue'
export type EditorInstance = InstanceType<typeof editorVue>
export const UEditor = editorVue
export default UEditor

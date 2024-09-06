export const UndrawUiResolver = {
  type: 'component',
  resolve: name => {
    if (name in element) {
      return {
        name: name,
        from: 'undraw-ui',
        sideEffects: element[name]
      }
    }
  }
}

const element = {
  UCommentNav: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/comment-nav/comment-nav.css'
  ],
  UCommentScroll: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/comment-scroll/comment-scroll.css'
  ],
  UDivider: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/divider/divider.css'
  ],
  UIcon: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/icon/icon.css'
  ],
  UCounter: [],
  UFold: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/fold/fold.css',
    'element-plus/es/components/button/style/css'
  ],
  UToast: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/toast/toast.css',
    'undraw-ui/es/components/icon/icon.css'
  ],
  UAnchor: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/anchor/anchor.css',
    'undraw-ui/es/components/divider/divider.css'
  ],
  UDialog: [
    'undraw-ui/es/index.css',
    'element-plus/es/components/dialog/style/css',
    'undraw-ui/es/components/dialog/dialog.css'
  ],
  UNoticeBar: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/notice-bar/notice-bar.css',
    'element-plus/es/components/carousel/style/css'
  ],
  USearch: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/search/search.css',
    'undraw-ui/es/components/icon/icon.css',
    'element-plus/es/components/tag/style/css',
    'element-plus/es/components/link/style/css'
  ],
  UEditor: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/editor/editor.css',
    'undraw-ui/es/components/toast/toast.css',
    'undraw-ui/es/components/icon/icon.css',
    'element-plus/es/components/scrollbar/style/css',
    'element-plus/es/components/empty/style/css'
  ],
  UEmoji: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/emoji/emoji.css',
    'element-plus/es/components/popover/style/css',
    'element-plus/es/components/image/style/css',
    'element-plus/es/components/scrollbar/style/css'
  ],
  UComment: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/comment/comment.css',
    'element-plus/es/components/button/style/css',
    'undraw-ui/es/components/toast/toast.css',
    'undraw-ui/es/components/icon/icon.css',
    'undraw-ui/es/components/emoji/emoji.css',
    'element-plus/es/components/popover/style/css',
    'element-plus/es/components/image/style/css',
    'element-plus/es/components/scrollbar/style/css',
    'undraw-ui/es/components/editor/editor.css',
    'element-plus/es/components/empty/style/css',
    'element-plus/es/components/avatar/style/css',
    'undraw-ui/es/components/fold/fold.css',
    'element-plus/es/components/pagination/style/css'
  ],
  UChat: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/chat/chat.css',
    'element-plus/es/components/scrollbar/style/css',
    'undraw-ui/es/components/emoji/emoji.css',
    'element-plus/es/components/popover/style/css',
    'element-plus/es/components/image/style/css',
    'element-plus/es/components/scrollbar/style/css',
    'undraw-ui/es/components/icon/icon.css',
    'undraw-ui/es/components/toast/toast.css',
    'undraw-ui/es/components/editor/editor.css',
    'element-plus/es/components/empty/style/css',
    'element-plus/es/components/avatar/style/css'
  ],
  UForm: [
    'undraw-ui/es/index.css',
    'element-plus/es/components/input/style/css',
    'element-plus/es/components/select/style/css',
    'element-plus/es/components/option/style/css',
    'element-plus/es/components/date-picker/style/css',
    'element-plus/es/components/form/style/css',
    'element-plus/es/components/form-item/style/css',
    'undraw-ui/es/components/form/form.css'
  ],
  UGroup: [
    'element-plus/es/components/input/style/css',
    'element-plus/es/components/select/style/css',
    'element-plus/es/components/option/style/css',
    'element-plus/es/components/date-picker/style/css',
    'element-plus/es/components/form/style/css',
    'element-plus/es/components/form-item/style/css',
    'undraw-ui/es/components/form/form.css',
    'undraw-ui/es/components/icon/icon.css',
    'undraw-ui/es/index.css',
    'element-plus/es/components/tabs/style/css',
    'element-plus/es/components/tab-pane/style/css',
    'undraw-ui/es/components/group/group.css'
  ],
  UTable: [
    'undraw-ui/es/components/icon/icon.css',
    'undraw-ui/es/index.css',
    'element-plus/es/components/table/style/css',
    'element-plus/es/components/table-column/style/css',
    'element-plus/es/components/form/style/css',
    'element-plus/es/components/form-item/style/css',
    'element-plus/es/components/input/style/css',
    'element-plus/es/components/link/style/css',
    'element-plus/es/components/image/style/css',
    'element-plus/es/components/date-picker/style/css',
    'element-plus/es/components/select/style/css',
    'element-plus/es/components/option/style/css',
    'element-plus/es/components/empty/style/css',
    'element-plus/es/components/pagination/style/css',
    'element-plus/es/components/message-box/style/css',
    'undraw-ui/es/components/table/table.css'
  ],
  UCrud: [
    'element-plus/es/components/input/style/css',
    'element-plus/es/components/select/style/css',
    'element-plus/es/components/option/style/css',
    'element-plus/es/components/date-picker/style/css',
    'element-plus/es/components/form/style/css',
    'element-plus/es/components/form-item/style/css',
    'undraw-ui/es/components/form/form.css',
    'element-plus/es/components/tabs/style/css',
    'element-plus/es/components/tab-pane/style/css',
    'undraw-ui/es/components/group/group.css',
    'undraw-ui/es/components/icon/icon.css',
    'element-plus/es/components/table/style/css',
    'element-plus/es/components/table-column/style/css',
    'element-plus/es/components/link/style/css',
    'element-plus/es/components/image/style/css',
    'element-plus/es/components/empty/style/css',
    'element-plus/es/components/pagination/style/css',
    'element-plus/es/components/message-box/style/css',
    'undraw-ui/es/components/table/table.css',
    'element-plus/es/components/dialog/style/css',
    'undraw-ui/es/components/dialog/dialog.css',
    'undraw-ui/es/index.css',
    'element-plus/es/components/button/style/css',
    'element-plus/es/components/tooltip/style/css',
    'undraw-ui/es/components/crud/crud.css'
  ]
}

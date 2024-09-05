export * from './anchor'
export * from './chat'
export * from './comment'
export * from './comment-nav'
export * from './comment-scroll'
export * from './counter'
export * from './dialog'
export * from './divider'
export * from './editor'
export * from './emoji'
export * from './fold'
export * from './icon'
export * from './notice-bar'
export * from './search'
export * from './toast'
export * from './form'
export * from './group'
export * from './table'
export * from './crud'

import Anchor from './anchor'
import Chat from './chat'
import Comment from './comment'
import CommentNav from './comment-nav'
import CommentScroll from './comment-scroll'
import Counter from './counter'
import Dialog from './dialog'
import Divider from './divider'
import Editor from './editor'
import Emoji from './emoji'
import Fold from './fold'
import Icon from './icon'
import NoticeBar from './notice-bar'
import Search from './search'
import Form from './form'
import Group from './group'
import Table from './table'
import Crud from './crud'

const components = [
  Anchor,
  Chat,
  Comment,
  CommentNav,
  CommentScroll,
  Counter,
  Dialog,
  Divider,
  Editor,
  Emoji,
  Fold,
  Icon,
  NoticeBar,
  Search,
  Form,
  Group,
  Table,
  Crud
]

import { App } from 'vue'
const install = (app: App) => {
  components.forEach(item => {
    app.component(item.name, item)
  })
}
export { install }

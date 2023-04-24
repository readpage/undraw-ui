import { Plugin } from 'vue'
import Comment from './comment'
import CommentScroll from './comment/comment-scroll'
import CommentNav from './comment/comment-nav'
import Dialog from './dialog'
import Divider from './divider'
import Editor from './editor'
import Fold from './fold'
import Icon from './icon'
import Sign from './sign'
import Tags from './tags'
import NoticeBar from './notice-bar'
import Anchor from './anchor'
import Search from './search'
import Chat from './chat'
import Emoji from './emoji'
import Counter from './counter'

export default [
  Comment,
  CommentScroll,
  CommentNav,
  Dialog,
  Divider,
  Editor,
  Fold,
  Icon,
  Sign,
  Tags,
  NoticeBar,
  Anchor,
  Search,
  Chat,
  Emoji,
  Counter
] as Plugin[]

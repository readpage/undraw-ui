import { withInstall } from '~/util'
import noticeBarVue from './notice-bar.vue'

export type NoticeBarInstance = InstanceType<typeof noticeBarVue>
export const UNoticeBar = withInstall(noticeBarVue)
export default UNoticeBar

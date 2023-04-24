export interface TagApi {
  path: string
  name?: string
  meta: {
    title: string
    isAffix: boolean
    isKeepAlive?: boolean
  }
}

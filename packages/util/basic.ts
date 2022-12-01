export const str = <T>(val: T) => {
  if (val == null) {
    return ''
  }
  return String(val)
}

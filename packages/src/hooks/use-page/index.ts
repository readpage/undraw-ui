//分页
export const usePage = (pageNum: number, pageSize: number, arr: any[]) => {
  let skipNum = (pageNum - 1) * pageSize
  let newArr =
    skipNum + pageSize >= arr.length ? arr.slice(skipNum, arr.length) : arr.slice(skipNum, skipNum + pageSize)
  return newArr
}

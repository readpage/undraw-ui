import { isArray } from '.'

// const obj = {
//   name: '张三'
// } as any
// const str = 'username'
// obj[str] = '李明'
// console.log(obj[str])

export function deepTree(list: Array<any>, children = 'children') {
  list = JSON.parse(JSON.stringify(list))
  const newList: Array<any> = []
  const map: any = {}

  list.forEach(e => (map[e.id] = e))

  list.forEach(e => {
    const parent = map[e.parentId]

    if (parent) {
      ;(parent[children] || (parent[children] = [])).push(e)
    } else {
      newList.push(e)
    }
  })

  return newList
}

export function revDeepTree(list: Array<any> = [], children = 'children') {
  const d: Array<any> = []
  let id = 0

  const deep = (list: Array<any>, parentId: any) => {
    list.forEach(e => {
      if (!e.id) {
        e.id = id++
      }

      e.parentId = parentId

      d.push(e)

      if (e[children] && isArray(e[children])) {
        deep(e[children], e.id)
      }
    })
  }

  deep(list || [], null)

  return d
}

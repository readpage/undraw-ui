/**
 * @param obj
 * @returns
 *
 * 适用于任何数组和对象的深拷贝
 * const arr = [1, 2, 3, { a: "b" }, [{ c: "d" }]];
 * const cloneArr = cloneDeep(arr);
 *
 * cloneArr[3].a = "u";
 * cloneArr[4][0].c = "uu";
 *
 * console.log(arr); // [1, 2, 3, { a: "b" }, [{ c: "d" }]]
 * console.log(cloneArr); // [1, 2, 3, { a: "u" }, [{ c: "uu" }]]
 */
function cloneDeep(value: any): any {
  if (typeof value !== 'object' || value === null) {
    return value
  }
  let result
  if (Array.isArray(value)) {
    result = []
    for (let i = 0; i < value.length; i++) {
      result[i] = cloneDeep(value[i])
    }
  } else if (value instanceof Date) {
    result = new Date(value.getTime())
  } else if (value instanceof RegExp) {
    result = new RegExp(value.source, value.flags)
  } else {
    result = {} as any
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        result[key] = cloneDeep(value[key])
      }
    }
  }
  return result
}

export { cloneDeep }

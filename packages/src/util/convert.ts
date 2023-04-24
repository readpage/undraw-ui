export function toFormData(object: any) {
  const formData = new FormData()
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue))
    } else {
      formData.append(key, object[key])
    }
  })
  return formData
}

export function removeEmptyField(obj: any) {
  return Object.keys(obj)
    .filter(key => obj[key] !== null && obj[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {})
}

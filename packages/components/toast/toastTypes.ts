interface toastType {
  type: string
  options: toastTypeOptions
}

interface toastTypeOptions {
  color: string
  bgColor: string
  icon: string
}
const toastTypes: toastType[] = [
  {
    type: 'success',
    options: { color: '#67c23a', bgColor: '#f0f9eb', icon: 'success' }
  },
  {
    type: 'info',
    options: { color: '#909399', bgColor: '#f4f4f5', icon: 'info' }
  },
  {
    type: 'warning',
    options: { color: '#fdf6ec', bgColor: '#e6a23c', icon: 'warning' }
  },
  {
    type: 'error',
    options: { color: '#f56c6c', bgColor: '#fef0f0', icon: 'error' }
  }
]

const defaultToastType: toastType = {
  type: 'normal',
  options: { color: '#fff', bgColor: 'rgba(0, 0, 0, .5)', icon: '' }
}

export function getToastType(type: string): toastType {
  return toastTypes.find(toastType => toastType.type === type) as toastType
}

export function getDefaultToastType(): toastType {
  return defaultToastType
}

export default {
  getToastType,
  getDefaultToastType
}

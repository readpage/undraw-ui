export const animate = {
  mounted(el: Element, binding: any) {
    // 聚焦元素
    binding.addClass = () => {
      // 返回元素的大小及其相对于视口的位置
      const { top } = el.getBoundingClientRect()
      // 获取元素可视区域的高度
      const h = document.documentElement.clientHeight || document.body.clientHeight
      if (top < h) {
        el.classList.add(binding.value)
        if (binding.addClass) {
          window.removeEventListener('scroll', binding.addClass)
        }
      }
    }

    window.addEventListener('scroll', binding.addClass)

    binding.addClass()
  },
  unmounted(el: Element, binding: any) {
    if (binding.addClass) {
      window.removeEventListener('scroll', binding.addClass)
    }
  }
}

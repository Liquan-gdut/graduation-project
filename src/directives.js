import router from './router'
export const navigate = function (el, {value}) {
  el.addEventListener('click', () => {
    if (!value) return
    router.push(value)
    document.documentElement.scrollTop = 0
  })
}

export const scrollIntoView = function (el, {value}) {
  if (!value) return
  el.scrollIntoView()
}

export const globalScroll = {
  bind (el, {value}) {
    el.globalScrollHandler = (e) => {
      // debugger
      console.log(window.scrollY)
    }
    document.addEventListener('scroll', el.globalScrollHandler)
  },
  unbind (el) {
    document.removeEventListener('scroll', el.globalScrollHandler)
  }
}

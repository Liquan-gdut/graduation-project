import router from './router'
import {throttle} from '@/services/utils'

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

/**
 * pre loader
 * @param {object} bindings.value
 * @param {element} scrollEl 监听的滚动标签
 * @param {number}  offset   距离滚动标签底部的偏移值， 可以稍微多设置一点
 * @param {function} triggerFn 预加载条件满足后出发的函数
 */
export const preLoader = {
  bind (el, {value}) {
    const {triggerFn, scrollEl, offset} = value
    const {clientHeight} = scrollEl
    const trigger = throttle(triggerFn, 30)
    el.globalScrollHandler = (e) => {
      const {scrollHeight, scrollTop} = scrollEl
      if (clientHeight + scrollTop + offset >= scrollHeight) {
        trigger()
      }
    }
    document.addEventListener('scroll', el.globalScrollHandler)
  },
  unbind (el, {value}) {
    value.scrollEl.removeEventListener('scroll', el.globalScrollHandler)
  }
}

/**
 * swapper
 * @param {object} el 传入的轮播BOX DOM元素
 * @param {number} slidePortWidth 轮播框向左移动的距离
 * @param {number} curActiveNewsIdx 当前活跃的元素
 * @param {注意：} 该版本可根据“轮播的页数”进行定制
 */
export const swapper = (el, binding) => {
  const setTranslate = (times) => {
    el.style.transform = `translate3D(-${100 * times / 4}%, 0, 0)`
    // el.style.transform = `translate3D(-${times * binding.value.slidePortWidth}px, 0, 0)`
  }
  if (binding.value.curActiveNewsIdx === 0) {
    setTimeout(() => {
      el.classList.add('sleep')
      setTranslate(0)
      setTimeout(() => el.classList.remove('sleep'), 100)
    }, 300)
    setTranslate(3)
    return
  }
  setTranslate(binding.value.curActiveNewsIdx)
}

/**
 * @param {value} 解决方案中向左或向右移动的“值“
 */
export const manualSwapper = {
  update (el, binding) {
    el.style.transform = `translate3D(${binding.value * -240}px, 0, 0)`
  }
}

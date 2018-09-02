export const watchDomScroll = ({commit}) => {
  const dom = document.documentElement
  const domBody = document.body
  document.addEventListener('scroll', (e) => {
    let {scrollHeight, scrollTop, clientHeight, clientWidth} = dom
    scrollTop = dom.scrollTop || domBody.scrollTop // 兼容性处理：Safari中的“document.documentElement.scrollTop”恒为0，chrome中的“document.body.scrollTop”恒为0
    commit('SYNC_SCROLL', {scrollHeight, scrollTop, clientHeight, clientWidth})
  })
}

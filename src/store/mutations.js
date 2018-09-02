export const STORE_NEWS_INFORM = (state, list) => {
  state.newsShareList = list
}
export const SYNC_CURRENT_TIME = (state) => {
  state.currentTime = Date.now()
}

export const SYNC_SCROLL = (state, value) => {
  state.domScroll = value
}

export const SYNC_ABOUTUS_IND = (state, value) => {
  state.aboutUsCurInd = value
}

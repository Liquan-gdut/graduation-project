import {
  icity
} from './adapter'
import {
  PAGE_SIZE
} from '../config/index'

/* eslint-disable-next-line */

export const getNews = () => icity.get('news')
/**
 *
 * @param {string} categoryId 新闻类型主键
 * @param {int} pageNo
 * @param {int} pageSize
 */
export const getNewsList = (pageNo, pageSize = PAGE_SIZE) => {
  return icity.get('/news', {
    params: {
      page: pageNo,
      rows: pageSize
    }
  })
}

export const getGoodsList = (keyword = '', productId = '') => icity.get('goods', {
  params: {
    keyword,
    productId
  }
})
import {icity} from './adapter'
import {PAGE_SIZE} from '../config'

/**
 *
 * @param {string} categoryId 新闻类型主键
 * @param {int} pageNo
 * @param {int} pageSize
 */
export const getArticles = (pageNo, pageSize = PAGE_SIZE) => {
  return icity.get('/article/list/data', {params: {page: pageNo, rows: pageSize}})
}

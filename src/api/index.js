import {icity} from './adapter'
import {PAGE_SIZE} from '../config/index'

/* eslint-disable-next-line */
import * as samples from './sample'

// http://101.124.15.81:9080/icity/front/partner
export const getPartners = () => {
  return icity.get('/partner')

  // return samples.partener
}

export const getNews = () => icity.get('news')
/**
 *
 * @param {string} categoryId 新闻类型主键
 * @param {int} pageNo
 * @param {int} pageSize
 */
export const getNewsList = (pageNo, pageSize = PAGE_SIZE) => {
  return icity.get('/news', {params: {page: pageNo, rows: pageSize}})
}

/**
 *
 * @param {string} id articleId 新闻ID
 */
export const getNewsDetail = (id) => {
  return icity.get(`/news/${id}`)
}

export const getSolutions = async () => {
  // const {list} = samples.solutions
  const {list} = await icity.get('/solution')
  return list
}

export const getExamplesBySolution = async (solutionId) => {
  // const {list} = examples.example
  const {list} = await icity.get('/example', {params: {solutionId}})
  return list
}

// http://101.124.15.81:9080/icity/front/scene
export const getSceneBySolution = async (solutionId) => {
  const {list} = await icity.get('/scene', {params: {solutionId}})
  return list
}

// http://101.124.15.81:9080/icity/front/platformfeatures
export const getPlatformfeatures = async () => {
  const {list} = await icity.get('/platformfeatures')
  // const {list} = samples.platformfeatures
  return list
}

// http://101.124.15.81:9080/icity/front/research
export const getPapers = async () => {
  const {list} = await icity.get('/research')
  return list
}

// http://101.124.15.81:9080/icity/front/job
// export const getJobs = async () => {
//   const {list} = await icity.get('/job')
//   return list
// }

export const getJobs = (pageNo, pageSize = PAGE_SIZE) => {
  return icity.get('/job', {params: {page: pageNo, rows: pageSize}})
}

// http://101.124.15.81:9080/icity/front/platformcategory
export const getPlatformcategory = async () => {
  const {list} = await icity.get('/platformcategory')
  return list
}

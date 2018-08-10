import {icity} from './adapter'
// http://101.124.15.81/ping
export const getPing = async () => await icity.get(`/ping`)
//  /user?userid=1
// export const getUser = async () => await icity.get('/user', {params: {userid: 1}})
// export const getNews = async () => await icity.get(`/icity/cms/article/list/data`, {params: {categoryId: '66053f1cc5b6491ca100e29bf91619fc', page: 1, rows: 1}})

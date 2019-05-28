/**
 * axios
 * api: https://github.com/axios/axios
 */

import axios from 'axios'
import {
  domains
} from '@/config'

const icity = axios.create({
  baseURL: domains.icity,
  timeout: 50000,
  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  // transformResponse: [function (data) {
  //   return data
  // }],
})
icity.interceptors.response.use(async (response) => {
  const {
    data,
    code
  } = await response.data
  if (code === 200) return data
  return Promise.reject(response.data)
}, (error) => {
  console.error('icity request error: ', error)
  return Promise.reject(error)
})

// export default axios
export {
  icity
}
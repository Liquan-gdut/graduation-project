export const ellipsis = (word, length) => {
  if (!word) return word
  return word.length > length ? word.slice(0, length) + '...' : word
}

/**
 * 日期/时间 格式化
 * @param {string|int} raw  传入的日期字符串或timestamp
 * @param {string} fmt  格式 [YYYY|YY]-MM-DD HH:mm:ss
 */
export const timeFormate = (raw, fmt) => {
  raw = raw.replace(/-/g, '/') // 兼容性处理：Safari无法将“YY-MM-DD”转成Date格式，可将全部“-”替换成“/”
  const date = new Date(raw)
  if (date.toString() === 'Invalid Date') {
    return fmt
  } // 参数校验
  date.setHours(date.getHours() + 8)
  const reg = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/
  const [, YYYY, MM, DD, HH, mm, ss] = date.toISOString().match(reg)
  return fmt.replace('YYYY', YYYY)
    .replace('MM', MM)
    .replace('DD', DD)
    .replace('HH', HH)
    .replace('mm', mm)
    .replace('ss', ss)
}

// export const partnerIcon = (typeName, active) => {
//   return require(`./assets/icon/${typeName.toLocaleLowerCase()}${active ? '-active' : ''}.svg`)
// }

// export default function (Vue) {
//   Vue.filter('timeFormate', function (raw, fmt) {
//     raw = raw.replace(/-/g, '/') // 兼容性处理：Safari无法将“YY-MM-DD”转成Date格式，可将全部“-”替换成“/”
//     const date = new Date(raw)
//     if (date.toString() === 'Invalid Date') {
//       return fmt
//     } // 参数校验
//     date.setHours(date.getHours() + 8)
//     const reg = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/
//     const [, YYYY, MM, DD, HH, mm, ss] = date.toISOString().match(reg)
//     return fmt.replace('YYYY', YYYY)
//       .replace('MM', MM)
//       .replace('DD', DD)
//       .replace('HH', HH)
//       .replace('mm', mm)
//       .replace('ss', ss)
//   })
//   Vue.filter('ellipsis', function (word, length) {
//     if (!word) return word
//     return word.length > length ? word.slice(0, length) + '...' : word
//   })
//   Vue.filter('partnerIcon', function (typeName, active) {
//     return require(`./assets/icon/${typeName.toLocaleLowerCase()}${active ? '-active' : ''}.svg`)
//   })
// }

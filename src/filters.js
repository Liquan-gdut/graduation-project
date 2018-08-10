export const ellipsis = (word, length) => {
  if (!word) return word
  return word.length > length ? word.slice(0, length) + '...' : word
}

/**
 * 日期/时间 格式化
 * @param {string|int} raw  传入的日期字符串或timestamp
 * @param {string} fmt  格式 [YYYY|YY]-MM-DD HH:mm:ss
 */

const addZero = (date) => {
  let temp = '00' + date.toString()
  return temp.slice(temp.length - 2, temp.length + 1)
}

export const timeFormate = (raw, fmt) => {
  // todo
  /**
   * test case:
   *  input raw=2018-08-10 fmt='YYYY/MM/DD'
   *  output 2018/08/10
   *
   *  input raw=1533212638286 fmt='MM/DD/YY HH:mm:ss'
   *  output 08/02/18 20:23:58
   */
  const date = new Date(raw)
  let dateFmt = fmt.toString()
  let newDate = {
    year: date.getFullYear(),
    month: addZero(date.getMonth() + 1), //  注意：月份是从“0”开始计算！
    day: addZero(date.getDate()),
    hour: addZero(date.getHours()),
    minu: addZero(date.getMinutes()),
    secon: addZero(date.getSeconds())
  }
  if (dateFmt.match(/y+/gi)) {
    if (dateFmt.match(/y+/gi)[0].length === 4) {
      dateFmt = dateFmt.replace(/y+/gi, newDate.year.toString())
    } else {
      dateFmt = dateFmt.replace(/y+/gi, newDate.year.toString().slice(2, 4))
    }
  }
  if (dateFmt.search(/m+/gi) >= 0) {
    dateFmt = dateFmt.replace(/m+/i, newDate.month)
  }
  if (dateFmt.search(/m+/gi) >= 0) {
    dateFmt = dateFmt.replace(/m+/i, newDate.minu)
  }
  if (dateFmt.search(/d+/gi) >= 0) {
    dateFmt = dateFmt.replace(/d+/gi, newDate.day)
  }
  if (dateFmt.search(/h+/gi) >= 0) {
    dateFmt = dateFmt.replace(/h+/gi, newDate.hour)
  }
  if (dateFmt.search(/s+/gi) >= 0) {
    dateFmt = dateFmt.replace(/s+/gi, newDate.secon)
  }
  return dateFmt
}
// /**
//  * @param {运动位置计算公式} lineFormula
//  * @param {直线两端点} x1,y1,x2,y2
//  * @param {返回结果} 下一点的y坐标
//  */
// export const lineFormula = function (x1, y1, x2, y2, x) {
//   return (x - x1) * (y2 - y1) / (x2 - x1) + y1
// }

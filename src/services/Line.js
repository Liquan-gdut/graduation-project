
/**
 * @param {Line}初始化每条“流水线”的起、拐、终点，方向，“绘画函数”，运动方向
 * @param {lineDraw}判断终点、判断拐点、画线、
 */
class Line {
  constructor (points, options) {
    this.points = points
    this.pointsNum = points.length
    this.options = options
    this.reset()
  }
  reset () {
    const [start, end] = this.points
    this.x = start[0]
    this.y = start[1]
    this.currentDirection = this.getUnit(start, end)
    this.lineStartPointIdx = 0
  }
  // 获取单位长度
  getUnit (start, end) {
    const getOffset = (idx) => end[idx] - start[idx]
    const offsetX = getOffset(0)
    if (offsetX === 0) return [0, 1]
    let angle = Math.atan(getOffset(1) / offsetX)
    if (offsetX < 0) angle += Math.PI
    return [Math.cos(angle), Math.sin(angle)]
  }

  lineDraw () {
    const {lineStartPointIdx, pointsNum, points, currentDirection, options} = this
    const [, start, end] = points.slice(lineStartPointIdx, lineStartPointIdx + 3)
    if (Math.abs(this.x - start[0]) < options.speed) {
      this.lineStartPointIdx++
      if (this.lineStartPointIdx === pointsNum - 1) {
        return this.reset()
      }

      this.currentDirection = this.getUnit(start, end)
    }
    this.x += currentDirection[0] * options.speed
    this.y += currentDirection[1] * options.speed
  }
}

export default Line

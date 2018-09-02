<template>
  <svg></svg>
</template>

<script>
import { getRandom } from '@/config'
import {select, range, easeLinear} from '@/services/d3'

export default {
  name: 'ProductionBanner',
  data: () => ({
    duration: 100,
    linkRadius: 300,
    grayLinkWidth: 3,
    bubbleNumber: 15,
    lineDropRate: 0.5,
    radiusMin: 5,
    radiusMax: 15,
    multiplier: 1.5,
    screenWidth: '',
    screenHeight: '',
    nodes: ''
  }),
  methods: {
    initial () {
      let screenWidth = this.screenWidth = document.body.clientWidth // window.screen.width
      let screenHeight = this.screenHeight = 640
      this.nodes = range(this.bubbleNumber).map((d, i) => ({
        cx: getRandom(0, screenWidth),
        cy: getRandom(0, screenHeight),
        vx: getRandom(-100, 100) / 25,
        vy: getRandom(-100, 100) / 25,
        r: getRandom(this.multiplier * this.radiusMin, this.multiplier * this.radiusMax),
        id: i
      }))

      let svg = select('svg')
        .style('width', screenWidth)
        .style('height', screenHeight)

      this.svg_lines = svg.append('g')

      // 定义一个径向渐变
      let defs = svg.append('defs')
      let radialGradient = defs.append('radialGradient')
        .attr('id', 'my-radialGradient')
      radialGradient.append('stop')
        .attr('offset', '0%')
        .style('stop-color', '#4A5CA6')
      radialGradient.append('stop')
        .attr('offset', '100%')
        .style('stop-color', '#28356A')

      this.svg_nodes = svg.append('g').selectAll('circle')
        .data(this.nodes)
        .enter()
        .append('circle')
        .attr('cx', d => d.cx)
        .attr('cy', d => d.cy)
        .attr('r', d => d.r)
        .attr('fill', 'url(#my-radialGradient)')
    },
    ticked () {
      let innerWidth = window.innerWidth
      let innerHeight = 640
      let duration = this.duration
      // let nodes = this.nodes

      let screenWidth = this.screenWidth
      let screenHeight = this.screenHeight

      this.svg_nodes.transition().duration(0)
        .attr('cx', d => {
          if (d.cx + d.r < ((screenWidth - innerWidth) / 2)) {
            d.cx += innerWidth + 2 * d.r
          }
          if (d.cx - d.r > ((screenWidth + innerWidth) / 2)) {
            d.cx -= innerWidth + 2 * d.r
          }
          return d.cx
        })
        .attr('cy', d => {
          if (d.cy + d.r < ((screenHeight - innerHeight) / 2)) {
            d.cy += innerHeight + 2 * d.r
          }
          if (d.cy - d.r > ((screenHeight + innerHeight) / 2)) {
            d.cy -= innerHeight + 2 * d.r
          }
          return d.cy
        })
      this.svg_nodes.transition().duration(duration).ease(easeLinear)
        .attr('cx', d => (d.cx += d.vx))
        .attr('cy', d => (d.cy += d.vy))

      // let links = []

      // for (let i = 0; i < nodes.length - 1; i++) {
      //   for (let j = i + 1; j < nodes.length; j++) {
      //     if (((nodes[i].cx - nodes[j].cx) * (nodes[i].cx - nodes[j].cx) + (nodes[i].cy - nodes[j].cy) * (nodes[i].cy - nodes[j].cy)) < this.linkRadius * this.linkRadius && (nodes[i].cx - nodes[i].r) > (screenWidth - innerWidth) / 2 && (nodes[i].cx + nodes[i].r) < (screenWidth + innerWidth) / 2 && (nodes[i].cy - nodes[i].r) > (screenHeight - innerHeight) / 2 && (nodes[i].cy + nodes[i].r) < (screenHeight + innerHeight) / 2 && (nodes[j].cx - nodes[j].r) > (screenWidth - innerWidth) / 2 && (nodes[j].cx + nodes[j].r) < (screenWidth + innerWidth) / 2 && (nodes[j].cy - nodes[j].r) > (screenHeight - innerHeight) / 2 && (nodes[j].cy + nodes[j].r) < (screenHeight + innerHeight) / 2) {
      //       links.push({
      //         source: i,
      //         target: j
      //       })
      //     }
      //   }
      // }
      // this.svg_lines.selectAll('line[ends]')
      //   .data(links, function (d) {
      //     // console.log('ends: ', ends)
      //     return d ? (d.source + '_' + d.target) : ('ends')
      //   })
      //   .transition().duration(duration).ease(easeLinear)
      //   .attr('x1', d => (nodes[d.source].cx))
      //   .attr('y1', d => (nodes[d.source].cy))
      //   .attr('x2', d => (nodes[d.target].cx))
      //   .attr('y2', d => (nodes[d.target].cy))
      //   .style('stroke-width', d => (d.source + d.target) % (1 / this.lineDropRate) < 1 ? '0' : '' + this.grayLinkWidth)

      // this.svg_lines.selectAll('line[ends]')
      //   .data(links, function (d) {
      //     return d ? (d.source + '_' + d.target) : ('ends')
      //   })
      //   .enter()
      //   .append('line')
      //   .attr('ends', d => (d.source + '_' + d.target))
      //   .attr('x1', d => (nodes[d.source].cx))
      //   .attr('y1', d => (nodes[d.source].cy))
      //   .attr('x2', d => (nodes[d.target].cx))
      //   .attr('y2', d => (nodes[d.target].cy))
      //   .style('stroke', '#3B4C91')
      //   .style('stroke-width', '0')
      //   .transition().duration(duration).ease(easeLinear)
      //   .style('stroke-width', d => (d.source + d.target) % (1 / this.lineDropRate) < 1 ? '0' : '' + this.grayLinkWidth)

      // this.svg_lines.selectAll('line[ends]')
      //   .data(links, function (d) {
      //     return d ? (d.source + '_' + d.target) : ('ends')
      //   })
      //   .exit()
      //   .attr('ends', null)
      //   .remove()
    },
    render () {
      this.initial()
      this.ticked()
      setInterval(this.ticked, this.duration)
    }
  },
  mounted () {
    this.render()
  }
}
</script>

<style lang="stylus" scoped>
svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 640px;
  background-color: #191948;
}
</style>

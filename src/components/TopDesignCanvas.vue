<template>
  <section class="top-design">
    <div class="title" >京东智能城市操作系统</div>
    <div class="image-box">
      <canvas id="canvas" ref="mycanvas"></canvas>
      <img src="@/assets/home/top-design_bg.png" alt="城市计算-顶层设计图" class="top-design_bg">
      <img src="@/assets/home/02data.png" alt="" class="animate animate-02">
      <img src="@/assets/home/01people.png" alt="待SEO完善" class="animate animate-01">
      <img src="@/assets/home/03cloud.png" alt="" class="animate animate-03">
      <img src="@/assets/home/04boli.png" alt="" class="animate animate-04">
      <img src="@/assets/home/05ditu.png" alt="" class="animate animate-05-1">
      <img src="@/assets/home/05zhuziquan.png" alt="" class="animate animate-05-2">
      <img src="@/assets/home/05zhuziguang.png" alt="" class="animate animate-05-3">
      <img src="@/assets/home/05cpu.gif" alt="" class="animate animate-05-4">
      <img src="@/assets/home/06luosi.png" alt="" class="animate animate-06">
      <img src="@/assets/home/07wenzi.png" alt="" class="animate animate-07">
      <img src="@/assets/home/08zhuanshi.png" alt="" class="animate animate-08">
      <img src="@/assets/home/09monny.png" alt="" class="animate animate-09">
      <img src="@/assets/home/10home.png" alt="" class="animate animate-10">
      <img src="@/assets/home/11star.png" alt="" class="animate animate-11">
      <img src="@/assets/home/12hospital.png" alt="" class="animate animate-12">
      <img src="@/assets/home/13jiaotongdeng.png" alt="" class="animate animate-13-1">
      <img src="@/assets/home/13jiaotongdeng.png" alt="" class="animate animate-13-2">
      <img src="@/assets/home/13jiaotongdeng.png" alt="" class="animate animate-13-3">
      <img src="@/assets/home/14huanbao.png" alt="" class="animate animate-14">
      <img src="@/assets/home/15xinyong.png" alt="" class="animate animate-15">
      <img src="@/assets/home/16gongan.png" alt="" class="animate animate-16">
      <img src="@/assets/home/17qiyeshuju.png" alt="" class="animate animate-17">
      <img src="@/assets/home/18phone.png" alt="" class="animate animate-18-1">
      <img src="@/assets/home/18phone.png" alt="" class="animate animate-18-2">
      <img src="@/assets/home/19computer.png" alt="" class="animate animate-19-1">
      <img src="@/assets/home/19computer.png" alt="" class="animate animate-19-2">
    </div>
  </section>
</template>

<script>
import Line from '@/services/Line'

const WIDTH = 1238
const HEIGHT = 683
const SPEED = 0.5
const RADIUS = 1.5
export default {
  name: 'TopDesignCanvas',
  data () {
    return {
      lineList: [],
      ctx: ''
    }
  },
  mounted () {
    const canvas = this.$refs.mycanvas // 获取“canvas”对象
    canvas.width = WIDTH
    canvas.height = HEIGHT
    this.ctx = canvas.getContext('2d')
    this.lineInitial()
    this.canvasRender()
  },
  methods: {
    rotate (vec, angle) {
      angle = angle * Math.PI / 180
      return [
        vec[0] * Math.cos(angle) - vec[1] * Math.sin(angle),
        vec[0] * Math.sin(angle) + vec[1] * Math.cos(angle)
      ]
    },
    lineInitial () {
      const settings = {
        speed: SPEED
      }
      /**
       * @param {lineList [Line]} 在此处初始化每一条“流水线”
       */
      this.lineList = [
        (new Line([[398, 528], [485, 476]], settings)),
        (new Line([[388, 558], [506, 489]], settings)),
        (new Line([[1003, 584], [892, 520]], settings)),
        (new Line([[1011, 564], [924, 514]], settings)),
        (new Line([[785, 369], [929, 286]], settings)),
        (new Line([[758, 360], [907, 273]], settings)),
        (new Line([[733, 350], [887, 261]], settings)),
        (new Line([[706, 340], [865, 247]], settings)),
        (new Line([[827, 147], [760, 106], [553, 106], [503, 135]], settings)),
        (new Line([[845, 128], [774, 87], [541, 87], [481, 122]], settings)),
        (new Line([[273, 380], [393, 448], [417, 434]], settings)),
        (new Line([[251, 392], [393, 474], [437, 450]], settings))
      ]
    },
    globalDraw () {
      const {ctx} = this
      ctx.globalCompositeOperation = 'source-over'
      // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillStyle = 'rgba(34, 59, 114, 0.1)'
      ctx.fillRect(0, 0, 1238, 683)
      ctx.globalCompositeOperation = 'lighter'

      this.lineList.forEach(line => {
        line.lineDraw()
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        // 画圆
        ctx.arc(line.x, line.y, RADIUS, 0, 6.3)
        ctx.fill()
      })
      for (let i = 0; i < this.lineList.length; i++) {
        // 移动粒子
        this.lineList[i].lineDraw()
      }
      requestAnimationFrame(this.globalDraw)
    },
    canvasRender () {
      this.ctx.fillStyle = 'rgb(34, 59, 114)'
      this.ctx.fillRect(0, 0, 1238, 683)

      this.globalDraw()
    }
  }
}
</script>
<style lang="scss" src='./TopDesignCanvas.styl' scoped></style>

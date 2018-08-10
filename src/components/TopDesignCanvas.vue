<template>
  <div id="top-design">
    <section class="top-design">
      <div class="title" style="color:#fff;">顶层设计</div>
      <div class="image-box">
        <img src="@/assets/home/top-design_bg.png" alt="城市计算-顶层设计图" class="top-design_bg">
        <img src="@/assets/home/02data.png" alt="" class="animate animate-02">
        <img src="@/assets/home/01people.png" alt="待SEO完善" class="animate animate-01">
        <img src="@/assets/home/03cloud.png" alt="" class="animate animate-03">
        <img src="@/assets/home/04boli.png" alt="" class="animate animate-04">
        <img src="@/assets/home/05zhuzi.png" alt="" class="animate animate-05-1">
        <img src="@/assets/home/05zhuziquan.png" alt="" class="animate animate-05-2">
        <img src="@/assets/home/05zhuziguang.png" alt="" class="animate animate-05-3">
        <img src="@/assets/home/05cpu.png" alt="" class="animate animate-05-4">
        <img src="@/assets/home/06luosi.png" alt="" class="animate animate-06">
        <img src="@/assets/home/07wenzi.png" alt="" class="animate animate-07">
        <img src="@/assets/home/08zhuanshi.png" alt="" class="animate animate-08">
        <img src="@/assets/home/09monny.png" alt="" class="animate animate-09">
        <img src="@/assets/home/10home.png" alt="" class="animate animate-10">
        <img src="@/assets/home/11star.png" alt="" class="animate animate-11">
        <img src="@/assets/home/12hospital.png" alt="" class="animate animate-12">
        <img src="@/assets/home/13jiaotongdeng.png" alt="" class="animate animate-13">
        <img src="@/assets/home/14huanbao.png" alt="" class="animate animate-14">
        <img src="@/assets/home/15xinyong.png" alt="" class="animate animate-15">
        <img src="@/assets/home/16gongan.png" alt="" class="animate animate-16">
        <img src="@/assets/home/17qiyeshuju.png" alt="" class="animate animate-17">
        <img src="@/assets/home/18phone.png" alt="" class="animate animate-18-1">
        <img src="@/assets/home/18phone.png" alt="" class="animate animate-18-2">
        <img src="@/assets/home/19computer.png" alt="" class="animate animate-19-1">
        <img src="@/assets/home/19computer.png" alt="" class="animate animate-19-2">
        <canvas id="canvas" ref="mycanvas"></canvas>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TopDesignCanvas',
  // directives: { // bug：绑定指令时，出现问题
  //   getCanvas: {
  //     componentUpdated(el) {
  //       // 注意：此处的自定义指令必须放在“created”里面，否则“DOM”渲染时就会调用，而“data实例”还未创建
  //       this.canvasWidth = el.width;
  //       this.canvasHeight = el.height;
  //       this.ctx = el.getContex("2d");
  //     }
  //   }
  // },
  data () {
    return {
      lineList: [],
      canvasHeight: 1238,
      canvasWidth: 683,
      ctx: ''
    }
  },
  mounted () {
    this.lineInitial()
    // console.log('mounted: ', this.ctx)
    this.canvasRender()
  },
  methods: {
    rotate (vec, angle) {
      // convert the angle from degrees to radians
      angle = angle * Math.PI / 180
      return [
        vec[0] * Math.cos(angle) - vec[1] * Math.sin(angle),
        vec[0] * Math.sin(angle) + vec[1] * Math.cos(angle)
      ]
    },
    lineInitial () {
      let canvas = this.$refs.mycanvas // 获取“canvas”对象
      this.canvasHeight = canvas.width = 1238
      this.canvasWidth = canvas.height = 683
      // console.log('initial: ', canvas.getContext('2d'))
      this.ctx = canvas.getContext('2d')
      let objectVue = this

      let settings = {
        speed: 1,
        radius: 1,
        color: '#fff'
      }

      let allDir = [
        // 每条线的方向设置
        this.rotate([1, 0], 330)
      ]

      /**
       * @param {Line}初始化每条“流水线”的起、拐、终点，方向，“绘画函数”，运动方向
       * @param {lineDraw}判断终点、判断拐点、画线、
       */
      class Line {
        constructor (xStart, yStart, xEnd, yEnd, dirs, runDir) {
          this.x = xStart
          this.y = yStart
          // this.breakPoint = breakPoint
          this.xEnd = xEnd
          this.yEnd = yEnd
          this.dirs = [dirs]
          this.dir = this.dirs[0] // 注意：此处不确定是否可以提前调用本对象中属性？？
          this.runDir = runDir
        }
        lineDraw () {
          if (((this.x >= this.xEnd) && (this.runDir === 'right')) || ((this.x <= this.xEnd) && (this.runDir === 'left'))) {
            this.x = this.xStart
            this.y = this.yStart
            this.dir = this.dirs[0]
          }
          // for (let i = 1; i < this.dirs.length; i++) {
          //   if ((this.breakPoint[i - 1].x - 1) < this.x < (this.breakPoint[i - 1].x + 1)) { // 注意：此处“拐点位置”判断方法待验证！
          //     this.dir = this.dirs[i]
          //   }
          // }
          // console.log('line draw: ', this.ctx, this)   bug注意：此处的“this”在class里面，指的是“Line”，不是“data”中的数据!
          objectVue.ctx.fillStyle = '#ffffff'
          objectVue.ctx.beginPath()
          // 画圆
          objectVue.ctx.arc(this.x, this.y, settings.radius, 0, 6.3)
          objectVue.ctx.fill()

          this.x += this.dir[0] * settings.speed
          this.y += this.dir[1] * settings.speed
        }
      }
      this.lineList = [
        (new Line(409, 525, 509, 473, allDir[0], 'right'))
      ]
    },
    globalDraw () {
      this.ctx.globalCompositeOperation = 'source-over'

      this.ctx.fillStyle = 'rgb(34, 59, 114, 0.03)'
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
      this.ctx.globalCompositeOperation = 'lighter'

      for (let i = 0; i < this.lineList.length; i++) {
        // 移动粒子
        this.lineList[i].lineDraw()
      }
      requestAnimationFrame(this.globalDraw)
    },
    canvasRender () {
      this.ctx.fillStyle = '#fff'
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

      this.globalDraw()
    }
    // let setting = {
    //   r: 0.8,
    //   v: 2.5
    // }
    // this.lineList[0] = {
    //   xStart: 750,
    //   yStart: 642,
    //   xEnd: 850,
    //   yEnd: 590,
    //   x: 750,
    //   y: 642,
    //   r: setting.r,
    //   v: setting.v,
    //   angle: 330,
    //   dir: this.rotate([1, 0], 330)
    // }
    // this.lineList[1] = {
    //   xStart: 754,
    //   yStart: 614,
    //   xEnd: 826,
    //   yEnd: 570,
    //   x: 754,
    //   y: 614,
    //   r: setting.r,
    //   v: setting.v,
    //   angle: 330,
    //   dir: this.rotate([1, 0], 330)
    // }
    // this.lineList[2] = {
    //   xStart: 1092,
    //   yStart: 408,
    //   xEnd: 1206,
    //   yEnd: 340,
    //   x: 1092,
    //   y: 408,
    //   r: setting.r,
    //   v: setting.v,
    //   angle: 330,
    //   dir: this.rotate([1, 0], 330)
    // }
    // this.lineList[3] = {
    //   xStart: 1114,
    //   yStart: 420,
    //   xEnd: 1228,
    //   yEnd: 354,
    //   x: 1114,
    //   y: 420,
    //   r: setting.r,
    //   v: setting.v,
    //   angle: 330,
    //   dir: this.rotate([1, 0], 330)
    // }
    // this.lineList[4] = {
    //   xStart: 1134,
    //   yStart: 433,
    //   xEnd: 1248,
    //   yEnd: 366,
    //   x: 1134,
    //   y: 433,
    //   r: setting.r,
    //   v: setting.v,
    //   angle: 330,
    //   dir: this.rotate([1, 0], 330)
    // }
    // this.lineList[5] = {
    //   xStart: 1156,
    //   yStart: 446,
    //   xEnd: 1270,
    //   yEnd: 380,
    //   x: 1156,
    //   y: 446,
    //   r: setting.r,
    //   v: setting.v,
    //   angle: 330,
    //   dir: this.rotate([1, 0], 330)
    // }
    // this.lineList[6] = {
    //   xStart: 1320,
    //   yStart: 666,
    //   xEnd: 1234,
    //   yEnd: 616,
    //   x: 1320,
    //   y: 668,
    //   r: setting.r,
    //   v: setting.v,
    //   angle: -150,
    //   dir: this.rotate([1, 0], -150)
    // }
    // this.lineList[7] = {
    //   xStart: 1340,
    //   yStart: 652,
    //   xEnd: 1254,
    //   yEnd: 602,
    //   x: 1340,
    //   y: 652,
    //   r: setting.r,
    //   v: setting.v,
    //   angle: -150,
    //   dir: this.rotate([1, 0], -150)
    // }
    // },
    // render () {
    //   this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    //   for (let i = 0; i < this.lineList.length; i++) {
    //     let _x = this.lineList[i].x
    //     let _y = this.lineList[i].y
    //     let _r = this.lineList[i].r
    //     let arpha = 1

    // if (_x >= this.lineList[i].xEnd && this.lineList[i].angle > 0) {
    //   this.lineList[i].x = this.lineList[i].xStart
    //   this.lineList[i].y = this.lineList[i].yStart
    // }
    // if (_x <= this.lineList[i].xEnd && this.lineList[i].angle < 0) {
    //   this.lineList[i].x = this.lineList[i].xStart
    //   this.lineList[i].y = this.lineList[i].yStart
    // }

    //     for (var j = 0; j < 25; j++) {
    //       // 此处“for循环”作用：画一个静态的“流水线”，许根据运动方向进行绘画
    //       this.ctx.beginPath()
    //       this.ctx.arc(_x, _y, _r, 0, Math.PI * 2, true)
    //       this.ctx.fillStyle = 'rgba(255,225,225,' + arpha + ')'

    //       this.ctx.shadowBlur = this.lineList[i].r * 4
    //       this.ctx.shadowColor = 'white'

    //       this.ctx.fill()
    //       // this.ctx.closePath();
    //       // 待完善：收尾效果在此处判断！！！
    //       // _x -= r * 1.5;
    //       // _y = runRightFormula(750, 644, 850, 590, _x);
    //       if (this.lineList[i].angle > 0) {
    //         _x -= this.lineList[i].dir[0] // 注意：此时必须与运动方向相反，画“流水线”的样式
    //         _y -= this.lineList[i].dir[1]
    //       } else {
    //         _x -= this.lineList[i].dir[0] // 注意：此时必须与运动方向相反，画“流水线”的样式
    //         _y -= this.lineList[i].dir[1]
    //       }
    //       if (_r <= 0) { // 画静态流水线时，半径、透明度递减到0时，默认为0，否则报错
    //         _r = 0
    //       } else {
    //         _r -= 0.02
    //       }
    //       if (arpha <= 0) {
    //         arpha = 0
    //       } else {
    //         arpha -= 0.04
    //       }
    //     }
    //     if (this.lineList[i].angle > 0) {
    //       this.lineList[i].x += this.lineList[i].dir[0] * this.lineList[i].v
    //       this.lineList[i].y += this.lineList[i].dir[1] * this.lineList[i].v
    //     } else {
    //       this.lineList[i].x += this.lineList[i].dir[0] * this.lineList[i].v
    //       this.lineList[i].y += this.lineList[i].dir[1] * this.lineList[i].v
    //     }
    //     // this.lineList[i].x += this.lineList[i].v; // 根据运动方向，确定下一次绘画的“圆心位置”。
    //     // this.lineList[i].y = runRightFormula(750, 644, 850, 590, this.lineList[i].x);
    //     // requestAnimationFrame(this.render)
    //     // 此处使用“requestAnimationFrame” 和 “setTimeout”效果基本一致，只是“默认时间”不同，兼容性不同
    //   }
    //   setTimeout(this.render, 30)
    // }
  }
}
</script>
<style lang="scss">
.title {
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  font-family: PingFangSC-Medium;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  color: #333;
}

section.top-design {
  height: 50rem;
  width: 120rem;
  position: relative;
  background-color: #223b72;
  .image-box {
    position: relative;
    margin: 0 auto;
    height: 683px;
    width: 1238px;
  }
  #canvas {
    display: block;
    // display: none;
    position: absolute;
    top: 0;
    margin: 0 auto;
    height: 683px;
    width: 1238px;
    z-index: 1;
  }
  .top-design_bg {
    z-index: 2;
  }
  .animate {
    position: absolute;
    z-index: 3;
  }
  .animate-01 {
    top: 547px;
    left: 1061px;
  }
  /*“个人数据”上下抖动动画效果*/
  @mixin dataUpAndDown($top, $left) {
    @keyframes data-Up {
      0% {
        top: $top;
        left: $left;
      }
      100% {
        top: $top + 15px;
        left: $left;
      }
    }

    @-moz-keyframes data-Up /* Firefox */ {
      0% {
        top: $top;
        left: $left;
      }
      100% {
        top: $top + 15px;
        left: $left;
      }
    }

    @-webkit-keyframes data-Up /* Safari 和 Chrome */ {
      0% {
        top: $top;
        left: $left;
      }
      100% {
        top: $top + 15px;
        left: $left;
      }
    }

    @-o-keyframes data-Up /* Opera */ {
      0% {
        top: $top;
        left: $left;
      }
      100% {
        top: $top + 15px;
        left: $left;
      }
    }
  }
  @include dataUpAndDown(459px, 1034px);

  // @keyframes data-Up {
  //   0%   {top: 459px; left: 1034px;}
  //   100% {top: 445px; left: 1034px;}
  // }

  // @-moz-keyframes data-Up /* Firefox */ {
  //   0%   {top: 459px; left: 1034px;}
  //   100% {top: 445px; left: 1034px;}
  // }

  // @-webkit-keyframes data-Up /* Safari 和 Chrome */
  // {
  //   0%   {top: 459px; left: 1034px;}
  //   100% {top: 445px; left: 1034px;}
  // }

  // @-o-keyframes data-Up /* Opera */ {
  //   0%   {top: 459px; left: 1034px;}
  //   100% {top: 445px; left: 1034px;}
  // }
  .animate-02 {
    top: 459px;
    left: 1034px;
    animation: data-Up 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: data-Up 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: data-Up 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: data-Up 0.9s linear 1s infinite alternate;
  }
  /*blinking“闪烁”动画效果*/
  @keyframes blinking {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes blinking /* Firefox */ {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes blinking /* Safari 和 Chrome */ {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes blinking /* Opera */ {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
  .animate-03 {
    top: 470px;
    left: 250px;
    opacity: 0.2;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }
  .animate-04 {
    top: 237px;
    left: 408px;
    opacity: 0.2;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }
  .animate-05-1 {
    top: 206px;
    left: 458px;
  }
  .animate-05-2 {
    top: 250px;
    left: 459px;
    opacity: 0.2;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }
  .animate-05-3 {
    top: 148px;
    left: 455px;
    opacity: 0.2;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }
  .animate-05-4 {
    top: 370px;
    left: 656px;
  }
  .animate-06 {
    top: 300px;
    left: 545px;
    opacity: 0.2;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }
  .animate-07 {
    top: 200px;
    left: 673px;
    z-index: 3;
  }
  /*“钻石”上下抖动动画效果*/
  @mixin diamondUpAndDown($top, $left) {
    @keyframes diamond-Up {
      0% {
        top: $top;
        left: $left;
      }
      100% {
        top: $top + 25px;
        left: $left;
      }
    }

    @-moz-keyframes diamond-Up /* Firefox */ {
      0% {
        top: $top;
        left: $left;
      }
      100% {
        top: $top + 25px;
        left: $left;
      }
    }

    @-webkit-keyframes diamond-Up /* Safari 和 Chrome */ {
      0% {
        top: $top;
        left: $left;
      }
      100% {
        top: $top + 25px;
        left: $left;
      }
    }

    @-o-keyframes diamond-Up /* Opera */ {
      0% {
        top: $top;
        left: $left;
      }
      100% {
        top: $top + 25px;
        left: $left;
      }
    }
  }
  @include diamondUpAndDown(150px, 478px);

  .animate-08 {
    top: 150px;
    left: 478px;
    animation: diamond-Up 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: diamond-Up 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: diamond-Up 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: diamond-Up 0.9s linear 1s infinite alternate;
  }
  .animate-09 {
    bottom: 390px;
    left: 1074px;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }
  .animate-10 {
    bottom: 420px;
    left: 1137px;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }
  .animate-11 {
    bottom: 420px;
    left: 985px;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }
  .animate-12 {
    bottom: 478px;
    left: 1068px;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }
  .animate-13 {
    bottom: 476px;
    left: 916px;
  }
  .animate-14 {
    bottom: 510px;
    left: 978px;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }

  /*“信用”上下抖动动画效果*/
  @mixin creditUpAndDown($bottom, $left) {
    @keyframes credit-Up {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 3px;
        left: $left + 3px;
      }
    }

    @-moz-keyframes credit-Up /* Firefox */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 3px;
        left: $left + 3px;
      }
    }

    @-webkit-keyframes credit-Up /* Safari 和 Chrome */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 3px;
        left: $left + 3px;
      }
    }

    @-o-keyframes credit-Up /* Opera */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 3px;
        left: $left + 3px;
      }
    }
  }
  @include creditUpAndDown(505px, 830px);
  .animate-15 {
    bottom: 505px;
    left: 830px;
    opacity: 0.6;
    animation: credit-Up 0.6s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: credit-Up 0.6s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: credit-Up 0.6s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: credit-Up 0.6s linear 1s infinite alternate;
  }

  /*“公安”上下抖动动画效果*/
  @mixin safeUpAndDown($bottom, $left) {
    @keyframes safe-Up {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 3px;
        left: $left + 3px;
      }
    }

    @-moz-keyframes safe-Up /* Firefox */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 3px;
        left: $left + 3px;
      }
    }

    @-webkit-keyframes safe-Up /* Safari 和 Chrome */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 3px;
        left: $left + 3px;
      }
    }

    @-o-keyframes safe-Up /* Opera */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 3px;
        left: $left + 3px;
      }
    }
  }
  @include safeUpAndDown(562px, 910px);
  .animate-16 {
    bottom: 562px;
    left: 910px;
    opacity: 0.6;
    animation: safe-Up 0.6s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: safe-Up 0.6s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: safe-Up 0.6s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: safe-Up 0.6s linear 1s infinite alternate;
  }

  .animate-17 {
    bottom: 257px;
    left: 56px;
    animation: blinking 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: blinking 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: blinking 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: blinking 0.9s linear 1s infinite alternate;
  }
  /*“手机”上下抖动动画效果*/
  @mixin phoneUpAndDown1($bottom, $left) {
    @keyframes phone-Up1 {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom + 4px;
        left: $left;
      }
    }

    @-moz-keyframes phone-Up1 /* Firefox */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom + 4px;
        left: $left;
      }
    }

    @-webkit-keyframes phone-Up1 /* Safari 和 Chrome */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom + 4px;
        left: $left;
      }
    }

    @-o-keyframes phone-Up1 /* Opera */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom + 4px;
        left: $left;
      }
    }
  }

  @mixin phoneUpAndDown2($bottom, $left) {
    @keyframes phone-Up2 {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom + 8px;
        left: $left;
      }
    }

    @-moz-keyframes phone-Up2 /* Firefox */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom + 8px;
        left: $left;
      }
    }

    @-webkit-keyframes phone-Up2 /* Safari 和 Chrome */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom + 8px;
        left: $left;
      }
    }

    @-o-keyframes phone-Up2 /* Opera */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom + 8px;
        left: $left;
      }
    }
  }
  @include phoneUpAndDown1(424px, 254px);
  @include phoneUpAndDown2(428px, 257px);
  .animate-18-1 {
    bottom: 424px;
    left: 254px;
    opacity: 0.4;
    animation: phone-Up1 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: phone-Up1 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: phone-Up1 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: phone-Up1 0.9s linear 1s infinite alternate;
  }
  .animate-18-2 {
    bottom: 428px;
    left: 257px;
    opacity: 0.6;
    animation: phone-Up2 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: phone-Up2 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: phone-Up2 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: phone-Up2 0.9s linear 1s infinite alternate;
  }

  /*“电脑”上下抖动动画效果*/
  @mixin computerUpAndDown1($bottom, $left) {
    @keyframes computer-Up1 {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 6px;
        left: $left + 5px;
      }
    }

    @-moz-keyframes computer-Up1 /* Firefox */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 6px;
        left: $left + 5px;
      }
    }

    @-webkit-keyframes computer-Up1 /* Safari 和 Chrome */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 6px;
        left: $left + 5px;
      }
    }

    @-o-keyframes computer-Up1 /* Opera */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 6px;
        left: $left + 5px;
      }
    }
  }

  @mixin computerUpAndDown2($bottom, $left) {
    @keyframes computer-Up2 {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 18px;
        left: $left + 12px;
      }
    }

    @-moz-keyframes computer-Up2 /* Firefox */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 18px;
        left: $left + 12px;
      }
    }

    @-webkit-keyframes computer-Up2 /* Safari 和 Chrome */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 18px;
        left: $left + 12px;
      }
    }

    @-o-keyframes computer-Up2 /* Opera */ {
      0% {
        bottom: $bottom;
        left: $left;
      }
      100% {
        bottom: $bottom - 18px;
        left: $left + 12px;
      }
    }
  }
  @include computerUpAndDown1(512px, 322px);
  @include computerUpAndDown2(520px, 327px);
  .animate-19-1 {
    bottom: 512px;
    left: 322px;
    opacity: 0.3;
    animation: computer-Up1 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: computer-Up1 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: computer-Up1 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: computer-Up1 0.9s linear 1s infinite alternate;
  }
  .animate-19-2 {
    bottom: 520px;
    left: 327px;
    opacity: 0.4;
    animation: computer-Up2 0.9s linear 1s infinite alternate;
    /* Firefox: */
    -moz-animation: computer-Up2 0.9s linear 1s infinite alternate;
    /* Safari 和 Chrome: */
    -webkit-animation: computer-Up2 0.9s linear 1s infinite alternate;
    /* Opera: */
    -o-animation: computer-Up2 0.9s linear 1s infinite alternate;
  }
}
</style>

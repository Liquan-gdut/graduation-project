<template>
  <div class="banner">
    <div class="home-banner_wrap">
      <div class="banner-box" v-swapper = "{curActiveNewsIdx: activeNewsIdx}">
        <span class="banner-content">
          <div class="banner-title content" @mouseover="clearCurInterval" @mouseout="setCurInterval">
            <p class="headline">用 AI 和大数据打造未来城市</p><br>
            <p class="subtitle">京东城市，依托城市计算这一多学科融合的新兴领域，利用人工智能技术（AI）和大数据,将城<br> 市中无处不在的感知系统与先进的数据管理方法、多元的时空大数据分析模型相结合，洞察城
              <br>市过去、掌控城市现在并预测和优化城市未来。
            </p><br>
            <button class="play-video" @click="setVideoPause(false)">观看视频</button>
          </div>
          <img src="@/assets/home/home-banner01-1.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner01">
          <img src="@/assets/home/home-banner01-2.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner01 blink">
        </span>
        <span class="banner-content">
          <div class="banner-title content" @mouseover="clearCurInterval" @mouseout="setCurInterval">
            <p class="headline">解决方案</p><br>
            <p class="subtitle">通过点线面结合的顶层设计和跨领域的垂直应用相结合，建设城市“操作系统”，为智能规划、<br> 智能交通、智能环保、智能能源等行业赋能，打造从规划、运维到预测的闭环、可持续发展<br>的新型互联网+智能城市模式。</p><br>
            <button class="play-video" v-navigate="`Solution/0`">查看详情</button>
          </div>
          <img src="@/assets/home/home-banner02-3.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner02-3">
          <img src="@/assets/home/home-banner02-1.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner02-1 blink">
          <img src="@/assets/home/home-banner02-2.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner02-2 blink1">
        </span>
        <span class="banner-content">
          <div class="banner-title content" @mouseover="clearCurInterval" @mouseout="setCurInterval">
            <p class="headline">产品技术</p><br>
            <p class="subtitle">我们拥有全球顶尖的大数据及AI研发团队，并与高校、科研院所紧密合作，强强联合攻关<br> 城市计算领域的前沿问题, 推进智能城市计算产、学、研、管、用一体化进程</p><br>
            <button class="play-video" v-navigate="`Production`">查看详情</button>
          </div>
          <img src="@/assets/home/home-banner03-1.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner03-1">
          <img src="@/assets/home/home-banner03-2.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner03-2">
          <img src="@/assets/home/home-banner03-3.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner03-3 blink">
          <img src="@/assets/home/home-banner03-4.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner03-4 blink1">
        </span>
        <span class="banner-content">
          <div class="banner-title content" @mouseover="clearCurInterval" @mouseout="setCurInterval">
            <p class="headline">用 AI 和大数据打造未来城市</p><br>
            <p class="subtitle">京东城市，依托城市计算这一多学科融合的新兴领域，利用人工智能技术（AI）和大数据,将城<br> 市中无处不在的感知系统与先进的数据管理方法、多元的时空大数据分析模型相结合，洞察城
              <br>市过去、掌控城市现在并预测和优化城市未来。
            </p><br>
            <button class="play-video" @click="setVideoPause(false)">观看视频</button>
          </div>
          <img src="@/assets/home/home-banner01-1.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner01">
          <img src="@/assets/home/home-banner01-2.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img home-banner01 blink">
        </span>
      </div>
      <div class="tog-box">
        <span class="tog" v-for="(i, idx) in 3" :key="idx"
         :class="{active:idx===activeNewsIdx}" @click="swapper(idx)"></span>
      </div>
    </div>
      <div v-if="!pause" class="mask" @click.self="setVideoPause(true)">
        <div class="video-port">
          <video class="long-video" preload="auto" controls>
            <source :src="longVideo" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <img src="../assets/icon/close.svg" alt="点击关闭视频" title="点击关闭视频" class="close-tog" @click="setVideoPause(true)" >
        </div>
      </div>
  </div>
</template>

<script>
import { swapper, navigate } from '@/directives'
import { LONG_VIDEO } from '@/config'
import {mapState} from 'vuex'

export default {
  name: 'HomeBanner',
  data: () => ({
    activeNewsIdx: 0,
    schedule: null,
    longVideo: '',
    pause: true,
  }),
  directives: {
    swapper,
    navigate,
    // stopSwap (el) {
    //   const vm = this
    //   el.addEventListener('mouseover', vm.clearCurInterval)
    //   el.addEventListener('mouseout', vm.setCurInterval)
    // }
  },
  mounted () {
    this.autoRun()
  },
  methods: {
    autoRun () {
      clearInterval(this.schedule)
      this.setCurInterval()
    },
    setCurInterval () {
      const len = 3
      this.schedule = setInterval(() => {
        this.activeNewsIdx = (this.activeNewsIdx + 1) % len
      }, 4000)
    },
    clearCurInterval () {
      if (this.schedule) {
        clearInterval(this.schedule)
      }
    },
    swapper (idx) {
      this.clearCurInterval()
      this.activeNewsIdx = idx
      this.setCurInterval()
    },
    setVideoPause (flag) {
      this.pause = flag
    }
  },
  created () {
    this.longVideo = LONG_VIDEO
  },
  computed: mapState({
    domScroll: state => state.domScroll
  })
}
</script>

<style lang='stylus' scoped>
@import '../mixins.styl';

/*blinking“闪烁”动画效果*/
@keyframes blinking {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
.blink {
  animation: blinking 0.7s linear 1s infinite alternate;
}
.blink1 {
  animation: blinking 0.7s linear 1.5s infinite alternate;
}

.banner {
  // position: relative;
  width: 100%;
  height: 800px;
  background-color: #12213c;
  .home-banner_wrap {
    position: relative;
    width: 100%;
    height: 800px;
    margin: 0 auto;
    overflow: hidden;
  }
  .banner-box {
    // position: relative;
    width: 400%;
    height: 800px;
    transition: all 0.3s ease;
  }
  .sleep { // 注意： sleep属性一定要放在box属性之后
    transition: none;
    transform: translate3D(0, 0, 0);
  }
  .banner-content {
    position: relative;
    float: left;
    width: 25%;
    height: 800px;
    overflow hidden
  }
  .banner_img {
    position: absolute;
    user-select:none;
  }
  .home-banner01 {
    bottom: 0;
    left: 0;
  }
  .home-banner02-1 {
    right: 142px;
    bottom: 0;
  }
  .home-banner02-2 {
    right: 78px;
    bottom: 126px;
  }
  .home-banner02-3 {
    right: 0;
    bottom: 0;
  }
  .home-banner03-1 {
    bottom: 0;
    right: 0;
  }
  .home-banner03-2 {
    bottom: 93px;
    right: 745px;
  }
  .home-banner03-3 {
    bottom: 0;
    right: 36px;
  }
  .home-banner03-4 {
    bottom: 0;
    right: 173px;
  }

  .banner-title {
    position absolute
    left 50%
    transform translateX(-50%)
    top 200px
    width 1200px
    color: white;
    // padding-top: 200px;
    text-align: left;
    z-index: 10;

    .headline {
      font-size:60px;
      font-family:SourceHanSansCN-Medium;
      font-weight:500;
    }

    .subtitle {
      font-family:SourceHanSansCN-Normal;
      line-height: 2rem;
      opacity: 0.7;
    }
    .play-video {
      position: relative;
      width: 116px;
      height: 40px;
      letter-spacing: 1.5px;
      padding-bottom: 5px;
      font-family: inherit;
      font-size: 16px;
      color: #FFFFFF;
      background-color: #4285F4;
      border-color: rgba(255, 255, 255, 0);
      border-radius: 4px;
      cursor: pointer;
      outline:none;
      &:hover {
        background-color: #458CFF;
      }
    }
  }
}

full()
  top 0
  bottom 0
  left 0
  right 0
.mask
  full()
  position fixed
  background rgba(0,0,0,.6)
  z-index 20
  .video-port
    position absolute
    width 61.8%
    $set-center()
    .long-video
      width 100%
  .close-tog
    display none
    position absolute
    top 0
    right 0
    cursor pointer
  .video-port:hover > .close-tog
    display block

#banner-canvas {
  width: 1200px;
  height: 800px;
  position: absolute;
  left: 50%;
  margin-left: -600px;
}
</style>

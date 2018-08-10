<template>
  <div class="icityIndex">
    <div class="content">
      <header class="header">
        <navigators :focusIdx='0'></navigators>
        <div class="banner">
          <div class="banner-title home-content">
            <p class="headline">用 AI 和大数据打造未来城市</p><br>
            <p class="subtitle">京东城市，依托城市计算这一多学科融合的新兴领域，利用大数据和人工智能技术，<br>
将城市中无处不在的感知系统与先进的数据管理方法、多元的时空大数据分析模型相结合，<br>
洞察城市过去、掌控城市现在并预测和优化城市未来。</p>
          </div>
          <img src="../assets/home/home-banner01.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img">
          <img src="../assets/home/home-banner02.png" alt="京东城市-用AI和大数据打造未来城市" class="banner_img blink">
        </div>
      </header>
      <TopDesignCanvas></TopDesignCanvas>
      <section class="advantage">
        <div class="title">我们优势</div>
        <div class="content-box">
          <div class="col">
            <span class="item">
              <p class="icon">
                <img class="icon-01 icon-test" src="../assets/home/icon-jishu.png" alt="待完善SEO" title="技术优势">
                <!-- <img class="icon-02" src="../assets/home/icon-1.2jishu.png" alt="待完善SEO" title="技术优势"> -->
              </p>
              <h3 class="item-title">技术</h3>
              <p class="text">城市计算平台，多源数据融合技术，基于隐私保护的数据聚<br>合，
                时空数据管理和挖掘算法，特殊AI和机器学习算法。</p>
            </span>
            <span class="item">
              <p class="icon">
                <img class="icon-01" src="../assets/home/icon-2.1jingyan.png" alt="待完善SEO" title="经验优势">
                <img class="icon-02" src="../assets/home/icon-2.2jingyan.png" alt="待完善SEO" title="经验优势">
              </p>
              <h3 class="item-title">经验</h3>
              <p class="text">百人大数据+AI高精尖研发团队，90%以上博士学位和留学背<br>景，
                国内落地众多项目，丰富实战经验，产、学、研一体化能<br>力和经验，深刻的业务逻辑理解:
                 环境、交通、规划、商业、<br>公共安全</p>
            </span>
          </div>
          <div class="col">
            <span class="item">
              <p class="icon">
              <img class="icon-01" src="../assets/home/icon-jingyan.jpg" alt="待完善SEO" title="数据优势">
              </p>
              <h3 class="item-title">数据</h3>
              <p class="text">海量、多维、动态的大数据，京东商城、物流4亿+用户数据<br>积累，
                金融每天新增数据量200TB，数百万合作伙伴数据。</p>
            </span>
            <span class="item">
              <p class="icon">
                <img class="icon-01" src="../assets/home/icon-4.1pinpai.png" alt="待完善SEO" title="品牌优势">
                <img class="icon-02" src="../assets/home/icon-4.2pinpai.png" alt="待完善SEO" title="品牌优势">
              </p>
              <h3 class="item-title">品牌</h3>
              <p class="text">背靠世界500强企业，为600多家金融机构服务，强大的渠道<br>资源，
                产生经济效益哺育城市。</p>
            </span>
          </div>
        </div>
      </section>
      <section class="map">
        <div class="title">全国布局</div>
      </section>
      <section class="connect-us">
        <div class="connect-content">
          <p class="connect-title">联系我们</p>
          <p class="email">icity@jd.com</p>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Navigators from '@/components/navigators.vue'
import Slide from '@/components/slide.vue'
import TopDesignCanvas from '@/components/TopDesignCanvas.vue'
import serverList from '@/api/scenario'
import {partners} from '@/api/home'
import {navigate} from '@/directives'
import newsList from '@/api/news'
import {ellipsis} from '@/filters'

export default {
  name: 'Home',
  components: {
    Navigators,
    Slide,
    TopDesignCanvas
  },
  directives: {
    navigate,
    swapper (el, {value}) {
      const setTranslate = (times) => {
        el.style.transform = `translate3D(-${times * 715}px, 0, 0)`
        el.style.webkitTransform = `translate3D(-${times * 715}px, 0, 0)`
      }
      if (value === 0) {
        setTranslate(3)
        setTimeout(() => {
          el.classList.add('sleep')
          setTranslate(0)
          setTimeout(() => el.classList.remove('sleep'), 100)
        }, 300)
        return
      }
      setTranslate(value)
    }
  },
  data () {
    return {
      serverList,
      newsList: newsList.slice(0, 3), //  调用接口：返回“新闻对象 数组”
      activeNewsIdx: 0,
      schedule: null,
      partners: partners.map(i => (i.times = 0) || i),
      currentSlider: 1
    }
  },
  methods: {
    swapper (idx) {
      this.activeNewsIdx = idx
      this.autoRun()
    },
    go (path) {
      this.$router.push(path)
    },
    autoRun () {
      clearInterval(this.schedule)
      const len = this.newsList.length
      this.schedule = setInterval(() => {
        this.activeNewsIdx = (this.activeNewsIdx + 1) % len
      }, 3000)
    }
  },
  mounted () {
    this.autoRun()
  },
  filters: {
    ellipsis
  }
}
</script>
<style lang="scss" scoped src='./Home.styl'></style>

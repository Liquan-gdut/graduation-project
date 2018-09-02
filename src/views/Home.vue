<template>
  <div class="container">
    <HomeBanner></HomeBanner>
    <TopDesignCanvas></TopDesignCanvas>
    <section class="advantage black-text">
      <div class="title">我们的优势</div>
      <div class="content-box content">
          <span class="item item1">
            <p class="icon icon-technology">
              <img class="icon-01 technology1" src="../assets/home/icon-1.1jishu.svg" alt="待完善SEO" title="技术优势">
              <img class="icon-02 technology2" src="../assets/home/icon-1.2jishu.svg" alt="待完善SEO" title="技术优势">
            </p>
            <h4 class="item-title">技术</h4>
            <p class="text">城市计算平台，多源数据融合技术，基于隐私保护的数据聚<br>合，
              时空数据管理和挖掘算法，特殊AI和机器学习算法。</p>
          </span>
          <span class="item item2">
            <p class="icon icon-experience">
              <img class="icon-01 " src="../assets/home/icon-2.1jingyan.svg" alt="待完善SEO" title="经验优势">
              <img class="icon-02 experience2" src="../assets/home/icon-2.2jingyan.svg" alt="待完善SEO" title="经验优势">
            </p>
            <h4 class="item-title">经验</h4>
            <p class="text">百人大数据+AI高精尖研发团队，90%以上博士学位和留学背<br>景，
              国内落地众多项目，丰富实战经验，产、学、研一体化能<br>力和经验，深刻的业务逻辑理解:
                环境、交通、规划、商业、<br>公共安全。</p>
          </span>
          <span class="item item3">
            <p class="icon data">
            <img class="icon-01 data-1" src="../assets/home/icon-shuju.jpg" alt="待完善SEO" title="数据优势">
            <img class="icon-02 data-2" src="../assets/home/icon-shuju.gif" alt="待完善SEO" title="数据优势">
            </p>
            <h4 class="item-title">数据</h4>
            <p class="text">海量、多维、动态的大数据，京东商城、物流、4亿+用户数据<br>积累，
              金融每天新增数据量200TB，数百万合作伙伴数据。</p>
          </span>
          <span class="item item4">
            <p class="icon">
              <img class="icon-01" src="../assets/home/icon-4.1pinpai.svg" alt="待完善SEO" title="品牌优势">
              <img class="icon-02 brand2" src="../assets/home/icon-4.2pinpai.svg" alt="待完善SEO" title="品牌优势">
            </p>
            <h4 class="item-title">品牌</h4>
            <p class="text">背靠世界500强企业，为600多家金融机构服务，强大的渠道<br>资源，
              产生经济效益哺育城市。</p>
          </span>
      </div>
    </section>
    <section class="map">
      <h3 class="title">全国布局</h3>
      <v-map></v-map>
    </section>
    <section class="connect-us">
      <span class="bg-color"></span>
      <div class="connect-content">
        <p class="connect-title">联系我们</p>
        <p class="email">icity@jd.com</p>
      </div>
    </section>
  </div>
</template>
<script>
import TopDesignCanvas from '@/components/TopDesignCanvas.vue'
import HomeBanner from '@/components/HomeBanner.vue'
import VMap from '@/components/map.vue'

export default {
  name: 'Home',
  components: {
    TopDesignCanvas,
    HomeBanner,
    VMap
  },
}
</script>
<style lang="stylus" scoped src='./Home.styl'></style>

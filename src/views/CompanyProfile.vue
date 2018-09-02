<template>
  <div id="company-profile">
    <div class="company-introduc content black-text">
      <h3 class="title">公司简介</h3>
      <p class="introduc">京东城市，依托城市计算这一多学科融合的新兴领域， 利用大数据和人工智能技术（AI），
        将城市中无处不在的感知系统与先进的数据管理方法、多元的时空大数据分析模型相结合，
          洞察城市过去、掌控城市现在并预测和优化城市未来。借力京东集团在电商、物流、金融等方面多年的大数据积累，
          致力为城市环境、交通、规划、能耗、商业、安全、医疗、信用城市和电子政务等领域提供智能解决方案。<br><br>
          京东城市，拥有数百人的大数据和人工智能领域高、精、尖的研发团队，90%以上的成员拥有博士学位和海外留学背景。
          团队成员不仅发表了国际顶尖论文百余篇，具有深厚的学术和科研功底，也在国内落地了众多大数据和人工智能项目，
          具备丰富的实战经验。<br> <br> 京东城市成立短短数月，已经为近30座城市的地方政府提供技术服务，同时跟多个大型国有企业，
          以及清华大学、上海交通大学、中央财经大学、西南交通大学等20余所知名高校开展深入的合作，
          不仅攻关了一系列城市痛点和社会难题，还培养了一大批优秀的复合型人才。<br> <br> 通过京东集团城市计算研究院，
          京东城市与高校、科研院所紧密合作，强强联手攻关城市计算领域前沿问题，推进城市计算产、学、研、管、用一体化进程，
          助力人工智能技术与实体经济的有机结合，提高城市的运转效率和人民生活水平，确保城市生态的可持续发展，
          源源不断地为政府、企业、民众创造价值。<br><br>  京东城市致力于成为中国顶尖的城市智能解决方案供应商和产学研一体化的典范，
            用大数据和人工智能驱动城市智慧化进程， 打造新型智能城市。</p>
      <div class="play-video">
        <img src="../assets/icon/play-video.png" alt="点击查看完整视频" title="点击查看完整视频" class="play-tog" @click="setVideoPause(false)" >
        <div class="hover-bg"></div>
        <video v-if="pause" class="short-video" loop="loop" autoplay>
          <source :src="shortVideo" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div v-else class="mask" @click.self="setVideoPause(true)">
          <div class="video-port">
            <video class="long-video" preload="auto" controls>
              <source :src="longVideo" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <img src="../assets/icon/close.svg" alt="点击关闭视频" title="点击关闭视频" class="close-tog" @click="setVideoPause(true)" >
          </div>
        </div>
      </div>
    </div>
    <div class="box white-text">
      <div class="culture">
        <div class="cul-img" alt="京东城市使命、文化、价值观"></div>
        <div class="cul-content">
          <div class="cul-introduc" v-for="(cul, idx) in culture" :key="idx">
            <h4 class="cul-title">{{cul.title}}</h4>
            <p class="cul-desc">{{cul.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VVideo from '@/components/VVideo.vue'
import {SHORT_VIDEO, LONG_VIDEO} from '@/config'

export default {
  name: 'CompanyProfile',
  data: () => ({
    culture: [
      {
        title: '使命',
        desc: '京东城市——用大数据和AI打造未来城市'
      },
      {
        title: '文化',
        desc: '创新  科技  专业  奋斗  激情'
      },
      {
        title: '价值观',
        desc: '社会责任  家国情怀  正道成功  勇于挑战  快速学习'
      },
    ],
    shortVideo: '',
    longVideo: '',
    pause: true
  }),
  components: { VVideo },
  created () {
    this.shortVideo = SHORT_VIDEO
    this.longVideo = LONG_VIDEO
  },
  methods: {
    setVideoPause (flag) {
      this.pause = flag
    }
  }
}
</script>

<style lang="stylus" scoped src='./CompanyProfile.styl'></style>

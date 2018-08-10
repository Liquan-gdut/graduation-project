<template>
  <div class="content">
    <navigators :focusIdx="3"></navigators>
    <img src="../assets/aboutus-banner.jpg" alt="" class="banner">
    <div class="box boss">
      <img src="../assets/boss-avator.jpg" alt="" class="avator">
      <p class="title">团队负责人</p>
      <p class="subtitle">郑宇 （ 博士、教授、博导 ）</p>
      <p class="msg">
        2018年2月加入京东集团，担任京东金融集团副总裁、首席数据科学家，
        城市计算事业部总裁和城市计算研究院院长，京东集团 一 城市计算事业部总裁。
        在加入京东之前，他在微软亚洲研究院工作近12年时间，担任城市计算领域的负责人。
        <a href="http://urban-computing.com/yuzheng" target="_blank">[个人主页]</a>
      </p>
      <div class="wraper">
        <ul class="left">
          <li class="subtitle">个人荣誉</li>
          <li>2013年全球杰出青年创新者-《MTT 科技评论》</li>
          <li>2014年中国 40 位 40 岁以下商界精英-《财富》</li>
          <li>2016年美国计算机学会杰出科学家</li>
          <li>2017年中国 AI 英雄风云榜十大技术创新人物</li>
        </ul>
        <ul class="right">
          <li class="subtitle">学术兼职</li>
          <li>人工智能国际顶级期刊 ACM TIST 主编</li>
          <li>上海交通大学讲座教授、博士生导师</li>
          <li>大数据知名国际会议工业界主席</li>
          <li>ACM 数据挖掘中国分会秘书长</li>
        </ul>
      </div>
    </div>
    <div class="box">
      <p class="title">团队介绍</p>
      <p class="subtitle">京东城市：用AI和大数据打造未来城市</p>
      <p class="paragraph">
        <b>京东城市</b>，依托城市计算这一多学科融合的新兴领域， 利用大数据和人工智能技术（AI）， 将城市中无处不在的感知系统与先进的数据管理方法、多元的时空大数据分析模型相结合， 洞察城市过去、掌控城市现在并预测和优化城市未来。借力京东集团在电商、物流、金融等方面多年的大数据积累，致力为城市环境、交通、规划、能耗、商业、安全、医疗、信用城市和电子政务等领域提供智能解决方案。
      </p>
      <p class="paragraph">
        京东城市，拥有数百人的大数据和人工智能领域高、精、尖的研发团队，90%以上的成员拥有博士学位和海外留学背景。团队成员不仅发表了国际顶尖论文百余篇，具有深厚的学术和科研功底；也在国内落地了众多大数据和人工智能项目，具备丰富的实战经验。
      </p>
      <p class="paragraph">
        京东城市成立短短数月，已经为国家发改委城市和小城镇改革发展中心、环保部、水利部、交通部等多个中央部委，以及北京、上海、广州、深圳、南京、福州、雄安等30多座城市的地方政府提供技术服务，同时跟国家能源集团、联通集团、北控集团等多个大型国有企业，以及清华大学、上海交通大学、中央财经大学、西南交通大学等20余所知名高校开展深入的合作，不仅攻关了一系列城市痛点和社会难题，还培养了一大批优秀的复合型人才。
      </p>
      <p class="paragraph">
        通过京东集团城市计算研究院，京东城市与高校、科研院所紧密合作，强强联手攻关城市计算领域前沿问题，推进城市计算产、学、研、管、用一体化进程，助力人工智能技术与实体经济的有机结合，提高城市的运转效率和人民生活水平，确保城市生态的可持续发展，源源不断地为政府、企业、民众创造价值。
      </p>
      <p class="paragraph">
        京东城市致力于成为中国顶尖的城市智能解决方案供应商和产学研一体化的典范， 用大数据和人工智能驱动城市智慧化进程， 打造新型智能城市。
      </p>

    </div>
  </div>
</template>

<script>
import Navigators from '../components/navigators.vue'
export default {
  components: { Navigators }
}
</script>

<style lang="scss" scoped src="./Aboutus.styl"></style>

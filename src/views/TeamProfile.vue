<template>
  <div class="team-profile black-text">
    <div class="team content">
      <h3 class="title">团队简介</h3>
      <p class="introduction">京东城市，拥有数百人的大数据和人工智能领域高、精、尖的研发团队，
        90%以上的成员拥有博士学位和海外留学背景。团队成员不仅发表了国际顶尖论文百余篇，
        具有深厚的学术和科研功底，也在国内落地了众多大数据和人工智能项目，具备丰富的实战经验。</p>
    </div>
    <div class="box">
      <div class="boss content">
        <img src="../assets/aboutus/boss-avator.jpg" alt="" class="avator">
        <h3 class="title">团队负责人</h3>
        <p class="subtitle">郑宇 （ 博士、教授、博导 ）</p>
        <p class="msg">
          2018年2月加入京东集团，担任京东金融集团副总裁、首席数据科学家，
          京东城市计算事业部总经理和京东智能城市研究院院长。在加入京东之前，
          他在微软亚洲研究院工作近12年时间，担任城市计算领域的负责人。<br>
          <a href="http://urban-computing.com/yuzheng" target="_blank" class="homepage">[个人主页]</a>
        </p>
        <div class="wraper">
          <ul class="left">
            <li class="subtitle">个人荣誉</li>
            <li class="list-item"><div class="icon"></div>2013年全球杰出青年创新者-《MTT 科技评论》</li>
            <li class="list-item"><div class="icon"></div>2014年中国 40 位 40 岁以下商界精英-《财富》</li>
            <li class="list-item"><div class="icon"></div>2016年美国计算机学会杰出科学家</li>
            <li class="list-item"><div class="icon"></div>2017年中国 AI 英雄风云榜十大技术创新人物</li>
          </ul>
          <ul class="right">
            <li class="subtitle">学术兼职</li>
            <li class="list-item"><div class="icon"></div>人工智能国际顶级期刊 ACM TIST 主编</li>
            <li class="list-item"><div class="icon"></div>上海交通大学讲座教授、博士生导师</li>
            <li class="list-item"><div class="icon"></div>大数据知名国际会议工业界主席</li>
            <li class="list-item"><div class="icon"></div>ACM 数据挖掘中国分会秘书长</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TeamProfile'
}
</script>

<style lang="stylus" scoped src='./TeamProfile.styl'></style>

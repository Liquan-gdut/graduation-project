<template>
  <div class="content">
    <navigators :focusIdx="2"></navigators>
    <img src="../assets/scentificReseach.png" alt="" class="banner">
    <div class="title">
      <p class="headline">研发成果</p>
      <p class="subtitle">专注于城市计算，提供全面的服务支持</p>
    </div>
    <ul class="tabs">
      <li class="tab" v-for='(tab, idx) in tabs' :class="[`tab-${idx}`, {active: idx === 0}]"
        :key='idx'
        v-hover-el="{cur: tab.hoverId, all: tabs.map(i=>i.hoverId)}">
        <div class="tab-desc">
          <div class="icon"></div>
          <div class="right">
            <p class="nav-title">{{tab.title}}</p>
            <p class="nav-subtitle">{{tab.subtitle}}</p>
          </div>
        </div>
      </li>
    </ul>

    <div id='platform' class="list-item">
      <div class="list-item-banner">
        <img src="../assets/platform-banner-1.jpg" alt="" class="list-item-img">
        <div class="mask">
          <p class="list-item-title">城市计算平台</p>
          <p class="list-item-desc">通过把时空数据标准化、智能算法模块化，高效支撑涵盖交通、规划、环境、能耗、政务、公共和商业等领域的垂直应用，提供点、线、面结合的智能城市整体解决方案，为城市打造从合理规划、到高效运维、再到精准预测的闭环、可持续发展生态
          </p>
          <div class="space-around">
            <div class="list-item-box">
              <p class="list-item-sub-title">平台特色</p>
              <ul>
                <li>
                  <img src="../assets/research/standard.png" alt="">
                  <span>数据标准化</span><br/>利用六个时空数据模型收纳城市万千数据，扩展性强
                </li>
                <li>
                  <img src="../assets/research/model.png" alt="">
                  <span>算法模块化</span><br/>归纳差异化应用背后的公共算法，复用率高，开发成本低
                </li>
                <li>
                  <img src="../assets/research/shengtai.png" alt="">
                  <span>平台生态化</span><br/>赋能云计算，支持用户利用模块化组件快速开发应用
                </li>
                <li>
                  <img src="../assets/research/duoyanghua.png" alt="">
                  <span>场景多样化</span><br/>高效支撑多领域垂直应用，提供点线面整体解决方案
                </li>
              </ul>
            </div>
            <div class="list-item-box">
              <div>
                <p class="list-item-sub-title">技术优势</p>
                <ul>
                  <li>
                    <img src="../assets/research/bigdata.png" alt="">
                    <span>时空大数据</span><br/>深度理解城市数据的时空属性，大幅提升数据处理效率
                  </li>
                  <li>
                    <img src="../assets/research/ronghe.png" alt="">
                    <span>多源数据融合</span><br/>叠加数据潜能，实现多领域数据1+1大于2的知识发现
                  </li>
                  <li>
                    <img src="../assets/research/ai.png" alt="">
                    <span>AI赋能</span><br/>为城市量身定制AI模型，精确打击城市痛点
                  </li>
                  <li>
                    <img src="../assets/research/data.png" alt="">
                    <span>数据安全</span><br/>三级数据共享机制，保护用户隐私和部门数据权益
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="list-item-banner">
        <img src="../assets/research/city-credit.jpg" alt="" class="list-item-img">
        <div class="mask">
          <p class="list-item-title">智能城市信用平台</p>
          <p class="list-item-desc">
          融合政府和企业的多源数据，基于人工智能算法打造城市中居民、企业和政府的信用体系，方便人们的衣、食、住、行，简化政务的办理流程，并为企业的贷款和融资提供基石。AI让信用更坚实，信用让生活更美好
          </p>
          <div class="list-item-box">
            <p class="list-item-sub-title">平台特色</p>
            <ul>
              <li>
                <img src="../assets/research/duoyuan.png" alt="">
                <span>多源数据</span><br/>融合政府和企业数据，全方位刻画信用
              </li>
              <li>
                <img src="../assets/research/xifen.png" alt="">
                <span>场景细分</span><br/>为不同场景计算不同信用，提供精准信用服务
              </li>
              <li>
                <img src="../assets/research/risk.png" alt="">
                <span>风险预判</span><br/>预判信用风险，提前处置，降低事发后的管理成本
              </li>
              <li>
                <img src="../assets/research/gaoxiao.png" alt="">
                <span>高效更新</span><br/>快速纳入主体状态变化，极速更新信用分数
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <ul  id='paper' class="paper-list hidden">
      <li v-for="(paper, idx) in papers" :key="idx"
        class="paper"
        :class="{'paper-left': idx%2 === 0}">
        <a target="_blank" :href="paper.link">
          <div class="paper-cover">
            <div class="paper-type">
              {{paper.type | paperType}}
            </div>
            <img :src="paper.cover" alt="">
          </div>
        </a>
        <div class="paper-desc">
          <p class="paper-name">{{paper.name}}</p>
          <p class="paper-tips">作者：{{paper.author}}</p>
          <p class="paper-tips">发表：{{paper.press}}</p>
          <!-- <p class="paper-tips">时间：{{paper.time}}</p> -->
          <a v-if="paper.link" :href="paper.link" target="_blank" class="btn-paper-detail">查看详情</a>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>

import Navigators from '../components/navigators.vue'
import { papers, paperTypes } from '@/api/research'

export default {
  data: () => ({
    activeTab: 0,
    tabs: [{
      title: '平台开发',
      subtitle: '致力于研发决策支持',
      hoverId: 'platform'
    },
    {
      title: '科研论文',
      subtitle: '有价值的生产实践和科研课题',
      hoverId: 'paper'
    }],
    papers
  }),
  methods: {
    changeTab (idx) {
      this.activeTab = idx
    }
  },
  filters: {
    paperType (type) {
      return paperTypes[type] || paperTypes[0]
    }
  },
  components: {
    Navigators
  },
  directives: {
    hoverEl (el, {value}) {
      const {cur, all} = value
      el.addEventListener('mouseenter', () => {
        // terrible  for hover event
        Array.prototype.slice.call(document.getElementsByClassName('tab')).map(i => {
          i.classList.remove('active')
        })
        el.classList.add('active')

        all.forEach(id => {
          document.getElementById(id).style.display = 'none'
        })
        document.getElementById(cur).style.display = 'block'
      })
    }
  }
}
</script>

<style lang='scss' src='./ScientificResearch.styl' scoped>
</style>

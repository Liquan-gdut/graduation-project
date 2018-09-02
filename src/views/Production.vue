<template>
  <div>
    <div class="banner">
      <!-- <ProductionBanner></ProductionBanner> -->
      <div class="content title white-text">
        <h2>产品技术</h2>
        <p>我们拥有全球顶尖的大数据及AI研发团队，并与高校、科研院所紧密<br>合作，强强联合攻关城市计算领域的前沿问题, 推进智能城市计算产、<br>学、研、管、用一体化进程</p>
      </div>
      <ul class="tabs">
        <li class="tab" v-for='(tab, idx) in tabs' :class="{'active': idx === 0}" :key='idx' v-click-el="{cur: tab.clickId, all: tabs.map(i=>i.clickId)}" @click="changeTab(idx)">
          <div class="tab-desc">
            <img :src="tabsIcon(idx)"
            :alt="tab.subtitle" class="icon">
            <div class="right">
              <p class="nav-title">{{tab.title}}</p>
              <p class="nav-subtitle">{{tab.subtitle}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div id='platform' class="list-item">
      <div class="content black-text introduction">
        <div class="left">
          <h2>城市计算平台</h2>
          <p>通过把时空数据标准化、智能算法模块化，高效支撑涵盖交通、规划、环境、能耗、政务、公共和商业等领域的垂直应用，提供点、线、面结合的智能城市整体解决方案，为城市打造从合理规划、到高效运维、再到精准预测的闭环、可持续发展生态。</p>
        </div>
        <img v-if="platformcategory.length" class="right" :src="platformcategory[0].img" alt="城市计算平台">
      </div>

      <div class="system content black-text">
        <h3>平台体系架构</h3>
        <img v-if="platformcategory.length" class="system-img" :src="platformcategory[0].architecture" alt="平台体系架构">
      </div>
      <div class="features content black-text">
        <h3>平台特色</h3>
        <ul class="feature-list">
          <template v-for="(feature, idx) in featureList">
            <li class="feature" :key="idx">
              <img :src="feature.icon" alt="feature.name">
              <p class="feature-name">{{feature.name}}</p>
              <p class="feature-desc">{{feature.description | ellipsis(24)}}</p>
            </li>{{' '}}
          </template>
        </ul>
      </div>
      <div class="advantages">
        <div class="content white-text">
          <h3>技术优势</h3>
          <ul class="advantage-list">
            <li class="advantage" v-for="(advantage, idx) in advantageList" :key="idx">
              <img :src="advantage.icon" :alt="advantage.name" class="advantage-icon">
              <div class="advantage-content">
                <p class="advantage-name">{{advantage.name}}</p>
                <p class="advantage-desc">{{advantage.description}}</p>
              </div>
            </li>
          </ul>
          <img src="../assets/production/advantage.png" alt="技术优势" class="advantage-img">
        </div>
      </div>
      <div class="solutions content">
        <h3 class="black-text">解决方案</h3>
        <ul class="solution-list white-text">
          <li class="solution" v-for="(solution, idx) in solutionList" :key="idx">
            <img :src="solution.poster" :alt="solution.name" class="solution-img">
            <p class="solution-name">{{solution.name}}</p>
            <div class="visit-more" >
              <div class="visit-more_content">
                <p class="name">{{solution.name}}</p>
                <p class="btn-more" v-navigate="`Solution/${idx}`">查看详情</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <ul id='paper' class="paper-list content hidden">
      <li v-for="(paper, idx) in paperList" :key="idx" class="paper" :class="{'paper-left': idx%2 === 0}">
        <a target="_blank" :href="paper.fileAddr">
          <div class="paper-cover">
            <div class="paper-type">
              {{paper.typeName}}
            </div>
            <img v-if="(typeof paper.img) !== 'undefined'" :src="paper.img" :alt="paper.title">
          </div>
        </a>
        <div class="paper-desc">
          <p class="paper-name" :title="paper.title">{{paper.title | ellipsis(80)}}</p>
          <p class="paper-tips">作者：{{paper.author}}</p>
          <p class="paper-tips">发表：{{paper.publish | ellipsis(65)}}</p>
          <!-- <p class="paper-tips">时间：{{paper.time}}</p> -->
          <a v-if="paper.fileAddr" :href="paper.fileAddr" target="_blank" class="btn-paper-detail">查看详情</a>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import Navigators from '../components/navigators.vue'
import ProductionBanner from '../components/ProductionBanner.vue'
import { getPlatformfeatures, getSolutions, getPapers, getPlatformcategory } from '@/api'
import { PLATFORM_FEATURES_TYPE_MAP } from '@/config'
import { ellipsis } from '@/filters'
import { navigate } from '@/directives'

export default {
  data: () => ({
    activeTab: 0,
    tabs: [{
      title: '平台开发',
      subtitle: '致力于研发决策支持',
      clickId: 'platform',
      icon: '../assets/icon/platform-products.png'
    },
    {
      title: '科研论文',
      subtitle: '有价值的生产实践和科研课题',
      clickId: 'paper',
      icon: '../assets/icon/researchTechnology.png'
    }],
    featureList: [],
    advantageList: [],
    solutionList: [],
    paperList: [],
    platformcategory: []
  }),
  async mounted () {
    const platformfeatures = await getPlatformfeatures()
    platformfeatures.forEach(item => {
      if (item.type === PLATFORM_FEATURES_TYPE_MAP.feature) {
        this.featureList.push(item)
      }
      if (item.type === PLATFORM_FEATURES_TYPE_MAP.advantage) {
        this.advantageList.push(item)
      }
    })

    const papers = await getPapers()
    this.paperList = papers

    const solutions = await getSolutions()
    this.solutionList = solutions

    const platformcategorys = await getPlatformcategory()
    this.platformcategory = platformcategorys
  },
  async created () {
    const papers = await getPapers()
    this.paperList = papers
  },
  methods: {
    changeTab (idx) {
      this.activeTab = idx
    },
    tabsIcon (idx) {
      return idx ? require(`../assets/icon/researchTechnology${this.activeTab === 1 ? '_active' : ''}.png`) : require(`../assets/icon/platform-products${this.activeTab === 0 ? '_active' : ''}.png`)
    }
  },
  filters: {
    ellipsis,
    paperType (type) {
      return ''
      // return paperTypes[type] || paperTypes[0]
    }
  },
  components: {
    Navigators,
    ProductionBanner
  },
  directives: {
    clickEl (el, { value }) {
      const { cur, all } = value
      el.addEventListener('click', () => {
        // terrible  for click event
        Array.prototype.slice.call(document.getElementsByClassName('tab')).map(i => {
          i.classList.remove('active')
        })
        el.classList.add('active')

        all.forEach(id => {
          document.getElementById(id).style.display = 'none'
        })
        document.getElementById(cur).style.display = 'block'
      })
    },
    navigate
  }
}
</script>

<style lang='stylus' src='./Production.styl' scoped>
</style>

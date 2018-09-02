<template>
  <div>
    <div class="tabs white-text" :class="{hover: scrollTop > 10}">
      <v-nav class="content" :navs='solutions' :activeIdx='curSolutionIdx' @setActiveNav='setCurSolution'>
        <template slot-scope="{ nav }">
          {{ nav.name }}
        </template>
      </v-nav>
    </div>
    <div class="banner" :style="{'background-image': `url(${curSolution.banner})`}">
      <div class="content title white-text">
        <h2>{{curSolution.name}}</h2>
        <p>{{curSolution.slogen}}</p>
      </div>
    </div>
    <div class="content current black-text">
      <div class="current-content">
        <img class="current-img" :src="curSolution.imgUrl" alt="">
        <div class="right">
          <h3>行业现状</h3>
          <p>{{curSolution.industryStatus}}</p>
        </div>
      </div>
    </div>
    <div class="advantage white-text">
      <h3>我们的解决方案及优势</h3>
      <p>{{curSolution.advantage}}</p>
      <div class="triangle"></div>
    </div>

    <div class="top-design content">
      <h3 class="solution-titile">顶层设计</h3>
      <img :src="curSolution.overallDesign" alt="顶层设计">
    </div>

    <div class="scenarios content">
      <h3 class="solution-titile">应用场景</h3>
      <div class="scenarios-box">
        <ul class="scenarios-list" :class="{'swapper-able': (scenes.length > 5)}" v-manual-swapper = "translateTimes">
          <li class="scenario"
            v-for="(scenario, idx) in scenes" :key="idx"
            @mouseover="setActiveSceneIdx(idx)">
            <img class="scenario-img" :src="scenario.img" :alt="scenario.name"/><span class="white-text">{{scenario.name}}</span>
            <div class="hover-bg"></div>
          </li>
        </ul>
        <div v-if="(scenes.length > 5)" class="dots">
          <img width="60px" height="60px" :src="require(`../assets/icon/scroll_left${translateTimes ? '' : '_disable'}.svg`)"
          alt="点击查看上一张" class="dot left" @click="translateTimes = 0" :class="{disable: translateTimes === 0}">
          <img width="60px" height="60px" :src="require(`../assets/icon/scroll_right${translateTimes ? '_disable' : ''}.svg`)"
          alt="点击查看下一张" class="dot right" @click="translateTimes = 1" :class="{disable: translateTimes === 1}">
        </div>
      </div>
    </div>
    <div class="cases content black-text">
      <h3>案例</h3>
      <div class="box" v-for="(curCase, i) in cases" :key="i">
        <v-video class="video" :duration='curCase.videoDuration' :src='curCase.videoAddr' :poster='curCase.architecture' :alt='curCase.name'>
        </v-video>
        <p class="case-title">{{curCase.name}}</p>
        <p class="case-tips">{{curCase.introduction}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import VVideo from '@/components/VVideo.vue'
import VNav from '@/components/VNav.vue'
import {getSolutions, getSceneBySolution, getExamplesBySolution} from '@/api'
import {manualSwapper} from '@/directives'

export default {
  async beforeRouteEnter (to, from, next) {
    const idx = parseInt(to.params.id)
    if (isNaN(idx)) return next('/Solution/0')

    const solutions = await getSolutions()
    next(vm => vm.initData(solutions, solutions[idx] ? idx : 0))
  },
  data: () => ({
    solutions: [], // 所有的解决方案列表
    curSolutionIdx: 0,
    curSolution: {}, // 当前的解决方案内容
    cases: [],
    scenes: [],
    activeSceneIdx: 0,
    translateTimes: 0 // 左右切换按键次数判断
  }),
  computed: {
    ...mapGetters(['scrollTop'])
  },
  methods: {
    async initData (solutions, idx) {
      this.solutions = solutions
      this.setCurSolution(solutions[idx], idx)
    },
    setActiveSceneIdx (idx) {
      this.activeSceneIdx = idx
    },
    async setCurSolution (curSolution, idx = 0) {
      this.translateTimes = 0
      this.$router.push(`/Solution/${idx}`)
      const {id, imgUrlList} = curSolution
      curSolution.imgUrl = imgUrlList[0]
      this.curSolutionIdx = idx
      this.curSolution = curSolution
      this.cases = await getExamplesBySolution(id, 3)
      this.scenes = await getSceneBySolution(id, 5)
    },
    visiOther () {
      this.translateTimes ? this.translateTimes = 0 : this.translateTimes = 1
    }
  },
  components: {VVideo, VNav},
  directives: {manualSwapper}
}
</script>

<style lang="stylus" scoped src='./Solution.styl'></style>

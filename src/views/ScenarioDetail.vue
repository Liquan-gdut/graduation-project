<template>
  <div class="content">
    <img src="../assets/scenario-detail-banner.jpg" alt="" class="banner">
    <navigators></navigators>
    <div class="container">
      <h3>{{title}}</h3>
      <div class="news-detail">
        <div class="video-wraper">
          <div :class="{'video-mask': play}">
            <div :class="['video', {play: play}]"  v-show="play" v-if="news.video">
              <div class="close" @click="togglePlay(false)"></div>
              <video ref="video" :src="news.video" controls></video>
            </div>
          </div>

          <div class="poster" v-show="!play" :style="{ 'background-image': 'url(' + news.img + ')' }">
            <img v-if="news.gif" :src="news.gif" alt="" class="mask">
            <div class="mask" v-else-if="news.video" >
              <div class="switch" @click="togglePlay(true)"></div>
            </div>
          </div>
        </div>
        <p class='news-msg' v-html="news.detail"></p>
        <!-- <p class="news-msg" v-for='(text, idx) in news.detail' :key='idx'>
          {{text}}
        </p> -->
        <!-- <div class="new-detail" v-html="news.desc"></div> -->
      </div>
    </div>
  </div>
</template>

<script>

import Navigators from '../components/navigators.vue'
import { scenarioDetails } from '@/api/scenarioDetail'

export default {
  components: {
    Navigators
  },
  data: () => ({
    news: {
      detail: [],
      video: '',
      presses: []
    },
    play: false,
    title: ''
  }),
  methods: {
    togglePlay (play) {
      this.play = play
      this.$refs.video[play ? 'play' : 'pause']()
    }
  },
  mounted () {
    const scenario = this.$route.query.s
    this.title = scenario || '城市违章停车检测'
    this.news = scenarioDetails[this.title]
  }
}
</script>
<style lang='scss' scoped src='./ScenarioDetail.styl'></style>

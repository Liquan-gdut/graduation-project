<template>
  <div class="business-scenario">
      <div class="header">
        <navigators :focusIdx='1'></navigators>
        <img src="../assets/bannerImg.png" alt="bannerImg">
        <div class="title">
          <p class="headline">业务场景</p>
          <p class="subtitle">使用大数据+AI解决城市所面临的挑战</p>
        </div>
      </div>
    <div class="main clearfix"
      v-for='(senario, idx) in senarios' :key='idx'
      :style="{background: `url(${senario.bgimg}) no-repeat`}"
      :class="[`main-bg-${idx+1}`]"
      v-scroll-into-view="senario.title === position">
      <p class="main-title">{{senario.title}}</p>
      <p class="main-subtitle">{{senario.subtitle}}</p>
      <ul class="project-wraper">
        <li :class="['project', {'project-active': item.detail}]" v-for='(item, itemIdx) in senario.list' :key='itemIdx'
          @click="go(item)">
          <!-- 暂时不跳转详情页 -->
          <img :src="item.img" :alt="item.title" class="project-img">
          <p class="project-title">{{item.title}}</p>
          <p class="project-subtitle">{{item.desc | ellipsis(55)}}</p>
        </li>
      </ul>

    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import Navigators from '../components/navigators.vue'
import CommonFooter from '../components/CommonFooter'
import senarios from '../api/scenario'
import {scenarioDetails} from '../api/scenarioDetail'
import {ellipsis} from '@/filters'
import {navigate, scrollIntoView} from '../directives'

export default {
  data: () => ({
    senarios,
    scenarioDetails,
    position: ''
  }),
  methods: {
    go ({title, detail}) {
      if (!detail) return
      this.$router.push(`./scenarioDetail?s=${title}`)
    }
  },
  mounted () {
    this.position = this.$route.query.s
  },
  components: {
    CommonFooter,
    Navigators
  },
  directives: {navigate, scrollIntoView},
  filters: { ellipsis }
}
</script>
<style scoped lang='scss' src='./BusinessScenario.styl'></style>

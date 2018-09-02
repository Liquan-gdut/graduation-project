<template>
  <div >
    <div class='header'>
      <!-- <img src="../assets/aboutus_bg.jpg" alt="" class="banner"> -->
      <img src="../assets/aboutus/aboutus_bg_right.png" alt="" class="banner left">
      <img src="../assets/aboutus/aboutus_bg_left.png" alt="" class="banner right">
      <h2 class="title white-text">关于我们</h2>
      <ul class="content">
        <li v-for='(item, index) in Items' :key='index' class='list' :class="{'active': (aboutUsCurInd === index )}"
        @click='ChangeList(index)'>
          {{item.list}}
          </li>
      </ul>
    </div>
    <div class='section'>
      <CompanyProfile v-if='aboutUsCurInd === 0'></CompanyProfile>
      <TeamProfile v-if='aboutUsCurInd === 1'></TeamProfile>
      <node-time v-if='aboutUsCurInd === 2'></node-time>
      <Employs v-if='aboutUsCurInd === 3'></Employs>
      <contact-us v-if='aboutUsCurInd === 4'></contact-us>
    </div>
  </div>
</template>

<script>
import CompanyProfile from './CompanyProfile'
import TeamProfile from './TeamProfile'
import NodeTime from './NodeTime'
import ContactUs from './ContactUs'
import Employs from './Employs'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      Items: [
        {list: '了解京东城市', href: 'Home'},
        {list: '团队介绍', href: 'News'},
        {list: '大事记', href: 'NodeTime'},
        {list: '招贤纳士', href: 'NodeTime'},
        {list: '联系我们', href: 'NodeTime'},
      ],
      // ind: 0
    }
  },
  computed: mapState({
    aboutUsCurInd: state => state.aboutUsCurInd
  }),
  methods: {
    ChangeList (index) {
      this.$store.commit('SYNC_ABOUTUS_IND', index)
    },
    getParams () {
      // 取到路由带过来的参数
      console.log('index: ', this.$route.params.index)
      if (this.$route.params.index) {
        const routerParams = this.$route.params.index
        this.$store.commit('SYNC_ABOUTUS_IND', routerParams)
      }
    }
  },
  components: { NodeTime, Employs, TeamProfile, CompanyProfile, ContactUs },
  created () {
    this.getParams()
  },
  watch: {
    '$route': 'getParams'
  }
}
</script>

<style lang="stylus" scoped src="./Aboutus.styl">
</style>

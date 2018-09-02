<template>
  <div :class="['nav-box', {'hover': navFixFlag && scrollTop}]">
    <div class="content header-nav">
      <img src="@/assets/icon/logo.png" alt="京东城市" class="logo" v-navigate="`/Home`">
      <v-nav :navs='navs' :active-idx="activeIdx" @setActiveNav='navigate'>
        <template slot-scope="{nav}">
          {{nav.meta.title}}
        </template>
      </v-nav>
    </div>
  </div>
</template>
<script>
import VNav from './VNav.vue'
import {mapGetters} from 'vuex'
import {routes} from '@/router'
import {navigate} from '@/directives'

export default {
  data: () => ({
    activeChildren: '',
    navs: routes.filter((nav) => nav.meta.title),
    navFixFlag: false
  }),
  computed: {
    activeIdx () {
      return this.navs.findIndex(i => i.meta.title === this.$route.meta.title)
    },
    ...mapGetters(['scrollTop'])
  },
  methods: {
    navigate ({path}, idx) {
      this.activeChildren = ''
      this.$router.push({path})
    },
    clearChildren () {
      this.activeChildren = ''
    },
    showChildren ({name}) {
      this.activeChildren = name
    },
    displayNav (el) {
      el = el || window.event
      if (el.wheelDelta) {
        el.wheelDelta > 0 ? this.navFixFlag = true : this.navFixFlag = false
      } else if (el.detail) {
        if (window.navigator.userAgent.indexOf('Firefox') !== -1) {
          el.detail < 0 ? this.navFixFlag = true : this.navFixFlag = false
        } else {
          el.detail > 0 ? this.navFixFlag = true : this.navFixFlag = false
        }
      }
    }
  },
  components: {VNav},
  directives: {
    navigate
  },
  mounted () {
    if (document.addEventListener) {
      document.addEventListener('DOMMouseScroll', this.displayNav, false)
    }
    window.onmousewheel = document.onmousewheel = this.displayNav
  }
}
</script>

<style lang="stylus" scoped src='./navigators.styl'></style>

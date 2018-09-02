<template>
  <div id="app">
    <navigators></navigators>
    <router-view></router-view>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import Navigators from './components/navigators.vue'
import CommonFooter from './components/CommonFooter.vue'

export default {
  name: 'App',
  components: {
    CommonFooter, Navigators
  },
  mounted () {
    this.$store.dispatch('watchDomScroll')
  }
}
</script>

<style lang='stylus' src='./main.styl'></style>

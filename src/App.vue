<template>
  <div id="app">
    <common-header></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'

export default {
  name: 'App',
  components: {
    CommonFooter, CommonHeader
  },
  mounted () {
    this.$store.dispatch('watchDomScroll')
  }
}
</script>

<style lang='stylus' src='./main.styl'></style>

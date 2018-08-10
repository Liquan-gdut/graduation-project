<template>
  <div id="app">
    <router-view></router-view>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import CommonFooter from './components/CommonFooter.vue'

export default {
  name: 'App',
  components: {
    CommonFooter
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  },
}
</script>

<style lang='scss' src='./main.styl'></style>

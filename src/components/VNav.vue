<template>
  <ul class="nav">
    <li :class="{'active-nav': focusIdx == idx}" v-for="(nav, idx) in navs" @click="focus(nav, idx)" :key="idx">
      <slot :nav='nav'></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['navs', 'activeIdx'],
  data: () => ({
    focusIdx: null
  }),
  watch: {
    activeIdx (idx) {
      this.focusIdx = idx
    }
  },
  mounted () {
    this.focusIdx = this.activeIdx
  },
  methods: {
    focus (nav, idx) {
      this.focusIdx = idx
      this.$emit('setActiveNav', nav, idx)
    }
  }
}
</script>

<style lang="stylus" scoped>
li
  display inline-block
  margin-right: 30px;
  line-height: 45px;
  font-size: 16px;
  color white
  opacity: 0.8;
  cursor pointer
  &:last-child
    margin-right 0
  &:hover
    opacity: 1;

.active-nav
  font-weight: bold;
  opacity: 1;
  // border-bottom: 2px #fff solid;
</style>

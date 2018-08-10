<template>
<div class="partner-type-wrap">
  <div v-if='offsetMax > 0' :class="['left', {opacity: offset == 0}]" @click='slideRun(-1)'></div>
  <div class="partner-container">
    <div class="partner-type"
      :style="{width: `${180 * slides.length}px`}"
      v-translation="{offset}">
      <a target="_blank" v-for="member in slides" :key="member.alt" :href="member.href">
        <img :src="member.img" :alt="member.alt">
      </a>
    </div>
  </div>
  <div v-if='offsetMax > 0' :class="['right', {opacity: offset >= offsetMax}]" @click='slideRun(1)'></div>
</div>
</template>

<script>
export default {
  props: ['slides', 'showMembersCount'],
  data: () => ({
    offset: 0
  }),
  computed: {
    offsetMax () {
      return this.slides.length - this.showMembersCount
    }
  },
  directives: {
    translation (el, {value}) {
      const { offset } = value
      el.style.transform = `translate3D(${-offset * 176}px, 0, 0)`
    }
  },
  methods: {
    slideRun (dir) {
      let newIdx = this.offset + dir
      if (newIdx < 0 || newIdx > this.offsetMax) return
      this.offset = newIdx
    }
  }
}
</script>

<style scoped>
.partner-type-wrap{
  position: relative;
  height: 60px;
  width: 880px;
}
.left, .right{
  position: absolute;
  background: url(../assets/icon/left.png) no-repeat;
  background-size: 100% 100%;
  width: 11px;
  height: 20px;
  top: 0;
  bottom: 0;
  margin: auto;
}
.left {
  left: -20px;
  transform: rotateY(180deg);
}
.right {
  right: -20px;
}
.opacity {
  opacity: .2;
}
.partner-container {
  width: 880px;
  overflow: hidden;
}
.partner-type {
  height: 60px;
  overflow: hidden;
  transition: transform .3s ease;
}
a {
  height: 60px;
  width: 170px;
  float: left;
  margin: 0 3px;
}

img{
  max-height: 100%;
  max-width: 100%;
  vertical-align: middle;
}
</style>

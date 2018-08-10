<template>
  <ul class="header-nav clearfix">
    <li class="nav-item nav-item_logo" @click="navigate('首页','./')">
      <img src="@/assets/icon/logo.png" alt="京东城市" class="logo">
    </li>
    <li class="nav-item" v-for="(nav, index) in navs" :key="index">
      <a :class="{focus: focusNav == nav.title}" @click="navigate(nav.title, nav.url)">{{nav.title}}</a>
      <ul class="child-nav" v-if="nav.child">
        <li class="child-nav-item" v-for="(childNav, childIdx) in nav.child" :key="childIdx">
          <a :class="{focus: focusNav == childNav.title}" @click="navigate(childNav.title, childNav.url)">{{childNav.title}}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import navs from '@/config/navs'
export default {
  props: ['focusIdx'],
  data () {
    return {
      navs, //  通过接口文件，获取导航“文字内容、跳转路径”返回导航参数{名称，路径}，如：—[{'首页','./'}，]
      focusNav: '首页'
    }
  },
  methods: {
    navigate (title, path) {
      this.focusNav = title
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  width: 125px;
  height: 30px;
  &:hover{
    cursor: pointer;
  }
}
.header-nav {
  display: flex;
  justify-content: center;
  width: 120rem;
  overflow: hidden;
  position: absolute;
  top: 3rem;
  z-index: 10;

  .nav-item:nth-of-type(1) {
    width: 125px;
    font-size: 30px;
  }
  .nav-item {
    float: left;
    list-style: none;
    width: 110px;
    text-align: right;
    color: #fff;
    margin-right: 2rem;
    a {
      line-height: 30px;
      height: 30px;
      font-size: 16px;
      color: rgba(255, 255, 255, .5);
      display: inline-block;
      &:hover {
        color: white;
      }
    }
    .focus {
      font-weight: bold;
      color: white;
      border-bottom: 2px #fff solid;
    }
    &:hover {
      color: white;

      .child-nav {
        display: block;
        height: 100px;
      }
    }
    .child-nav {
      transition: height .3s linear;
      height: 0;
      overflow: hidden;
    }
  }
  .nav-item_logo{
    display: inline-block;
    margin-right: 21.5rem;
  }
}

</style>

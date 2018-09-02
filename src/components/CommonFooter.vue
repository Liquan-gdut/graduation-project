<template>
<div class="common-footer">
  <div class="footer-content">
    <p><img src="../assets/icon/logo.png" alt="京东城市计算" class="logo"></p>
    <span><a class="footer-link" v-navigate="{name: `Aboutus`, params: {index: 0}}" target="_blank" href="javascript:void(0)" @click="changeAboutusInd(0)">关于我们&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="https://jr.jd.com/">京东金融&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="https://www.jd.com">京东商城&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="http://www.jdwl.com/">京东物流&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="https://jrhelp.jd.com/show/getProblemInfo-3061">知识产权&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="https://jrhelp.jd.com/show/getProblemInfo-2748">隐私政策&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
   <span><a class="footer-link" v-navigate="{name: `Aboutus`, params: {index: 4}}" target="_blank" href="javascript:void(0)" @click="changeAboutusInd(4)">联系我们</a></span>
    <p class="copy-right">Copyright© 2014-2018 京东JD.com版权所有</p>
    <span class="wechat">
      <img src="../assets/icon/wechat.png" alt="京东城市微信公众号" class="wechat-code">
      <p class="tip">微信公众号<br>京东城市</p>
    </span>
  </div>
</div>
</template>
<script>
import {navigate} from '@/directives'

export default {
  name: 'CommonFooter',
  data: () => ({
  }),
  directives: {
    navigate
  },
  methods: {
    changeAboutusInd (index) {
      this.$store.commit('SYNC_ABOUTUS_IND', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../mixins.styl";
.common-footer{
  @include full-width;
  position:relative;
  height: 260px;
  background:rgba(47,56,68,1);
  color: rgba(255, 255, 255, .5);
}
  .footer-content{
    position: absolute;
    width 1200px
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: left;
    img.logo {
      width 152px
      height 30px
      margin-bottom 30px
    }
    a.footer-link{
      color: rgba(255, 255, 255, .5);
    }
    a.footer-link:hover {
      color: #fff;
    }
    .copy-right{
      margin-top 35px
      font-size: 0.9rem;
      opacity: 0.6;
    }
   .wechat {
     position: absolute;
     right: 0;
     top: 0;
     text-align: center;
     font-size: 12px;
     color: rgba(255, 255, 255, .5);
   }
   .wechat-code {
     margin-bottom: 10px;
    }
  }
</style>

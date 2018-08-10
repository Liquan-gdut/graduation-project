<template>
<div class="common-footer">
  <div class="footer-content">
    <span><a class="footer-link" target="_blank" href="">关于我们&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="">京东金融&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="">京东商城&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="">京东物流&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="">知识产权&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="">隐私政策&nbsp;&nbsp;|&nbsp;&nbsp;</a></span>
    <span><a class="footer-link" target="_blank" href="">联系我们</a></span><br><br><br>
    <p class="copy-right">Copyright© 2014-2018 京东JD.com版权所有</p>
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
  }
}
</script>

<style lang="scss">
@import "@/mixins.styl";
.common-footer{
  @include full-width;
  position:relative;
  height: 18.75rem;
  width: 100%;
  background: linear-gradient(to bottom, #050b22 , #032050);
  color: rgba(255, 255, 255, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-content{
    a.footer-link{
      color: rgba(255, 255, 255, .5);
    }
    a.footer-link:hover {
      color: #fff;
    }
    .copy-right{
      font-size: 0.9rem;
      opacity: 0.6;
    }
  }
}
</style>

<template>
  <div class="common-footer">
    <div class="footer">
      <div class="container">
        <div class="footer-info w3-agileits-info">
          <div class="col-md-4 address-left agileinfo">
            <div class="footer-logo header-logo">
              <h2><a href="index.html"><span>S</span>mart <i>Bazaar</i></a></h2>
              <h6>Your stores. Your place.</h6>
            </div>
            <ul>
              <li><i class="fa fa-map-marker"></i> 123 San Sebastian, New York City USA.</li>
              <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
              <li><i class="fa fa-phone"></i> +222 11 4444 </li>
              <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> mail@example.com</a></li>
            </ul>
          </div>
          <div class="col-md-8 address-right">
            <div class="col-md-4 footer-grids">
              <h3>Company</h3>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="marketplace.html">Marketplace</a></li>
                <li><a href="values.html">Core Values</a></li>
                <li><a href="privacy.html">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="col-md-4 footer-grids">
              <h3>Services</h3>
              <ul>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="login.html">Returns</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="sitemap.html">Site Map</a></li>
                <li><a href="login.html">Order Status</a></li>
              </ul>
            </div>
            <div class="col-md-4 footer-grids">
              <h3>Payment Methods</h3>
              <ul>
                <li><i class="fa fa-laptop"
                     aria-hidden="true"></i> Net Banking</li>
                <li><i class="fa fa-money"
                     aria-hidden="true"></i> Cash On Delivery</li>
                <li><i class="fa fa-pie-chart"
                     aria-hidden="true"></i>EMI Conversion</li>
                <li><i class="fa fa-gift"
                     aria-hidden="true"></i> E-Gift Voucher</li>
                <li><i class="fa fa-credit-card"
                     aria-hidden="true"></i> Debit/Credit Card</li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!-- //footer -->
    <div class="copy-right">
      <div class="container">
        <p>Copyright &copy; 2019.《 网络商城系统的设计与开发 》 Designed by Liquan.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonFooter'
}
</script>

<style lang="stylus" scoped>
.header-logo h1, .footer-logo.header-logo h2
  font-size 3em
  font-weight 900
.header-logo h1 a, .footer-logo.header-logo h2 a
  display inline-block
  color #000
  text-decoration none
  position relative
.header-logo h1 a span, .footer-logo.header-logo h2 a span
  font-family 'Lovers Quarrel', cursive
  font-size 2em
  color #F44336
  vertical-align sub
  margin-right 3px
.header-logo h1 a i, .footer-logo.header-logo h2 a i
  display block
  position absolute
  bottom 18%
  right 2%
  font-size 0.5em
/* -- footer -- */
.footer
  padding-top 5em
  background url('../assets/images/bg.png') #42d406 no-repeat
  background-size cover
.footer-logo.header-logo
  float none
  text-align center
.address-left
  background #fff
  padding 2em
  z-index 9
.address-right
  position relative
.address-right:before
  content ''
  background url('../assets/images/a1.png') no-repeat 0px 0px
  background-size 100%
  display block
  position absolute
  bottom -189px
  left -36px
  width 500px
  height 155px
  z-index 0
.address-left ul li
  display block
  margin 1em 0
  font-size 1em
  color #555
  border-top 1px solid #e6e2e2
  padding-top 1em
  text-align center
.address-left ul li a
  color #000
.address-left ul li a:hover
  color #3c9de8
.address-left ul li i.fa
  margin-right 5px
  font-size 1.3em
.footer h3
  font-size 1.4em
  color #f5f5f5
  font-family 'Offside', cursive
  margin-bottom 1em
  text-transform uppercase
.footer-grids ul li
  display block
  font-size 1em
  margin 0.6em 0 0
  color #05b2da
.footer-grids ul li i.fa
  margin-right 7px
.footer-grids ul li a
  color #fff
  -webkit-transition 0.5s all
  -moz-transition 0.5s all
  -o-transition 0.5s all
  -ms-transition 0.5s all
  transition 0.5s all
.footer-grids ul li a:hover
  color #000
.copy-right
  text-align center
  padding 2em 0
  background #222
.copy-right p
  font-size 1em
  color #fff
  font-weight 300
  line-height 1.8em
.copy-right p a
  color #fff
.copy-right p a:hover
  color #f44336
/* -- //footer -- */
</style>




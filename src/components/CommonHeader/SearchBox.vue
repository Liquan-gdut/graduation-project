<template>
  <div class="header-two">
    <!-- header-two -->
    <div class="container">
      <div class="header-logo">
        <h1><a href="index.html"><span>S</span>mart <i>Bazaar</i></a></h1>
        <h6>Your stores. Your place.</h6>
      </div>
      <div class="header-search">
        <form action="#"
              method="post">
          <input type="search"
                 name="Search"
                 placeholder="Search for a Product..."
                 required="">
          <button type="submit"
                  class="btn btn-default"
                  aria-label="Left Align">
            <i class="fa fa-search"
               aria-hidden="true"> </i>
          </button>
        </form>
      </div>
      <div class="header-cart">
        <div class="my-account">
          <a href="contact.html"><i class="fa fa-map-marker"
               aria-hidden="true"></i> CONTACT US</a>
        </div>
        <div class="cart">
          <form action="#"
                method="post"
                class="last">
            <input type="hidden"
                   name="cmd"
                   value="_cart" />
            <input type="hidden"
                   name="display"
                   value="1" />
            <button class="w3view-cart"
                    type="submit"
                    name="submit"
                    value=""><i class="fa fa-cart-arrow-down"
                 aria-hidden="true"></i></button>
          </form>
        </div>
        <div class="clearfix"> </div>
      </div>
      <div class="clearfix"> </div>
    </div>
  </div><!-- //header-two -->
</template>

<script>
import UserInformation from './UserInformation.vue'
import SearchBox from './SearchBox.vue'
import NavCategories from './NavCategories.vue'

export default {
  name: 'SearchBox'
}
</script>

<style lang='stylus' scoped>
/* -- //header -- */
/* -- header-two -- */
.header-two.scroll-to-fixed-fixed
  background #fff
  padding 0.3em 0 0.8em
  z-index 999
.header-two.scroll-to-fixed-fixed .header-logo h1
  font-size 2.5em
.header-two.scroll-to-fixed-fixed .header-search
  margin-top 1.8em
  margin-bottom 1em
.header-two.scroll-to-fixed-fixed .header-search input[type='search']
  padding 0.8em 5em 0.8em 1em
.header-two.scroll-to-fixed-fixed .header-search .btn-default
  height 44px
.header-two.scroll-to-fixed-fixed .header-cart
  margin 1.1em 0 0
.header-two
  padding 2em 0
  position relative
.header-logo
  float left
.header-search
  float left
  width 55%
  text-align center
  margin 1.6em 5em
.header-cart
  float right
  margin 1.3em 0
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
.header-logo h6
  font-size 0.8em
  color #000
  letter-spacing 1px
  margin-top -1em
.header-search form
  position relative
.header-search input[type='search']
  width 100%
  padding 1em 5em 1em 1em
  font-size 1em
  color #999
  outline none
  border 1px solid #cccccc
  background none
  -webkit-appearance none
  transition 0.5s all
  -webkit-transition 0.5s all
  -moz-transition 0.5s all
.header-search input[type='search']:focus
  border-color #f44336
.header-search .btn-default
  border none
  position absolute
  top 0px
  right 0px
  width 60px
  height 50px
  outline none
  box-shadow none
  background #f44336
  padding 0
  border-radius inherit
  -webkit-appearance none
  -webkit-transition 0.5s all
  -moz-transition 0.5s all
  transition 0.5s all
.header-search i.fa
  font-size 1em
  color #fff
  padding 3px
.header-cart h4 a
  color #000
.my-account
  float right
  margin 1.4em 0
/* -- cart-box -- */
.cart
  margin-right 2em
  padding-right 2em
  border-right 1px solid #6495ed
  float left
.w3view-cart
  background #0280e1
  border none
  -webkit-border-radius 50%
  -moz-border-radius 50%
  -o-border-radius 50%
  -ms-border-radius 50%
  border-radius 50%
  width 60px
  height 59px
  text-align center
  outline none
.w3view-cart i.fa
  font-size 2em
  color #ffffff
  vertical-align middle
</style>

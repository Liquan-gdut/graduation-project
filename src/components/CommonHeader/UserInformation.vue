<template>
  <div class="w3ls-header">
    <!--header-one-->
    <div class="w3ls-header-left">
      <p><a href="#">UPTO $50 OFF ON LAPTOPS | USE COUPON CODE LAPPY </a></p>
    </div>
    <div class="w3ls-header-right">
      <ul>
        <li class="dropdown head-dpdn">
          <a href="#"
             class="dropdown-toggle"
             data-toggle="dropdown"><i class="fa fa-user"
               aria-hidden="true"></i> My Account<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="login.html">Login </a></li>
            <li><a href="signup.html">Sign Up</a></li>
            <li><a href="login.html">My Orders</a></li>
            <li><a href="login.html">Wallet</a></li>
          </ul>
        </li>
        <li class="dropdown head-dpdn">
          <a href="#"
             class="dropdown-toggle"
             data-toggle="dropdown"><i class="fa fa-percent"
               aria-hidden="true"></i> Today's Deals<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="offers.html">Cash Back Offers</a></li>
            <li><a href="offers.html">Product Discounts</a></li>
            <li><a href="offers.html">Special Offers</a></li>
          </ul>
        </li>
        <li class="dropdown head-dpdn">
          <a href="#"
             class="dropdown-toggle"
             data-toggle="dropdown"><i class="fa fa-gift"
               aria-hidden="true"></i> Gift Cards<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="offers.html">Product Gift card</a></li>
            <li><a href="offers.html">Occasions Register</a></li>
            <li><a href="offers.html">View Balance</a></li>
          </ul>
        </li>
        <li class="dropdown head-dpdn">
          <a href="contact.html"
             class="dropdown-toggle"><i class="fa fa-map-marker"
               aria-hidden="true"></i> Store Finder</a>
        </li>
        <li class="dropdown head-dpdn">
          <a href="card.html"
             class="dropdown-toggle"><i class="fa fa-credit-card-alt"
               aria-hidden="true"></i> Credit Card</a>
        </li>
        <li class="dropdown head-dpdn">
          <a href="help.html"
             class="dropdown-toggle"><i class="fa fa-question-circle"
               aria-hidden="true"></i> Help</a>
        </li>
      </ul>
    </div>
    <div class="clearfix"> </div>
  </div>
</template>

<script>

export default {
  name: 'UserInformation'
}
</script>

<style lang='stylus' scoped>
.w3ls-header
  background #464646
  padding 0.5em 2em
.w3ls-header-left
  float left
.w3ls-header-right
  float right
.w3ls-header-left p
  font-size 0.9em
.w3ls-header-left p a
  color #fff
.w3ls-header-right ul li.dropdown
  display inline-block
  padding 0 1em
ul.dropdown-menu
  -moz-animation fadeInUp 0.2s ease-in
  -webkit-animation fadeInUp 0.2s ease-in
  animation fadeInUp 0.2s ease-in
  min-width 120px
  font-size 1em
  top 125%
  z-index 99999
ul.cd-dropdown-content li
  display block
.w3ls-header-right ul li a.dropdown-toggle
  font-size 0.9em
  color #f9f9f9
  outline none
.w3ls-header-right ul li a.dropdown-toggle:hover, li.dropdown.head-dpdn.open a.dropdown-toggle, .my-account a:hover, .my-account a:hover i.fa
  color #fd776d
  text-decoration none
.w3ls-header-right ul li a i.fa
  margin-right 5px
.w3ls-header-right ul li .caret
  margin-left 6px
.dropdown-menu > li > a
  color #999
.dropdown-menu > li > a:hover
  color #fff
  background #3988d1
/* -- //header -- */
</style>
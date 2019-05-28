<template>
  <div class="goods-detail">
    <div class="container">
      <ol class="breadcrumb breadcrumb1">
        <li><a href="index.html">Home</a></li>
        <li class="active">Single Page</li>
      </ol>
      <div class="clearfix"> </div>
    </div>
    <div class="products">
      <div class="container">
        <div class="single-page">
          <div class="single-page-row"
               id="detail-21">
            <div class="col-md-6 single-top-left">
              <div class="flexslider">

                <div class="flex-viewport"
                     style="overflow: hidden; position: relative;">
                  <ul class="slides"
                      style="width: 1000%; transition-duration: 0s; transform: translate3d(-433px, 0px, 0px);">
                    <li data-thumb="@/assets/images/s3.jpg"
                        class="clone"
                        aria-hidden="true"
                        style="width: 433px; float: left; display: block;">
                      <div class="thumb-image"> <img :src="`../../static/images/${goodsDetail.productImg}`"
                             data-imagezoom="true"
                             class="img-responsive"
                             alt=""
                             draggable="false"> </div>
                    </li>
                    <li data-thumb="@/assets/images/s1.jpg"
                        class="flex-active-slide"
                        style="width: 433px; float: left; display: block;">
                      <div class="thumb-image detail_images"> <img :src="`../../static/images/${goodsDetail.productImg}`"
                             data-imagezoom="true"
                             class="img-responsive"
                             alt=""
                             draggable="false"> </div>
                    </li>
                    <li data-thumb="@/assets/images/s2.jpg"
                        class=""
                        style="width: 433px; float: left; display: block;">
                      <div class="thumb-image"> <img :src="`../../static/images/${goodsDetail.productImg}`"
                             data-imagezoom="true"
                             class="img-responsive"
                             alt=""
                             draggable="false"> </div>
                    </li>
                    <li data-thumb="@/assets/images/s3.jpg"
                        class=""
                        style="width: 433px; float: left; display: block;">
                      <div class="thumb-image"> <img :src="`../../static/images/${goodsDetail.productImg}`"
                             data-imagezoom="true"
                             class="img-responsive"
                             alt=""
                             draggable="false"> </div>
                    </li>
                    <li data-thumb="@/assets/images/s1.jpg"
                        class="clone"
                        aria-hidden="true"
                        style="width: 433px; float: left; display: block;">
                      <div class="thumb-image detail_images"> <img :src="`../../static/images/${goodsDetail.productImg}`"
                             data-imagezoom="true"
                             class="img-responsive"
                             alt=""
                             draggable="false"> </div>
                    </li>
                  </ul>
                </div>
                <ol class="flex-control-nav flex-control-thumbs">
                  <li><img :src="`../../static/images/${goodsDetail.productImg}`"
                         class="flex-active"
                         draggable="false"></li>
                  <li><img :src="`../../static/images/${goodsDetail.productImg}`"
                         draggable="false"
                         class=""></li>
                  <li><img :src="`../../static/images/${goodsDetail.productImg}`"
                         draggable="false"
                         class=""></li>
                </ol>
                <ul class="flex-direction-nav">
                  <li class="flex-nav-prev"><a class="flex-prev"
                       href="#">Previous</a></li>
                  <li class="flex-nav-next"><a class="flex-next"
                       href="#">Next</a></li>
                </ul>
              </div>
            </div>
            <div v-if="goodsDetail.productName"
                 class="col-md-6 single-top-right">
              <h3 class="item_name">{{goodsDetail.productName}}</h3>
              <p>Processing Time: Item will be shipped out within 2-3 working days.</p>
              <div class="single-rating">
                <ul>
                  <li><i class="fa fa-star-o"
                       aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o"
                       aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o"
                       aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o"
                       aria-hidden="true"></i></li>
                  <li><i class="fa fa-star-o"
                       aria-hidden="true"></i></li>
                  <li class="rating">20 reviews</li>
                  <li><a href="#">Add your review</a></li>
                </ul>
              </div>
              <div class="single-price">
                <ul>
                  <li>${{goodsDetail.salePrice}}</li>
                  <li><del>${{goodsDetail.originalPrice}}</del></li>
                  <li><span class="w3off">10% OFF</span></li>
                  <li>Ends on: June,5th</li>
                  <li><a href="#"><i class="fa fa-gift"
                         aria-hidden="true"></i> Coupon</a></li>
                </ul>
              </div>
              <p class="single-price-text">{{goodsDetail.description}}</p>
              <form action="#"
                    method="post">
                <input type="hidden"
                       name="cmd"
                       value="_cart">
                <input type="hidden"
                       name="add"
                       value="1">
                <input type="hidden"
                       name="w3ls_item"
                       value="Snow Blower">
                <input type="hidden"
                       name="amount"
                       value="540.00">
                <button type="submit"
                        class="w3ls-cart"><i class="fa fa-cart-plus"
                     aria-hidden="true"></i> Add to cart</button>
              </form>
              <button class="w3ls-cart w3ls-cart-like"><i class="fa fa-heart-o"
                   aria-hidden="true"></i> Add to Wishlist</button>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
        <!-- collapse-tabs -->
        <div class="collpse tabs">
          <h3 class="w3ls-title"
              style="margin-top: 3em;">About this item</h3>
          <div class="panel-group collpse"
               id="accordion"
               role="tablist"
               aria-multiselectable="true">
            <div class="panel panel-default">
              <div class="panel-heading"
                   role="tab"
                   id="headingOne">
                <h4 class="panel-title">
                  <a class="pa_italic"
                     role="button"
                     data-toggle="collapse"
                     data-parent="#accordion"
                     href="#collapseOne"
                     aria-expanded="true"
                     aria-controls="collapseOne">
                    <i class="fa fa-file-text-o fa-icon"
                       aria-hidden="true"></i> Description <span class="fa fa-angle-down fa-arrow"
                          aria-hidden="true"></span> <i class="fa fa-angle-up fa-arrow"
                       aria-hidden="true"></i>
                  </a>
                </h4>
              </div>
              <div id="collapseOne"
                   class="panel-collapse collapse in"
                   role="tabpanel"
                   aria-labelledby="headingOne"
                   aria-expanded="true"
                   style="">
                <div class="panel-body">
                  {{goodsDetail.description}}
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading"
                   role="tab"
                   id="headingTwo">
                <h4 class="panel-title">
                  <a class="pa_italic collapsed"
                     role="button"
                     data-toggle="collapse"
                     data-parent="#accordion"
                     href="#collapseTwo"
                     aria-expanded="false"
                     aria-controls="collapseTwo">
                    <i class="fa fa-info-circle fa-icon"
                       aria-hidden="true"></i> additional information <span class="fa fa-angle-down fa-arrow"
                          aria-hidden="true"></span> <i class="fa fa-angle-up fa-arrow"
                       aria-hidden="true"></i>
                  </a>
                </h4>
              </div>
              <div id="collapseTwo"
                   class="panel-collapse collapse"
                   role="tabpanel"
                   aria-labelledby="headingTwo"
                   aria-expanded="false"
                   style="height: 0px;">
                <div class="panel-body">
                  {{goodsDetail.description}}
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading"
                   role="tab"
                   id="headingThree">
                <h4 class="panel-title">
                  <a class="pa_italic collapsed"
                     role="button"
                     data-toggle="collapse"
                     data-parent="#accordion"
                     href="#collapseThree"
                     aria-expanded="false"
                     aria-controls="collapseThree">
                    <i class="fa fa-check-square-o fa-icon"
                       aria-hidden="true"></i> reviews (5) <span class="fa fa-angle-down fa-arrow"
                          aria-hidden="true"></span> <i class="fa fa-angle-up fa-arrow"
                       aria-hidden="true"></i>
                  </a>
                </h4>
              </div>
              <div id="collapseThree"
                   class="panel-collapse collapse"
                   role="tabpanel"
                   aria-labelledby="headingThree"
                   aria-expanded="false"
                   style="height: 0px;">
                <div class="panel-body">
                  {{goodsDetail.description}}
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading"
                   role="tab"
                   id="headingFour">
                <h4 class="panel-title">
                  <a class="pa_italic collapsed"
                     role="button"
                     data-toggle="collapse"
                     data-parent="#accordion"
                     href="#collapseFour"
                     aria-expanded="false"
                     aria-controls="collapseFour">
                    <i class="fa fa-question-circle fa-icon"
                       aria-hidden="true"></i> help <span class="fa fa-angle-down fa-arrow"
                          aria-hidden="true"></span> <i class="fa fa-angle-up fa-arrow"
                       aria-hidden="true"></i>
                  </a>
                </h4>
              </div>
              <div id="collapseFour"
                   class="panel-collapse collapse"
                   role="tabpanel"
                   aria-labelledby="headingFour"
                   aria-expanded="false"
                   style="height: 0px;">
                <div class="panel-body">
                  {{goodsDetail.description}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //collapse -->
        <!-- offers-cards -->
        <div class="w3single-offers offer-bottom">
          <div class="col-md-6 offer-bottom-grids">
            <div class="offer-bottom-grids-info2">
              <h4>Special Gift Cards</h4>
              <h6>More brands, more ways to shop. <br> Check out these ideal gifts!</h6>
            </div>
          </div>
          <div class="col-md-6 offer-bottom-grids">
            <div class="offer-bottom-grids-info">
              <h4>Flat $10 Discount</h4>
              <h6>The best Shopping Offer <br> On Fashion Store</h6>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
        <!-- //offers-cards -->
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsList } from '@/api'

export default {
  name: 'GoodsDetail',
  data: () => ({
    goodsDetail: {}
  }),
  beforeRouteEnter (to, from, next) {
    const { productId } = to.params
    if (!productId) return next('/GoodsSearchResult')
    next()
  },
  async created () {
    await this.getGoodsDetail()
  },
  mounted () { },
  methods: {
    async getGoodsDetail () {
      const { productId } = this.$route.params
      const data = await getGoodsList('', productId)
      this.goodsDetail = data.list
    }
  }
}
</script>

<style lang="stylus" src='./GoodsDetail.styl' scoped></style>



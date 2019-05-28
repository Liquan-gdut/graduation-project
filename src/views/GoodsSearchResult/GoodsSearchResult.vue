<template>
  <!-- products -->
  <div class="products">
    <div class="container">
      <div class="col-md-9 product-w3ls-right">
        <!-- breadcrumbs -->
        <ol class="breadcrumb breadcrumb1">
          <li><a href="index.html">Home</a></li>
          <li class="active">Products</li>
        </ol>
        <div class="clearfix"> </div>
        <!-- //breadcrumbs -->
        <div class="product-top">
          <h4>Electronics</h4>
          <ul>
            <li class="dropdown head-dpdn">
              <a href="#"
                 class="dropdown-toggle"
                 data-toggle="dropdown">Filter By<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Low price</a></li>
                <li><a href="#">High price</a></li>
                <li><a href="#">Latest</a></li>
                <li><a href="#">Popular</a></li>
              </ul>
            </li>
            <li class="dropdown head-dpdn">
              <a href="#"
                 class="dropdown-toggle"
                 data-toggle="dropdown">Brands<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Samsung</a></li>
                <li><a href="#">LG</a></li>
                <li><a href="#">Sony</a></li>
                <li><a href="#">Other</a></li>
              </ul>
            </li>
          </ul>
          <div class="clearfix"> </div>
        </div>
        <div class="products-row">
          <div class="col-md-3 product-grids"
               v-for="(goods, idx) in goodsList"
               :key="idx">
            <div v-if="goods"
                 class="agile-products">
              <div v-if="idx <= 4"
                   class="new-tag">
                <h6>20%<br>Off</h6>
              </div>
              <a @click="pageJump(goods.productId)"><img :src="`../../static/images/${goods.productImg}`"
                     class="img-responsive"
                     :alt="goods.productName"></a>
              <div class="agile-product-text">
                <h5><a>{{goods.productName}}</a></h5>
                <h6><del>{{goods.originalPrice}}</del> {{goods.salePrice}}</h6>
                <form action="#"
                      method="post">
                  <button type="submit"
                          class="w3ls-cart pw3ls-cart"><i class="fa fa-cart-plus"
                       aria-hidden="true"></i> Add to cart</button>
                </form>
              </div>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
      <div class="col-md-3 rsidebar">
        <div class="rsidebar-top">
          <div class="slider-left">
            <h4>Filter By Price</h4>
            <div class="row row1 scroll-pane jspScrollable"
                 tabindex="0"
                 style="overflow: hidden; padding: 0px; width: 223px;">
              <div class="jspContainer"
                   style="width: 223px; height: 160px;">
                <div class="jspPane"
                     style="padding: 0px; width: 246px; top: 0px;"><label class="checkbox"><input type="checkbox"
                           name="checkbox"><i></i>0 - $400 </label><label class="checkbox"><input type="checkbox"
                           name="checkbox"><i></i>$400 - $800 </label><label class="checkbox"><input type="checkbox"
                           name="checkbox"><i></i>$800 - $1500 </label><label class="checkbox"><input type="checkbox"
                           name="checkbox"><i></i>$1500 - $3000 </label></div>
                <div class="jspVerticalBar">
                  <div class="jspCap jspCapTop"></div>
                  <div class="jspTrack"
                       style="height: 160px;">
                    <div class="jspDrag"
                         style="height: 99px; top: 0px;">
                      <div class="jspDragTop"></div>
                      <div class="jspDragBottom"></div>
                    </div>
                  </div>
                  <div class="jspCap jspCapBottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="related-row">
          <h4>YOU MAY ALSO LIKE</h4>
          <div class="galry-like">
            <a href="single.html"><img src="@/assets/images/e1.png"
                   class="img-responsive"
                   alt="img"></a>
            <h4><a href="products.html">Audio speaker</a></h4>
            <h5>$100</h5>
          </div>
        </div>
      </div>
      <div class="clearfix"> </div>
      <!-- recommendations -->
      <div class="recommend">
        <h3 class="w3ls-title">Our Recommendations </h3>
        <div id="owl-demo5"
             class="owl-carousel owl-theme"
             style="opacity: 1; display: block;">
          <div class="owl-wrapper-outer">
            <div class="owl-wrapper"
                 style="width: 4560px; left: 0px; display: block; transition: all 1000ms ease 0s; transform: translate3d(0px, 0px, 0px);">
              <div class="owl-item"
                   style="width: 285px;">
                <div class="item">
                  <div class="glry-w3agile-grids agileits">
                    <div class="new-tag">
                      <h6>20% <br> Off</h6>
                    </div>
                    <a href="products1.html"><img src="@/assets/images/f2.png"
                           alt="img"></a>
                    <div class="view-caption agileits-w3layouts">
                      <h4><a href="products1.html">Women Sandal</a></h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                      <h5>$20</h5>
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
                               value="Women Sandal">
                        <input type="hidden"
                               name="amount"
                               value="20.00">
                        <button type="submit"
                                class="w3ls-cart"><i class="fa fa-cart-plus"
                             aria-hidden="true"></i> Add to cart</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-item"
                   style="width: 285px;">
                <div class="item">
                  <div class="glry-w3agile-grids agileits">
                    <a href="products.html"><img src="@/assets/images/e4.png"
                           alt="img"></a>
                    <div class="view-caption agileits-w3layouts">
                      <h4><a href="products.html">Digital Camera</a></h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                      <h5>$80</h5>
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
                               value="Digital Camera">
                        <input type="hidden"
                               name="amount"
                               value="100.00">
                        <button type="submit"
                                class="w3ls-cart"><i class="fa fa-cart-plus"
                             aria-hidden="true"></i> Add to cart</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-item"
                   style="width: 285px;">
                <div class="item">
                  <div class="glry-w3agile-grids agileits">
                    <div class="new-tag">
                      <h6>New</h6>
                    </div>
                    <a href="products4.html"><img src="@/assets/images/s1.png"
                           alt="img"></a>
                    <div class="view-caption agileits-w3layouts">
                      <h4><a href="products4.html">Roller Skates</a></h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                      <h5>$180</h5>
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
                               value="Roller Skates">
                        <input type="hidden"
                               name="amount"
                               value="180.00">
                        <button type="submit"
                                class="w3ls-cart"><i class="fa fa-cart-plus"
                             aria-hidden="true"></i> Add to cart</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-item"
                   style="width: 285px;">
                <div class="item">
                  <div class="glry-w3agile-grids agileits">
                    <a href="products1.html"><img src="@/assets/images/f1.png"
                           alt="img"></a>
                    <div class="view-caption agileits-w3layouts">
                      <h4><a href="products1.html">T Shirt</a></h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                      <h5>$10</h5>
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
                               value="T Shirt">
                        <input type="hidden"
                               name="amount"
                               value="10.00">
                        <button type="submit"
                                class="w3ls-cart"><i class="fa fa-cart-plus"
                             aria-hidden="true"></i> Add to cart</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-item"
                   style="width: 285px;">
                <div class="item">
                  <div class="glry-w3agile-grids agileits">
                    <div class="new-tag">
                      <h6>New</h6>
                    </div>
                    <a href="products6.html"><img src="@/assets/images/p1.png"
                           alt="img"></a>
                    <div class="view-caption agileits-w3layouts">
                      <h4><a href="products6.html">Coffee Mug</a></h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                      <h5>$14</h5>
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
                               value="Coffee Mug">
                        <input type="hidden"
                               name="amount"
                               value="14.00">
                        <button type="submit"
                                class="w3ls-cart"><i class="fa fa-cart-plus"
                             aria-hidden="true"></i> Add to cart</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-item"
                   style="width: 285px;">
                <div class="item">
                  <div class="glry-w3agile-grids agileits">
                    <div class="new-tag">
                      <h6>20% <br> Off</h6>
                    </div>
                    <a href="products6.html"><img src="@/assets/images/p2.png"
                           alt="img"></a>
                    <div class="view-caption agileits-w3layouts">
                      <h4><a href="products6.html">Teddy bear</a></h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                      <h5>$20</h5>
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
                               value="Teddy bear">
                        <input type="hidden"
                               name="amount"
                               value="20.00">
                        <button type="submit"
                                class="w3ls-cart"><i class="fa fa-cart-plus"
                             aria-hidden="true"></i> Add to cart</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-item"
                   style="width: 285px;">
                <div class="item">
                  <div class="glry-w3agile-grids agileits">
                    <a href="products4.html"><img src="@/assets/images/s2.png"
                           alt="img"></a>
                    <div class="view-caption agileits-w3layouts">
                      <h4><a href="products4.html">Football</a></h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                      <h5>$70</h5>
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
                               value="Football">
                        <input type="hidden"
                               name="amount"
                               value="70.00">
                        <button type="submit"
                                class="w3ls-cart"><i class="fa fa-cart-plus"
                             aria-hidden="true"></i> Add to cart</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-item"
                   style="width: 285px;">
                <div class="item">
                  <div class="glry-w3agile-grids agileits">
                    <div class="new-tag">
                      <h6>Sale</h6>
                    </div>
                    <a href="products3.html"><img src="@/assets/images/h1.png"
                           alt="img"></a>
                    <div class="view-caption agileits-w3layouts">
                      <h4><a href="products3.html">Wall Clock</a></h4>
                      <p>Lorem ipsum dolor sit amet consectetur</p>
                      <h5>$80</h5>
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
                               value="Wall Clock">
                        <input type="hidden"
                               name="amount"
                               value="80.00">
                        <button type="submit"
                                class="w3ls-cart"><i class="fa fa-cart-plus"
                             aria-hidden="true"></i> Add to cart</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="owl-controls clickable">
            <div class="owl-pagination">
              <div class="owl-page active"><span class=""></span></div>
              <div class="owl-page"><span class=""></span></div>
            </div>
            <div class="owl-buttons">
              <div class="owl-prev">prev</div>
              <div class="owl-next">next</div>
            </div>
          </div>
        </div>
      </div>
      <!-- //recommendations -->
    </div>
  </div>
  <!--//products-->
</template>

<script>
import '../../../static/css/owl.carousel.css'
import '../../../static/js/owl.carousel'
import '../../../static/js/jquery.jscrollpane.min'
import { getGoodsList } from '@/api'

export default {
  name: 'GoodsSearchResult',
  data: () => ({
    goodsList: []
  }),
  async created () {
    await this.getGoodsData()
  },
  mounted () {

  },
  methods: {
    async getGoodsData () {
      const data = await getGoodsList()
      this.goodsList = data.list
    },
    init () {
      // script for tabs
      $("#owl-demo5").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [640, 5],
        itemsDesktopSmall: [414, 4],
        navigation: true
      });
      var menu_ul = $('.faq > li > ul'),
        menu_a = $('.faq > li > a');
      menu_ul.hide();

      menu_a.click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
          menu_a.removeClass('active');
          menu_ul.filter(':visible').slideUp('normal');
          $(this).addClass('active').next().stop(true, true).slideDown('normal');
        } else {
          $(this).removeClass('active');
          $(this).next().stop(true, true).slideUp('normal');
        }
      });
    },
    pageJump (productId) {
      this.$router.push({ path: `/GoodsDetail/${productId}` })
    }
  }
}
</script>

<style lang="stylus" src='./GoodsSearchResult.styl' scoped></style>

<template>
  <div class="contact-us">
    <ul class='nav clearfix'>
      <li :class="{isActive: active}" @click= 'changeBar(true)'>总部</li>
      <li :class="{isActive: !active}" @click= 'changeBar(false)'>南京分公司</li>
    </ul>
    <div id='allmap'>
      <div id="map"></div>
      <div class="info-window" v-if="showInfoWindow && 0 < pixel.y < 480 && 0 < pixel.x < 1100" :style="{top: pixel.y + 40 + 'px', left:pixel.x - 30 + 'px'}">
        <div class='triangle'></div>
        <div class='info-word' v-if='i===0'>{{add[0]}}</div>
        <div class='info-word' v-else>{{add[1]}}</div>
      </div>
    </div>
    <div class='icon-footer'>
      <div class='icon'>
        <img src="../assets/icon/ic_email.png" alt="icity@jd.com">
        <p><a href="mailto:icity@jd.com" class='email'>icity@jd.com</a></p>
      </div>
      <div class='icon'>
        <img src="../assets/icon/ic_location.png" alt="icity@jd.com">
        <p v-if='i===0'>{{add[0]}}</p>
        <p v-else>{{add[1]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: true,
      i: 0,
      point: '',
      showInfoWindow: false,
      pixel: {},
      index: 0,
      add: ['北京亦庄经济开发区科创十一街18号院 京东集团总部大楼A座12层', '南京经济技术开发区红枫科技园D12栋10层']
    }
  },
  mounted () {
    this.map()
  },
  methods: {
    map () {
      const { BMap } = window
      let map = new BMap.Map('map')
      const points = [
        {
          lat: 116.570059,
          long: 39.791678,
          label: '北京亦庄经济开发区科创十一街18号院 京东集团总部大楼A座12层'
        },
        {
          lat: 119.01464,
          long: 32.153842,
          label: '南京经济技术开发区红枫科技园D12栋10层'
        }
      ]
      let rentPoint = new BMap.Point(points[this.i].lat, points[this.i].long)
      this.showInfoWindow = true
      // map.disableDragging()
      // let marker = new BMap.Marker(rentPoint)
      map.enableScrollWheelZoom(true)
      // map.addOverlay(marker)
      map.centerAndZoom(rentPoint, 15)
      let pixel = map.pointToPixel(rentPoint)
      console.log(pixel)
      this.pixel = pixel
      let pt = new BMap.Point(points[this.i].lat, points[this.i].long)
      const img = require('../assets/icon/ic_contact_about_us.png')
      let myIcon = new BMap.Icon(img, new BMap.Size(34, 42))
      var marker2 = new BMap.Marker(pt, {icon: myIcon}) // 创建标注
      map.addOverlay(marker2)

      // let infoWindow = new BMap.InfoWindow(points[this.i].label, opts)
      marker2.addEventListener('click', () => {
        // map.openInfoWindow(infoWindow, rentPoint)
        this.showInfoWindow = true
      })
      map.addEventListener('zoomstart', (e) => {
        this.showInfoWindow = false
        this.pixel = pixel
      })
      map.addEventListener('zoomend', (e) => {
        this.showInfoWindow = true
        let pixel = map.pointToPixel(rentPoint)
        this.pixel = pixel
      })

      map.addEventListener('moving', (e) => {
        this.showInfoWindow = true
        let pixel = map.pointToPixel(rentPoint)
        this.pixel = pixel
        console.log(this.pixel.x + '------')
      })
    },
    changeBar (status) {
      this.active = status
      if (status) {
        this.i = 0
      } else {
        this.i = 1
      }
      this.map()
    }
  }
}
</script>

<style lang="stylus" scoped src="./ContactUs.styl">
</style>

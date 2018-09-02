<template>
<div class="map-container">
  <div :class="['tips-box', {'box-hidden':  !hoverMarker.name}]" ref='tipsBox'>
    <p class="tips-title">{{hoverMarker.name}}</p>
    <p class="tips-content">
      {{hoverMarker.introduction | ellipsis(28)}}
    </p>
    <div class="triangle"></div>
  </div>
  <div class="icon-marker-box">
    <div class="icon icon-marker" v-for="(marker, mid) in markers" :key="mid" @mouseover="showTips(marker)" @mouseout="showTips({})"
      v-show="partnerTypesStatus[marker.type]"
        :style="{transform: `translate3d(${marker.x - 15}px, ${marker.y - 15}px, 0)`, 'background-image': `url(${partnerIcon1(marker.type, true)})`}">
      <!-- :style="{transform: `translate3d(${marker.x + 40}px, ${marker.y - 5}px, 0)`, 'background-image': `url(${partnerIcon1(marker.type, true)})`}"> -->
    </div>
  </div>
  <svg class="map" :viewBox="`0 0 ${svgRange.width} ${svgRange.height}`">
    <template v-for="(feature, idx) in svgPaths" >
      <g :key="idx">
        <path :d="feature.path" :class="{active: activeCity[feature.name]}"></path>
        <text v-if="activeCity[feature.name]" :x="feature.center[0] - 35" :y="feature.center[1] + 13" text-anchor='middle' class="place-name">
          {{feature.name}}
        </text>
      </g>
    </template>

    <defs v-for="(typeName, type) in partnerTypes" :key="type">
      <pattern :id="type" :width='iconSize' :height="iconSize" patternUnits="objectBoundingBox">
        <image class="icon" :href="type | partnerIcon(true)"></image>
      </pattern>
    </defs>

    <!-- <g v-for="(marker, idx) in markers" :key="`${idx}-marker`" v-show="partnerTypesStatus[marker.type]"  v-mouse-tracker='{moveTipbox}'> -->
    <g v-for="(marker, idx) in markers" :key="`${idx}-marker`" v-show="partnerTypesStatus[marker.type]">
      <circle :cx="marker.x" :cy="marker.y" :r="iconSize*0.4" :stroke="colorList[marker.type]" stroke-width="1" fill-opacity="0">
        <animate attributeName="r" :from="iconSize*0.4" :to="iconSize" dur="0.8s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" begin="0" from="1" to="0" dur="0.8s" repeatCount="indefinite"></animate>
      </circle>
      <circle :cx="marker.x" :cy="marker.y" :r="iconSize*0.4" :stroke="colorList[marker.type]" stroke-width="1" fill-opacity="0">
        <animate attributeName="r" :from="iconSize*0.4" :to="iconSize*1.4" dur="1s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" begin="0" from="1" to="0" dur="1s" repeatCount="indefinite"></animate>
      </circle>
      <circle :cx="marker.x" :cy="marker.y" :r="iconSize*0.4" :stroke="colorList[marker.type]" stroke-width="1" fill-opacity="0">
        <animate attributeName="r" :from="iconSize*0.4" :to="iconSize*1.8" dur="1.2s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" begin="0" from="1" to="0" dur="1.2s" repeatCount="indefinite"></animate>
      </circle>
      <!-- <circle :cx="marker.x" :cy="marker.y" :r='iconSize*0.8'
        :fill="`url(#${marker.type})`"
        @mouseover="showTips(marker)" @mouseout="showTips({})">
      </circle> -->
    </g>
  </svg>

  <div class="types-list">
    <div class="type" v-for="(typeName, type) in partnerTypes" :key="type"
      @click="togglePartnerTypesStatus(type)">
      <img src="@/assets/icon/icon-correct.png" alt="" class="checkbox" :class="{active: partnerTypesStatus[type]}">
      <img :src="type | partnerIcon(partnerTypesStatus[type])" class="icon"><span class="type-name">{{typeName}}</span>
    </div>
  </div>
</div>
</template>

<script>
import svgPaths from '@/config/chinapath.json'
import {getPartners} from '@/api'
import {geoMercator} from '@/services/d3'
import {mapConf, PARTNER_TYPE_MAP} from '@/config'
import {ellipsis} from '@/filters'

export default {
  data: () => ({
    svgPaths,
    partners: ['北京市'],
    hoverMarker: {
      name: '',
      introduction: ''
    },
    markers: [],
    svgRange: {
      width: mapConf.width,
      height: mapConf.height
    },
    tipsBoxRange: {
      width: 223,
      height: 179
    },
    iconSize: 20,
    partnerTypes: Object.freeze(PARTNER_TYPE_MAP),
    partnerTypesStatus: Object.assign({}, PARTNER_TYPE_MAP),
    colorList: {
      SCHOOL: '#58C0D2',
      GOVERNMENT: '#D96060',
      COMPANY: '#6582D2'
    }
  }),
  async mounted () {
    const partners = await getPartners()
    this.markers = partners.list.map(partener => {
      const [x, y] = this.projection([partener.longitude, partener.latitude])
      return {x, y, ...partener}
    })
  },
  computed: {
    activeCity () {
      return this.markers.reduce((actives, {province, type}) => {
        actives[province] = actives[province] || this.partnerTypesStatus[type]
        return actives
      }, {})
    },
    projection () {
      const {scale, center, width, height} = mapConf
      return geoMercator()
        .scale(scale)
        .center(center)
        .translate([width / 2, height / 2])
    }
  },
  methods: {
    // rangeLength ({x, y}) {
    //   range([0, svgRange.width], x)
    //   return `translate3d(${marker.x}px, ${marker.y}px, 0)`
    // },
    showTips ({introduction, name, x, y}) {
      this.hoverMarker = {name, introduction}
      this.$refs.tipsBox.style.transform = `translate3d(${x + 15}px, ${y - this.tipsBoxRange.height / 2}px, 0)`
    },
    // moveTipbox (el) {
    //   const {offsetX, offsetY} = el
    //   const {x, y} = el
    //   this.$refs.tipsBox.style.transform = `translate3d(${x + 20}px, ${y - this.tipsBoxRange.height / 2}px, 0)`
    // },
    togglePartnerTypesStatus (type) {
      this.partnerTypesStatus[type] = !this.partnerTypesStatus[type]
    },
    partnerIcon1 (typeName, active) {
      return require(`../assets/icon/${typeName.toLocaleLowerCase()}${active ? '-active' : ''}.svg`)
    }
  },
  directives: {
    mouseTracker: {
      bind (el, {value}) {
        const {moveTipbox} = value
        el.addEventListener('mouseover', moveTipbox)
      },
      unbind (el, {value}) {
        el.removeEventListener('mouseover', value.moveTipbox)
      }
    }
  },
  filters: {
    partnerIcon (typeName, active) {
      return require(`../assets/icon/${typeName.toLocaleLowerCase()}${active ? '-active' : ''}.svg`)
    },
    ellipsis
  }
}
</script>

<style lang="stylus" scoped src='./map.styl'></style>

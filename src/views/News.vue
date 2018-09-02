<template>
  <div class="news" >
    <div class="news-banner">
      <div class="news-banner_wrap">
        <div class="news-nav_box white-text" v-swapper = "{curActiveNewsIdx: activeNewsIdx, slidePortWidth: 1200}">
          <a :href="news.link" target="_blank" class="news-banner_content"
          v-for="(news, idx) in (newsList.slice(0, 3))" :key="idx">
            <div class="news-desc"  @mouseover="clearCurInterval" @mouseout="setCurInterval">
              <h2 class="banner_title">{{news.title}}</h2>
              <p class="banner_subtitle">{{news.subTitle | ellipsis(85)}}</p>
            </div>
              <img class="banner_img" :src="news.poster" :alt="news.title">
          </a>

          <a v-if="newsList.length" :href="newsList[0].link" target="_blank" class="news-banner_content">
            <div class="news-desc"  @mouseover="clearCurInterval" @mouseout="setCurInterval">
              <h2 class="banner_title">{{newsList[0].title}}</h2>
              <p class="banner_subtitle">{{newsList[0].subTitle | ellipsis(85)}}</p>
            </div>
              <img class="banner_img" :src="newsList[0].poster" :alt="newsList[0].title">
          </a>
        </div>
        <div class="tog-box">
          <span class="tog" v-for="(i, idx) in 3" :key="idx"
          :class="{active:idx===activeNewsIdx}" @click="swapper(idx)"></span>
        </div>
      </div>
    </div>
    <div class="news-content">
      <ul class="news-box">
        <li v-for="(news, idx) in newsList" :key='idx'
          class="list-item">
          <a :href="news.link" target="_blank">
            <img :src="news.thumbnail" :alt="news.title">
            <div class="news-word">
              <p class="news-title">{{news.title}}</p>
              <p class="news-subtitle">{{news.subTitle | ellipsis(85)}}</p>
              <span class="list-date">{{news.updateDate | timeFormate('YYYY-MM-DD')}}</span>
              <!-- 浏览量、访问量 -->
              <span class="list-tips"></span>
            </div>
          </a>
        </li>
      </ul>
      <div v-if='noMore' class="load-more"><hr class="hrLine"/>&nbsp;&nbsp;&nbsp;没有更多新闻了&nbsp;&nbsp;&nbsp;<hr class="hrLine"/></div>
      <div v-else class="load-more" @click="getArticles">加载更多</div>
    </div>
  </div>
</template>

<script>
import {getNewsList} from '@/api'
import {ellipsis, timeFormate} from '@/filters'
import {swapper} from '@/directives'
import {mapState} from 'vuex'
import {throttle} from '@/services/utils'
import { PAGE_SIZE } from '@/config'

export default {
  data: () => ({
    newsList: [],
    pageNo: 0,
    total: 0,
    newsNavList: [],
    activeNewsIdx: 0,
    schedule: null
  }),
  computed: {
    noMore () {
      return this.total > 0 && this.newsList.length >= this.total
    },
    ...mapState({
      newsShareList: state => state.newsShareList,
      domScroll: state => state.domScroll
    })
  },
  methods: {
    getArticles: throttle(async function () {
      console.log('get articles....')
      if (this.noMore) return this.$log.warn('no more news')
      const {total, list} = await getNewsList(this.pageNo + 1, PAGE_SIZE)
      this.pageNo++
      // 返回结果：{总数 ，新闻所有信息}，后续要改传入的“rows”，注意：此处变量名应与“返回数据”中的“key”相同
      this.total = total
      this.newsList = this.newsList.concat(list)
      this.$store.commit('STORE_NEWS_INFORM', this.newsList)
    }, 30),
    autoRun () {
      clearInterval(this.schedule)
      this.setCurInterval()
    },
    swapper (idx) {
      this.clearCurInterval()
      this.activeNewsIdx = idx
      this.setCurInterval()
    },
    setCurInterval () {
      const len = 3
      this.schedule = setInterval(() => {
        this.activeNewsIdx = (this.activeNewsIdx + 1) % len
      }, 3000)
    },
    clearCurInterval () {
      if (this.schedule) {
        clearInterval(this.schedule)
      }
    }
  },
  mounted () {
    console.log('mounted...')
    this.getArticles()
    this.autoRun()
  },
  directives: {swapper},
  filters: {ellipsis, timeFormate},
  watch: {
    domScroll ({scrollHeight, scrollTop, clientHeight}) {
      if (clientHeight + scrollTop + 600 >= scrollHeight) {
        this.getArticles()
      }
    }
  }
}
</script>

<style lang="stylus" scoped src='./News.styl'></style>

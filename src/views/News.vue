<template>
  <div class="news" v-global-scroll="watchGblobalScroll">
    <navigators></navigators>
    <div class="news-banner"></div>
    <div class="news-content">
      <ul>
        <li v-for="(news, idx) in newsList" :key='idx'
          class="list-item">
          <img :src="news.poster" :alt="news.title">
          <p class="title">{{news.title}}</p>
          <p class="subtitle">{{news.subtitle}}</p>
          <span class="list-tips">{{news.updateDate | timeFormate('YYYY-MM-DD')}}</span>
          <!-- 浏览量、访问量 -->
          <span class="list-tips"></span>
        </li>
      </ul>
      <div class="load-more" @click="getArticles">加载更多</div>
    </div>
  </div>
</template>

<script>

import Navigators from '../components/navigators.vue'
import {getArticles} from '@/api/article'
import {ellipsis, timeFormate} from '@/filters'
import {globalScroll} from '@/directives'

export default {
  components: {
    Navigators
  },
  data: () => ({
    newsList: [],
    pageNo: 0,
    total: 0,
    watchGblobalScroll: {x: 0, y: 0}
  }),
  methods: {
    async getArticles () {
      this.pageNo++
      if (this.total > 0 && this.newsList.length >= this.total) return this.$log.warn('no more news')
      const {total, rows} = await getArticles(this.pageNo, 1)
      this.total = total
      this.newsList = this.newsList.concat(rows)
    }
  },
  created () {
    this.getArticles()
  },
  directives: {globalScroll},
  filters: {
    ellipsis,
    timeFormate
  }
}
</script>

<style lang="scss" scoped src='./News.styl'></style>

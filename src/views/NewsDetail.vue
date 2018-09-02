<template>
  <div id="news-detail">
    <div class="content">
      <div class="news-information">
        <h2 class="news-title">{{article.title}}</h2>
        <p class="news-tip">
          <span class="news-date">{{article.updateDate | timeFormate('YYYY-MM-DD')}}</span>
        </p>
        <img class="news-img" :src="article.poster" :alt="article.title">
      </div>
      <div class="news-content" v-html="article.content"></div>
    </div>
    <div class="news-nav">
      <div class="news-nav-box">
        <div class="news-nav_item last">
          <div class="nav-content">
            <span class="nav-tip last-tip">上一篇</span>
            <p v-if="!previous" class="nav-title">
              ----</p>
            <p v-else class="nav-title" @click="navigate(previous)">
              {{previous.title}}</p>
          </div>
        </div>
        <div class="news-nav_item next">
          <div class="nav-content">
            <span class="nav-tip next-tip">下一篇</span>
            <p v-if="!next" class="nav-title">
              ----</p>
            <p v-else class="nav-title" @click="navigate(next)">
              {{next.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getNewsDetail } from '@/api'
import { ellipsis, timeFormate } from '@/filters'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      article: {},
      previous: {},
      next: {},
      loading: false,
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    const { id } = to.params
    if (!id) return next('/News')
    next()
  },
  async mounted () {
    const {id} = this.$route.params
    const {article, previous, next} = await getNewsDetail(id)
    // debugger
    this.article = article
    this.previous = previous
    this.next = next
  },
  filters: {
    ellipsis,
    timeFormate
  },
  computed: mapState({
    newsShareList: state => state.newsShareList
  }),
  methods: {
    navigate ({id}) {
      // this.$router.push({name: `NewsDetail`, params: {id: id}})
      this.$router.push({ path: `/NewsDetail/${id}` })
    },
    async fetchData () {
      const {id} = this.$route.params
      const {article, previous, next} = await getNewsDetail(id)
      this.article = article
      this.previous = previous
      this.next = next
      document.documentElement.scrollTop = 0
    }
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  margin-top: 120px;
}
.news-information {
  display: block;
}
.news-title {
  width: 826px;
  text-align: left;
  font-family: SourceHanSansCN-Regular;
  font-size: 48px;
  font-weight: normal;
  color: #333333;
}
.news-tip {
  margin-top: 5px;
  text-align: left;
  font-family: SourceHanSansCN-Normal;
  font-size: 14px;
  color: #999999;
}
.news-img {
  margin-top: 50px;
}
.news-content {
  width: 700px;
  margin: 50px auto;
}
.news-nav {
  position: relative;
  height: 150px;
  width: 100%;
  background-color: #4285f4;
}
.news-nav-box {
  position: relative;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  .news-nav_item {
    position: relative;
    width: 590px;
    height: 100%;
    float: left;
    text-align: left;
  }
  .nav-content {
    position: absolute;
    width: 500px;
    top: 50%;
    transform: translateY(-50%);
  }
  .last {
    border-right: 2px solid #fff;
  }
  .next {
    .nav-content {
      width: 600px;
    }
    .nav-tip, .nav-title {
      margin-left: 90px;
    }
  }
  .nav-tip {
    font-family: SourceHanSansCN-Normal;
    font-size: 20px;
    color: rgba(255,255,255,0.70);
  }
  .nav-title {
    font-family: SourceHanSansCN-Normal;
    font-size: 24px;
    color: #FFFFFF;
    margin-top: 10px;
    cursor: pointer;
  }
}
</style>

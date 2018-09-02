<template>
  <div class="employs black-text">
    <ul class="job">
      <li class="job-list" v-for="(job, idx) in jobList" :key="idx">
        <div class="job-tip" :class="{ activeJob:job.display }" @click="job.display = !job.display">
          <span class="job-name">{{job.name}}（ {{job.num}} 人）</span>
          <span class="job-date">{{job.updateDate | timeFormate('MM-DD')}} 发布</span>
          <span class="job-addr">{{job.address}}</span>
          <span class="iconfont icon-xiajiantouxi tog" :class="{'icon-shangjiantouxi': job.display}"></span>
        </div>
        <transition name="fade">
          <div v-if="job.display" v-html="job.content" class="job-content">{{job.content}}</div>
        </transition>
      </li>
    </ul>
    <p class="email">简历请投递：<span style="color: #4285F4;">uc-recruit@jd.com</span></p>
  </div>
</template>

<script>
import { getJobs } from '@/api'
import { timeFormate } from '@/filters'
import {throttle} from '@/services/utils'
import { PAGE_SIZE } from '@/config'
import {mapState} from 'vuex'

export default {
  name: 'Employs',
  data: () => ({
    jobList: [],
    pageNo: 0,
    total: 0,
    activeIdx: 0
  }),
  computed: {
    noMore () {
      return this.total > 0 && this.jobList.length >= this.total
    },
    ...mapState({
      domScroll: state => state.domScroll
    })
  },
  methods: {
    getJobList: throttle(async function () {
      if (this.noMore) return this.$log.warn('no more jobs')
      const {total, list} = await getJobs(this.pageNo + 1, PAGE_SIZE)
      list.forEach(job => {
        job.display = false
      })
      this.pageNo++
      this.total = total
      this.jobList = this.jobList.concat(list)
    }, 30),
    display (idx) {
      this.activeIdx = idx
    }
  },
  filters: {timeFormate},
  mounted () {
    this.getJobList()
  },
  watch: {
    domScroll ({scrollHeight, scrollTop, clientHeight}) {
      if (clientHeight + scrollTop + 600 >= scrollHeight) {
        this.getJobList()
      }
    }
  }
}
</script>

<style lang="stylus" scoped src='./Employs.styl'></style>

<template>
  <div class="node-time content">
    <div v-for="(list, index) in Lists" :key='index' class='lists'>
      <p class='time'>{{list.time}}</p>
      <p class='sec'>{{list.content}}</p>
    </div>
  </div>
</template>

<script>
import { TimeLists } from '@/config'
export default {
  created () {
    this.Lists = TimeLists
  },
  data () {
    return {
      Lists: [],
      Href: ['Home']
    }
  }
}
</script>

<style lang="stylus" scoped src="./NodeTime.styl">
</style>

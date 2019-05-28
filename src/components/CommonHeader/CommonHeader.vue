<template>
  <div class="header">
    <user-information></user-information>
    <search-box></search-box>
    <nav-categories></nav-categories>
  </div>
</template>

<script>
import UserInformation from './UserInformation.vue'
import SearchBox from './SearchBox.vue'
import NavCategories from './NavCategories.vue'

export default {
  name: 'Header',
  components: {
    UserInformation,
    SearchBox,
    NavCategories
  }
}
</script>

<style lang='stylus' scoped></style>

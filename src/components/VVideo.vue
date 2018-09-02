<template>
  <div class="wrap">
    <div class="poster-box">
      <img v-if="pause" class="poster" :src="poster" :alt="alt" @click="setVideoPause(false)">
      <img v-if="(src)" src="../assets/icon/play-video.png" alt="点击播放" title="点击播放" class="play-tog" @click="setVideoPause(false)">
      <div v-if="(src)" class="video-duration white-text">
        <img src="../assets/icon/icon_video_logo.png" alt="视频" class="video-logo">
        <span class="video-time">{{duration}}</span>
      </div>
      <div v-if="(src)" class="hover-bg"></div>
    </div>
    <div v-if='(src) && !pause' class="mask" @click.self="setVideoPause(true)">
      <div class="video-port">
        <video controls autoplay>
        <source :src="src" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <img src="../assets/icon/close.svg" alt="点击关闭视频" title="点击关闭视频" class="close-tog" @click="setVideoPause(true)" >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['src', 'poster', 'alt', 'duration'],
  data: () => ({
    pause: true
  }),
  methods: {
    setVideoPause (flag) {
      if (!this.src) { // 此处加判断原因：如果本页没有视频播放，将不能出发点击事件，否则将影响下一次播放
        return
      }
      this.pause = flag
    }
  }
}
</script>
<style lang="stylus" scoped>
full()
  top 0
  bottom 0
  left 0
  right 0

.wrap
  position relative
  .play-tog
    visibility hidden
    width 80px
    height 80px
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    cursor pointer
  .poster-box
    position relative
    height: 296px;
  .video-duration
    width 80px
    height 30px
    position absolute
    right 0
    bottom 0
    background #4285F4
  .video-logo
    position relative
    top 4px
.mask
  full()
  position fixed
  z-index 20
  background rgba(0,0,0,.6)

  .video-port
    width 61.8%
    height: 81.3%;
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    video
      width 100%
      max-height 100%
  .close-tog
    display none
    position absolute
    top 0
    right 0
    cursor pointer
  .video-port:hover > .close-tog
    display block
.poster
  // display block
  width: 380px;
  height: 296px;
.poster-box:hover > .play-tog
  visibility visible
  z-index 10

.poster-box:hover > .hover-bg
  position absolute
  top 0
  left 0
  width: 380px;
  height: 296px;
  background rgba(0,0,0,.2)
.poster-box:hover > .video-duration
  background rgba(0,0,0,0)
</style>

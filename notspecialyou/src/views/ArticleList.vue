<template>
  <div>
    <top-navigation style="background-color: #63c1ff;"></top-navigation>
    <header-body></header-body>
    <div class="article">
      <div class="art-list">
        <div class="list-top">
          <div class="author-img">
            <img class="photo" src="@/assets/222.png" alt="">
            <span>不特别的你</span>
            <img style="width:21px;height:21px;margin-left: 30px" src="@/assets/time.png" alt="">
            <span class="time">一个月前</span>
          </div>
        </div>
        <img width="80%" height="250px" src="https://user-gold-cdn.xitu.io/2018/6/8/163dd6e704c4d213?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1" alt="">
        <h2>让咖啡与代码相伴</h2>
        <h5>程序猿最幸福的事情可能就是，在炎热的夏天，吹着空调，喝着咖啡，敲着代码。由于这几天刚接触了微信小程序</h5>
      </div>
    </div>
  </div>
</template>

<script>
import topNavigation from '@/components/top-navigation/top-navigation'
import headerBody from '@/components/header/header'
export default {
  components: {
    headerBody,
    topNavigation
  }
}
</script>

<style lang="stylus" scoped>
.article
  width 100%
  .art-list
    width 70%
    height 300px
    margin 0 auto
    .list-top
      height 50px
      .author-img
        display flex
        align-items center
        width 300px
        .photo
          width 50px
          height 50px
          margin-right 5px
        .time
          margin-left 5px
</style>

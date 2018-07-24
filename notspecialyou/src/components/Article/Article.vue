<template>
  <div class="article">
    <div class="art-list"  v-for="item in this.List" :key="item.id">
      <div style="padding:25px">
        <div class="list-top">
          <div class="author-img">
            <img class="photo" src="@/assets/222.png" alt="">
            <span>{{item.author}}</span>
            <img class="rili" src="@/assets/time.png" alt="">
            <span class="time">{{item.data.split('T')[0]}}</span>
          </div>
        </div>
        <div class="bigphoto">
        </div>
        <h2 class="title">{{item.title}}</h2>
        <p class="content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props : {
    List: Array
  }
}
</script>

<style lang='stylus' scoped>
.article
  width 100%
  .art-list
    width 75%
    height 39vw
    margin 0 auto
    margin-bottom 20px
    position relative
    background-color #fff
    .list-top
      height 50px
      .author-img
        display flex
        align-items center
        .photo
          width 50px
          height 50px
          margin-right 5px
          border-radius 50%
        .rili
          width 21px
          height 21px
          margin-left 30px
        .time
          margin-left 5px
        @media screen and (max-width 475px)
          .photo
            width 30px
            height 30px
          span
            font-size 13px
            letter-spacing 1px
          .rili
            width 18px
            height 18px
            margin-left 10px
        @media screen and (max-width 320px)
          span 
            font-size 10px        
    .bigphoto
      width 100%
      height 24vw
      background-image url('https://user-gold-cdn.xitu.io/2018/6/8/163dd6e704c4d213?imageView2/1/w/1080/h/320/q/85/format/webp/inter')
      background-size cover
      border-radius 5px
    .title
      color: #909090
      font-weight: 600
      letter-spacing 3px
      font-size 30px
    .content
      overflow hidden
      white-space nowrap
      text-overflow ellipsis

  @media screen and (max-width 475px)
    .art-list
      height 280px
      .title
        font-size 20px
    


</style>

<template>
  <div class="article">
    <div class="art-list"  v-for="item in this.List" :key="item.id">
      <div style="padding:25px">
        <div class="list-top">
          <div class="author-img">
            <img class="photo" @click="toabout" src="@/assets/222.png" alt="">
            <span class="size" @click="toabout">{{item.author}}</span>
            <img class="rili" src="@/assets/time.png" alt="">
            <span class="size">{{item.data.split('T')[0]}}</span>
          </div>
        </div>
        <img :src="item.images" class="bigphoto" @click="toessay(item._id,item)" alt="">
        <h2 class="title" @click="toessay(item._id,item)">{{item.title}}</h2>
        <p class="content" @click="toessay(item._id,item)">{{item.content}}</p>
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
  props: {
    List: Array
  },
  methods: {
    toessay (id) {
      this.$router.push({ path: `/article/${id}` })
    },
    toabout () {
      this.$router.push({path: '/about'})
    }
  },
  mounted () {
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
    background-color: rgba(0, 0, 0, 0.02);
    border-radius 20px
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
          margin-right 20px
        .time
          margin-left 5px
        @media screen and (max-width 475px)
          .photo
            width 30px
            height 30px
          .size
            font-size 12px
            letter-spacing 1px
          .rili
            width 18px
            height 18px
            margin-left 10px
            margin-right 2px
        @media screen and (max-width 320px)
          .size
            font-size 8px
            margin-left 5px
            margin-right 0px
    .bigphoto
      width 100%
      height 24vw
      background-repeat: no-repeat
      background-position: center 0;
      background-size cover
      border-radius 10px
      margin-top 10px
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
        font-size 14px
      .content
        font-size 10px
</style>

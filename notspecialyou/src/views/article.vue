<template>
  <div class="article">
    <div class="top">
      <div class="headimg">
        <img src="@/assets/222.png" alt="">
      </div>
      <div class="msg">
        <p class="name">{{data.author}}</p>
        <p class="time">{{data.data.split('T')[0]}}</p>
      </div>
    </div>
    <div class="Img">
      <img :src="data.images" alt="">
    </div>
    <h2>{{data.title}}</h2>
    <div v-html="article" class="art-box">
    </div>
  </div>
</template>

<script>
import {articleList} from '@/api/getData.js'
export default {
  async created () {
    await articleList().then((data) => {
      data.data.forEach((item) => {
        if (item._id === this.$route.params._id) {
          this.article = item.html
          this.data = item
        }
      })
    })
  },
  data () {
    return {
      article: null,
      data: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.art-box
  width 70%
  // background-color red
  margin 0 auto

.top
  width 70%
  display flex
  align-items center
  justify-content center
  margin 0 auto
  margin-top 70px
  margin-bottom 35px
  .headimg
    width 50px
    height 50px
    border-radius 50%
    margin-right 30px
    img 
      border-radius 50%
  .msg
    flex 1
    .name
      font-weight 600
    .time
      color: #909090
      font-size 14px
.Img
  width 70%
  height 400px
  margin 0 auto
  img 
    width 100%
    height 100%
h2
  width 70%
  margin 0 auto
  color #000
  font-weight 700
  font-size 38px
  margin-top 50px
  
@media screen and (max-width 600px)
  .art-box
    width 80%
  .top
    width 100%
    margin-top 30px
    margin-bottom 20px
    .headimg
      margin-right 10px
      margin-left 20px
  .Img
    height 150px
    width 80%
  h2
    width 80%
    margin 0 auto
    color #000
    font-weight 500
    font-size 30px
    margin-top 30px
</style>

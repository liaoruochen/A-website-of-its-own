<template>
  <div>
    <div class="container-body">
      <div class="head">
        <img class="pic" src="@/assets/222.png" alt="">
      </div>
      <h2>不特别的你</h2>
      <h3>一个正在努力学习的菜鸟</h3>
      <linkel></linkel>
    </div>
  </div>
</template>

<script>
import linkel from '@/components/index/linkel.vue'
export default {
  components: {
    linkel
  }
}
</script>

<style lang="stylus" scoped>
.container-body
  width 100%
  height 400px
  text-align center
  background url('https://blog.minhow.com/images/banner.jpg')
  h2
    color #fff
    font-size 48px
    letter-spacing 2px
    text-align center
    font-weight 400
  h3
    color #666
    letter-spacing 5px
    font-weight 100
  .head
    width 100%
    padding-top 5px
    .pic
      width 150px
      height 150px
      border 3px solid #f8f8f8
      border-radius 50%

</style>

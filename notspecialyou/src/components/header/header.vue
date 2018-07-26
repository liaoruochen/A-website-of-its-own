<template>
    <div class="container-body">
      <div class="head" @click="Refresh">
        <img class="pic" src="@/assets/222.png" alt="">
      </div>
      <h2>不特别的你</h2>
      <h3>一个正在努力学习的菜鸟</h3>
      <linkel></linkel>
    </div>
</template>

<script>
import linkel from '@/components/index/linkel.vue'
export default {
  components: {
    linkel
  },
  methods : {
    Refresh () {
      console.log('1')
      this.$router.go(0)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container-body
  width 100%
  height 400px
  text-align center
  background url('https://blog.minhow.com/images/banner.jpg')
  padding 0
  h2
    color #fff
    font-size 48px
    letter-spacing 2px
    text-align center
    font-weight 400
    font-family: 'STXingkai'
  h3
    color #666
    letter-spacing 5px
    font-weight 100
    font-size 18px
  .head
    width 100%
    padding-top 5px
    .pic
      width 100px
      height 100px
      border 3px solid #f8f8f8
      border-radius 50%

</style>

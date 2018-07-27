<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import {Loading} from 'element-ui'
export default {
  name: 'App',
  created () {
    Loading.service({fullscreen: true, text: '拼命加载中'})
  },
  mounted () {
    this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      Loading.service({fullscreen: true, text: '拼命加载中'}).close()
    })
  }
}
</script>

<style lang="stylus">
@import './common/style/base.css'
.fade-enter
  opacity 0
.fade-enter-active
  transition opacity 0.5s
.fade-leave
  opacity 1
.fade-leave-active
  opacity 0
  transition opacity 0.5s

</style>

<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './common/style/base.css';

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

<template>
    <div class="about-container">
        <userInfo></userInfo>
        <hr>
    </div>
</template>

<script>
import userInfo from '@/components/userInfo/userInfo'
export default {
  components: {
    userInfo
  }
}
</script>

<style lang="stylus" scoped>
hr {
    width: 700px;
    border: 1px dashed #DDDDDD;
    margin: 15px auto;
}
</style>

<template>
  <div class='login'>
    <h1>Login</h1>
    <el-input placeholder='请输入账号' />
    <el-input placeholder='请输入密码'/>
    <el-button type="primary">登录</el-button>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang='stylus' scoped>
.login
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px
  h1
    font-size 43px
    text-align center
    margin-top 20vh
    margin-bottom 60px
  .el-input
    display block
    margin 0 auto 
    width 400px
    height 50px
    margin-top 30px
  @media screen and (max-width: 600px)
    .el-input
      width 220px
  .el-button
    width 400px
    display block
    margin 0 auto
    margin-top 30px
  @media screen and (max-width: 600px)
    .el-button
      width 220px
  
    

</style>
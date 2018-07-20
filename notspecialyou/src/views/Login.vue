<template>
  <div class='login'>
    <h1>Login</h1>
    <el-form :model="ruleForm" :rules="rules" class="demo-ruleForm">
      <el-form-item prop="admin">
        <el-input v-model='ruleForm.admin' width="600px" placeholder='请输入账号' autofocus clearable suffix-icon="el-icon-date"/>
      </el-form-item>
      <el-form-item prop='password'>
        <el-input v-model='ruleForm.password' type='password' placeholder='请输入密码' suffix-icon="el-icon-edit" clearable/>
      </el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form>

  </div>
</template>

<script>
import axios from 'axios'
import {check} from '@/func/func.js'
export default {
  data () {
    var checkAdmin = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else if (value.length < 6) {
        return callback(new Error('密码长度不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        admin: '',
        password: null
      },
      rules: {
        admin: [
          {validator: checkAdmin, trigger: 'blur'}
        ],
        password: [
          {validator: checkPassword, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login () {
      const userinfo = {
        username: this.ruleForm.admin,
        password: this.ruleForm.password
      }
      axios.post('http://127.0.0.1:3000/user/login',userinfo).then(msg => {
        console.log(msg)
        check(msg,
        () => {
          this.$router.push({path: '/system'})
        },
        () => {
          const h = this.$createElement
          this.$notify({
            title: '提示',
            message: h('i', {style: 'color: red'}, '您输入的账号有误'),
            type: 'warning'
          })
        },
        () => {
          const h = this.$createElement
          this.$notify({
            title: '提示',
            message: h('i', {style: 'color: red'}, '您输入的密码有误'),
            type: 'warning'
          })
        }
        )
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.login
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  h1
    font-size: 43px;
    text-align: center;
    margin-top: 20vh;
    margin-bottom: 60px;

  .el-input
    display: block;
    margin: 0 auto;
    width: 400px;
    height: 50px;
    margin-top: 20px;

  @media screen and (max-width: 600px)
    .el-input
      width: 220px;

  .el-button
    width: 400px;
    display: block;
    margin: 0 auto;
    margin-top: 30px;

  @media screen and (max-width: 600px)
    .el-button
      width: 220px;

.demo-ruleForm
  width 400px
  margin 0 auto
  @media screen and (max-width: 600px)
    width 220px

.error
  text-align center
  font-size 18px
  padding-top 20px
</style>

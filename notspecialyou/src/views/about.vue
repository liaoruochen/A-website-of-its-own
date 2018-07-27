<template>
    <div class="about-container">
      <topNav style="background-color: #63c1ff;"></topNav>
      <header-body></header-body>
      <div class="about">
        <h3>关于我</h3>
        <hr>
        <p>从事Web开发，主要开发语言<code>javascript</code>熟练掌握<code>vue</code>， <code>小程序</code>，<code>react</code>等主流框架。代码习惯于<code>Eslint</code>风格，有一定的代码洁癖，经常重构自己写的代码</p>
        <p>对<code>后端</code>，<code>数据库</code>等技能有一定的理解</p>
        <p>热爱<code>开源项目</code>，热爱<code>新技术</code>，热爱<code>新事物</code></p>

        <h3>关于工作</h3>
        <hr>
        <p>目前大三，正在寻找实习单位。有意者可以联系我...</p>

        <h3>我的简历</h3>
        <hr>
        <p><router-link to="/jianli">简历</router-link></p>

        <h3>关于学习</h3>
        <hr>
        <p>正在向终生学习者前进... (目标是成为一个优秀的全栈工程师...)  加油！</p>
        <p>近期学习方向: <code>Vue</code>，<code>React</code></p>

        <h3>关于座右铭</h3>
        <hr>
        <blockquote>
          <p>The Harder You Work, The Luckier You Will Be. (越努力，越幸运)</p>
        </blockquote>

        <h3>关于爱好</h3>
        <p>热爱<code>运动</code>，热爱<code>健身</code>，也喜欢<code>玩游戏</code>， <code>听音乐</code>，<code>看电影</code></p>

        <h3>联系我</h3>
        <ul>
          <li>Github：<a href="https://github.com/liaoruochen">不特别的你</a></li>
          <li>Segmentfault：<a href="https://segmentfault.com/u/liaoruochen">不特别的你</a></li>
          <li>掘金：<a href="https://juejin.im/user/5acd74e0f265da238c3b051b/posts">不特别的你</a></li>
          <li>微博：<a href="https://weibo.com/5517665877/profile?topnav=1&wvr=6&is_all=1">不特别的你</a></li>
          <li>邮箱：920037556@qq.com</li>
          <li>微信：love920037556</li>
        </ul>
      </div>
    </div>
</template>

<script>
import headerBody from '@/components/header/header'
import topNav from '@/components/top-navigation/top-navigation'
export default {
  components: {
    headerBody,
    topNav
  }
}
</script>

<style lang="stylus" scoped>
.about
  width 60%
  margin  0 auto
  margin-bottom 50px
  blockquote
    position relative
    padding 1px 20px
    border-left 4px solid #0cc
    color #6e6e6e
    background #f5f5f5
    font-size 14px
    border-radius 0 2px 2px 0
    margin 10px 0
  @media screen and (max-width 800px){
    width 75%
    margin-bottom 30px
  }
</style>

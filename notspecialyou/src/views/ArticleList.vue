<template>
  <div class="box">
    <top-navigation style="background-color: #63c1ff;"></top-navigation>
    <header-body></header-body>
    <Article :List="articleList" style="margin-top:40px"></Article>
  </div>
</template>

<script>
import { articleList } from '@/api/getData.js'
import topNavigation from '@/components/top-navigation/top-navigation'
import headerBody from '@/components/header/header'
import Article from '@/components/Article/Article'
export default {
  async created () {
    await articleList().then( (msg) => {
      this.articleList = msg.data
    })
    console.log(this.articleList)
  },
  data () {
    return {
      articleList: null
    }
  },
  components: {
    headerBody,
    topNavigation,
    Article
  }
}
</script>
<style lang="stylus" scoped>
.box
  background-color #f4f5f5
</style>

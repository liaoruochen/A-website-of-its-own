<template>
  <div class="article">
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
        }
      })
    })
  },
  data () {
    return {
      article: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.art-box
  width 70%
  // background-color red
  margin 0 auto
@media screen and (max-width 600px)
  .art-box
    width 100%
</style>

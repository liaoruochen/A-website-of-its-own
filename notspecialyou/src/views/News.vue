<template>
  <div>
    <div class="top">
      <input class='title' placeholder="输入文章标题..." style='font-size: 28px' v-model="title" />
      <el-button type='primary' :loading="openLoading" @click="publish">发布</el-button>
      <img src="@/assets/222.png" alt="">
    </div>
    <div class="container">
      <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height:100vh"/>
    </div>
  </div>
</template>

<script>
import {postArticle} from '@/api/getData.js'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'markdown',
  data: function () {
    return {
      content: '',
      html: '',
      configs: {},
      title: '',
      openLoading: false
    }
  },
  components: {
    mavonEditor
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd (pos, $file) {
      var formdata = new FormData()
      formdata.append('file', $file)
      // 这里没有服务器供大家尝试，可将下面上传接口替换为你自己的服务器接口
      this.$axios({
        url: '/common/upload',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(url => {
        this.$refs.md.$img2Url(pos, url)
      })
    },
    change (value, render) {
      // render 为 markdown 解析后的结果
      this.html = render
    },
    async publish () {
      const data = {
        title: this.title,
        content: this.content,
        html: this.html,
        author: '不特别的你',
        images: 'https://github.com/liaoruochen/A-website-of-its-own/blob/master/notspecialyou/src/assets/222.png?raw=true'
      }
      if (data.title && data.content) {
        const saveArticle = await postArticle(data).then(() => {
          this.$message({
            showClose: true,
            message: '发布成功',
            type: 'success'
          })
        })
        console.log(saveArticle)
        this.openLoading = true
      } else if (!data.title) {
        this.$message.error('请输入标题')
      } else if (!data.content) {
        this.$message.error('请输入文章内容')
      }
    }
  }
}
</script>
<style scoped lang='stylus'>
.top
  height 60px
  width 100%
  min-width 320px
  display flex
  align-items center
  justify-content center
  overflow hidden
  img
    width 50px
    height 50px
    border-radius 50%
    margin-left 20px
    margin-right 10px
    // border 1px solid black
.title
  height 60px
  margin-left 20px
  border 0;
  outline none
  flex 1
</style>

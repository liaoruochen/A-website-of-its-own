<template>
  <div>
    <div class="top">
      <input class='title' placeholder="输入文章标题..." style='font-size: 28px' v-model="title" />
      <img class="ppp" @click="imgpush" src="@/assets/ppp.png" alt="">
      <el-button type='primary' :loading="openLoading" @click="publish">发布</el-button>
      <img class="img" src="@/assets/222.png" alt="">
    </div>
    <div class="container">
      <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height:100vh"/>
    </div>
    <el-dialog title="提示" :visible.sync="push" width="80%" :before-close="handleClose">
      <el-input v-model="url" placeholder="请输入url" clearable= true autofocus = true></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="push = false">取 消</el-button>
        <el-button type="primary" @click="push = false">确 定</el-button>
      </span> 
    </el-dialog>

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
      openLoading: false,
      push: false,
      url: ''
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
        images: this.url
      }
      if (data.title && data.content && data.images) {
        await postArticle(data).then((msg) => {
          this.$message({
            showClose: true,
            message: '发布成功',
            type: 'success'
          })
        })
        this.openLoading = true
      } else if (!data.title) {
        this.$message.error('请输入标题')
      } else if (!data.content) {
        this.$message.error('请输入文章内容')
      } else if (!data.images) {
        this.$message.error('请输入文章图片')
      }
    },
    imgpush () {
      this.push = true
    }
  }
}
</script>
<style scoped lang='stylus'>
.top
  height 60px
  width 100%
  display flex
  align-items center
  overflow hidden
  background #fff
  .ppp
    width 50px
    height 50px
    margin-right 20px
  .img
    width 40px
    height 40px
    border-radius 50%
    margin-left 20px
    margin-right 10px
    // border 1px solid black
  .title
    height 60px
    margin-left 20px
    border 0;
    outline none
    width 70%
    flex 1
  @media screen and (max-width 475px)
    .img
      width 35px
      height 35px
      margin-left 5px
      margin-right 5px

    .ppp
      width 35px
      height 35px
      margin-right 5px
  @media screen and (max-width 320px)
    .img
      display none
    .ppp
      width 25px
      height 25px
      margin-right 3px
  
</style>

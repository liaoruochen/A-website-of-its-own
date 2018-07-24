const Koa = require('koa')
const app = new Koa()
const { connect, initSchemas } = require('./database/init.js')
const Router = require('koa-router')
let user = require('./appApi/User.js')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
// const mongoose = require('mongoose')
app.use(cors())
let router = new Router()
router.use('/user', user.routes())

app.use(router.routes())
app.use(router.allowedMethods())
app.use(bodyParser())

;(async () => {
  await connect()
  initSchemas()
  // const User = mongoose.model('User')
  // let adminUser = new User({userName: 'liaoruochen', password: 971004})
  // adminUser.save().then(() => {
  //   console.log('插入成功')
  // })
  // let users = await User.findOne({}).exec()
  // console.log(users)

  // const Article = mongoose.model('Article')
  // let article = new Article({title: '让咖啡与代码相伴', content: 'ssssssssssss',html: 'ssssssssss'})
  // article.save().then(() => {
  //   console.log('插入成功')
  // })
})()

app.listen(3000, () => {
  console.log('在3000端口打开')
})

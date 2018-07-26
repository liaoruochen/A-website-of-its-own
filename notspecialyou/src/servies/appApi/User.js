const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

let router = new Router()
router.get('/', async (ctx) => {
  ctx.body = '这是用户操作首页'
})

router.post('/login', bodyParser(), async (ctx) => {
  const User = mongoose.model('User')
  let users = await User.findOne({userName: 'liaoruochen'}).exec()
  if (users.userName !== ctx.request.body.username) {
    ctx.body = 'nameErr'
  } else if (users.password !== ctx.request.body.password) {
    ctx.body = 'passErr'
  } else {
    ctx.body = 'success'
  }
})

router.post('/article', bodyParser(), async (ctx) => {
  ctx.body = ctx.request.body
  const Article = mongoose.model('Article')
  let article = new Article(ctx.body)
  article.save().then(() => {
    console.log('插入成功')
  })
})

router.post('/img', bodyParser(), async (ctx) => {
  ctx.body = ctx.request.body
  console.log(ctx.body)
})

router.get('/articleList', async (ctx) => {
  const Article = mongoose.model('Article')
  let article = await Article.find().exec()
  ctx.body = article
})
module.exports = router

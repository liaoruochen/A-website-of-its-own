const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

let router = new Router()
router.get('/', async (ctx) => {
  ctx.body = '这是用户操作首页'
})

router.post('/login', bodyParser(), async (ctx) => {
  const User = mongoose.model('User')
  let users = await User.findOne({}).exec()
  if (users.userName !== ctx.request.body.username) {
    ctx.body = 'nameErr'
  } else if (users.password !== ctx.request.body.password) {
    ctx.body = 'passErr'
  } else {
    ctx.body = 'success'
  }
})
module.exports = router

const mongoose = require('mongoose')
const db = 'mongodb://localhost/User'
const glob = require('glob')
const {resolve} = require('path')

exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
}
mongoose.Promise = global.Promise
// 连接数据库
mongoose.connect(db)
let maxConnectTimes = 0
exports.connect = () => {
  return new Promise((resolve, reject) => {
    // 增加数据库连接的事件监听
    mongoose.connection.on('disconnected', () => {
      // 进行重连
      console.log('**********数据库断开********')
      if (maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        throw new Error('数据库出现问题，程序无法解决')
      }
    })
    // 数据库出现错误的时候
    mongoose.connection.on('error', err => {
      console.log('**********数据库错误*******')
      if (maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject(err)
        throw new Error('数据库出现问题，程序无法解决')
      }
    })
    // 链接打开的时候
    mongoose.connection.once('open', () => {
      console.log('MongoDB Connected successfully!')
      resolve()
    })
  })
}

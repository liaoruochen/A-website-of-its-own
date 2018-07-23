
// 引入Mongoose
const mongoose = require('mongoose')
// 声明Schema
const Schema = mongoose.Schema
// 声明Object类型
let ObjectId = Schema.Types.ObjectId

// 创建用户Schema
const Article = new Schema({
  ArticleId: ObjectId,
  title: {type: String},
  data: {type: Date, default: Date.now()},
  content: {type: String},
  html: {type: String},
  author: {type: String},
  images: {type: String}
})

mongoose.model('Article', Article)

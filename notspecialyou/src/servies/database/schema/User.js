// 引入Mongoose
const mongoose = require('mongoose')
// 声明Schema
const Schema = mongoose.Schema
// 声明Object类型
let ObjectId = Schema.Types.ObjectId

// 创建用户Schema
const userSchema = new Schema({
  UserId: ObjectId,
  userName: {unique: true, type: String},
  password: {type: String}
})

mongoose.model('User', userSchema)

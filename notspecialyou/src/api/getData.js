import axios from 'axios'

export const postArticle = (data) => new Promise((resolve, reject) => {
  axios.post('http://www.liaoruochen.cn:3000/user/article', data).then(res => {
    resolve(res)
  })
})

export const checkForm = (userinfo) => new Promise((resolve, reject) => {
  axios.post('http://www.liaoruochen.cn:3000/user/login', userinfo).then((res) => {
    resolve(res)
    // console.log(res)
  })
})

export const articleList = () => new Promise((resolve, reject) => {
  axios.get('http://www.liaoruochen.cn:3000/user/articleList').then((res) => {
    resolve(res)
  })
})

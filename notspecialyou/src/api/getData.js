import axios from 'axios'

export const postArticle = (data) => new Promise((resolve, reject) => {
  axios.post('http://127.0.0.1:3000/user/article', data).then(res => {
    resolve(res)
  })
})

export const checkForm = (userinfo) => new Promise((resolve, reject) => {
  axios.post('http://127.0.0.1:3000/user/login', userinfo).then((res) => {
    resolve(res)
    // console.log(res)
  })
})

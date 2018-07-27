import Vue from 'vue'
import Router from 'vue-router'

// import index from '@/views/index'
// import about from '@/views/about'
// import login from '@/views/login'
// import system from '@/views/system'
// import news from '@/views/News'
// import NotFound from '@/views/404'
// import article from '@/views/article'
// import articlelist from '@/views/ArticleList'
// import jl from '@/views/jl'

const index = resolve => require(['@/views/index'], resolve)
const about = resolve => require(['@/views/about'], resolve)
const login = resolve => require(['@/views/login'], resolve)
const system = resolve => require(['@/views/system'], resolve)
const news = resolve => require(['@/views/News'], resolve)
const NotFound = resolve => require(['@/views/404'], resolve)
const article = resolve => require(['@/views/article'], resolve)
const articlelist = resolve => require(['@/views/articlelist'], resolve)
const jl = resolve => require(['@/views/jl'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: index
    },
    {
      name: 'about',
      path: '/about',
      component: about
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'system',
      path: '/system',
      component: system
    },
    {
      name: 'news',
      path: '/system/news',
      component: news
    },
    {
      name: 'ArticleList',
      path: '/articlelist',
      component: articlelist
    },
    {
      name: 'article',
      path: `/article/:_id`,
      component: article
    },
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/jianli',
      component: jl
    }

  ]
})

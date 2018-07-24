import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import about from '@/views/about'
import login from '@/views/login'
import system from '@/views/system'
import news from '@/views/News'
import articlelist from '@/views/ArticleList'

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
      path: '/arciclelist',
      component: articlelist
    }

  ]
})

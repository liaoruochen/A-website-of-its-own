import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import about from '@/views/about'

import Footers from '@/components/Footers'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:index
    },{
      path: '/',
      component: Footers
    },
    {
      path:'/about',
      component:about
    }
  ]
})

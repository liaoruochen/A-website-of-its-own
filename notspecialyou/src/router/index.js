import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import about from '@/views/about'
import tags from '@/views/tags'


Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      component: index
=======
      path:"/",
      component:index
    },{
      path: '/tags',
      component: tags
>>>>>>> ljh
    },
    {
      path: '/about',
      component: about
    }
  ]
})

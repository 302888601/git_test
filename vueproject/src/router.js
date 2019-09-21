import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        // {path: '', name: '', component: ()=>import()},
        // {path: '', name: '', component: ()=>import()},
        // {path: '', name: '', component: ()=>import()},
        // {path: '', name: '', component: ()=>import()},
      ]
    },
  ]
})

router.beforeEach((to,from,next)=>{
  if(!localStorage.getItem('token')){
    if(to.name !== 'login'){
      router.push({name: 'login'})
    }
  }
  next()
})

export default router

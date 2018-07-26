import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/pages/home/home.vue'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: resolve => require(['@/pages/user/user.vue'], resolve),
      meta: {
        title: '我的'
      }
    },
    {
      path: '*',
      redirect: '/home',
      meta: {
        title: '首页'
      }
    }
  ]
})

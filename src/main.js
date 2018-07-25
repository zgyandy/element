// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import {Button, Select, Radio} from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Radio.name, Radio)
require('./assets/iconfont/iconfont.css')
require('./assets/css/common.css')

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.mate) {
    document.title = to.mate.title
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

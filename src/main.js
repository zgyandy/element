// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import {Button, Select, Radio, Input, InputNumber, Carousel, CarouselItem} from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Radio.name, Radio)
Vue.component(Input.name, Input)
Vue.component(InputNumber.name, InputNumber)
Vue.use(Carousel)
Vue.use(CarouselItem)
require('./assets/iconfont/iconfont.css')
require('./assets/css/common.css')

Vue.config.productionTip = false
// 修改title值
router.beforeEach((to, from, next) => {
  if (to.meta) {
    document.title = to.meta.title
  } else {
    document.title = 'element'
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

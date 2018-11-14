// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入的ElementUi组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入的css公共样式
import '@/assets/common.css'
Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

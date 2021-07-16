import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";
import toast from 'components/common/toast'
// ssaff
Vue.config.productionTip = false
//添加事件总线
Vue.prototype.$bus = new Vue()
//调用fastclick函数
FastClick.attach(document.body)
// 使用图片懒加载
Vue.use(VueLazyload)
//安装toast插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

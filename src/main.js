import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './http/request/request' 


Vue.config.productionTip = false
Vue.use(ElementUI,axios);
Vue.prototype.router = router;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

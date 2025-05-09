import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import Vant from 'vant';
import 'vant/lib/index.css';
import VueIconFont from "vue-icon-font-pro";

// Vue.use(Vant)
Vue.use(VueIconFont)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

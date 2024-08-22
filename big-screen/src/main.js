import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ant-design-vue
import antDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

//eachrt
import * as echarts from 'echarts'

Vue.use(antDesignVue)

Vue.config.productionTip = false

Vue.prototype.$echart = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 引入vue
import Vue from "vue";

// 引入routerjs
import router from "./router/router.js";

// 引入VueX
import store from "./store/index.js";

// 引入App
import App from "./app.vue";

// 引入全局样式
import "./style.css";


new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
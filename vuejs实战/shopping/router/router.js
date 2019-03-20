import Vue from "vue";
import vueRouter from "vue-router";

Vue.use(vueRouter);

const router = [
  {
    path: '/',
    mate: {
      title: '首页'
    },
    component: (resolve) => require(['../app.vue'], resolve)
  },
  {
    path: '/list',
    meta: {
      title: '商品列表'
    },
    component: (resolve) => require(['../views/list.vue'], resolve)
  },
  {
    path: '/product/:id',
    meta: {
      title: '商品详情'
    },
    component: (resolve) => require(['../views/product.vue'], resolve)
  },
  {
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: (resolve) => require(['../views/cart.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/list' 
  }
]

const routers = new vueRouter({
  routes: router
})

routers.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})

routers.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

export default routers
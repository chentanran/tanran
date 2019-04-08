import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

const store = new vuex.Store({
  state: {
    // 商品列表
    productList: [],
    // 购物车数量
    cartList: [],
    // 过滤数组函数
    filterArray: () =>{}
  },

  getters: {
    brands: state => {
      const brand = state.productList.map(item => item.name);
      // brand.unshift('全部');
      return state.filterArray(brand);
    },
    colors: state => {
      const color = state.productList.map(item => item.color);
      // color.unshift('全部');
      return state.filterArray(color);
    }
  },

  mutations: {
    setProductList(store, data){
      store.productList  = data;
    },
    setFilterArrays(store, array){
      store.filterArray = array;
    },
    // 添加商品到购物车
    addCart(state, id) {
      const isAdded = state.cartList.find(item => item.id === id);
      if(isAdded) {
        isAdded.count++
      } else {
        state.cartList.push({
          id: id,
          count: 1
        })
      }
    },
    // 编辑商品
    editCartCount(state, payload){
      const product = state.cartList.find(item => item.id === payload.id);
      product.count += payload.count;
    },
    // 删除商品
    deleteCart(state, id) {
      const index = state.cartList.findIndex(item => itme.id === id);
      state.cartList.splice(index, 1);
    },
    // 清空购物车
    emptyCart(state) {
      state.cartList = [];
    }
  },

  actions: {
    getProductList(context, product_data){
      // 真实环境 通过ajax获取, 这里模拟
      setTimeout(()=>{
        context.commit('setProductList', product_data)
      }, 500)
    },
    // 购买
    buy(context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('emptyCart');
          resolve();
        }, 500)
      })
    }
  }
})

export default store;
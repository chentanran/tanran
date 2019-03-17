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
    }
  },

  actions: {
    getProductList(context, product_data){
      // 真实环境 通过ajax获取, 这里模拟
      setTimeout(()=>{
        context.commit('setProductList', product_data)
      }, 500)
    }
  }
})

export default store;
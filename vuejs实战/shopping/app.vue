<template>
  <div class="header">
    <router-link to="/list" class="header-title">
      电商网站示例
    </router-link>
    <div class="header-menu">
      <router-link to="/cart" class="header-menu-cart">
        购物车
        <span v-if="cartList.length">{{ cartList.length }}</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入product.js
import product_data from "./product.js";
// 引入 filterArray
import filterArray from "./filterArray.js";

export default {
  components:{ },
  data() {
    return {
      cartList: []
    }
  },
  created() {
    this.setProductList();
    this.setFilterArray();
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    // 发送商品列表数据
    setProductList(){
      this.$store.dispatch('getProductList', product_data);
    },
    // 发送函数
    setFilterArray(){
      this.$store.commit('setFilterArrays', filterArray);
    }
  },
  component:{
    cartList(){
      return this.$store.state.cartList;
    }
  }
}
</script>

<style>

</style>

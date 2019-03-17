<template>
  <div v-if="product">
    <div class="product">
      <div class="product-image">
        <img :src="product.image" alt="">
      </div>
      <div class="product-info">
        <h1 class="product-name">{{ product.name }}</h1>
        <div class="product-cost">¥ {{ product.cost }}</div>
        <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
      </div>
    </div>
    <div class="product-desc">
      <h2>产品介绍</h2>
      <!-- <img v-for="n in 10" :key="n" :src="'http://ordfm6aah.bkt.clouddn.com/shop/' + n + '.jpeg'" alt=""> -->
    </div>
  </div>
</template>

<script>
import product_data from '../product.js';

export default {
  data(){
    return {
      id: this.$route.params.id,
      product: null
    }
  },
  methods: {
    getProduct(){
      // console.log(this.id)
      // 模拟ajax请求
      setTimeout(() => {
        this.product = product_data.find(item => item.id == this.id);
      }, 500)
    },

    handleAddToCart(){

    }
  },
  mounted(){
    this.getProduct();
  }
}
</script>

<style scoped>
  .product{
    margin: 55px;
    padding: 32px;
    background-color: #fff;
    border: 1px solid #dddee1;
    border-radius: 10px;
    overflow: hidden;
  }

  .product-image{
    width: 50%;
    height: 550px;
    float: left;
    text-align: center;
  }

  .product-image img{
    width: 100%;
    height: 100%;
  }

  .product-info{
    width: 50%;
    padding: 150px 0 250px;
    height: 250px;
    float: left;
    text-align: center;
  }
  .product-name{
    color: black;
  }
  .product-cost {
    color: #f2352e;
    margin: 8px 0;
  }

  .product-add-cart {
    display: inline-block;
    padding: 8px 64px;
    margin: 8px 0;
    background-color: #589deb;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }

  .product-desc {
    background-color: #fff;
    padding: 50px;
    margin: 50px;
    border: 1px solid #dddee2;
    border-radius: 10px;
    text-align: center;
  }

  .product-desc img {
    display: block;
    width: 50%;
    margin: 50px auto;
    padding: 32px;
    border-bottom: 1px solid #dddee2;
  }
</style>

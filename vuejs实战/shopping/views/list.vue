<template>
  <div v-show="list" class="list">
    <div class="list-control">
      <div class="list-control-order">
        <span>排序:</span>
        <span class="list-control-order-item" :class="{on: order === ''}" @click.prevent="handleOrderDefault">默认</span>
        <span class="list-control-order-item" :class="{on: order === 'sales'}" @click.prevent="handleOrderSales">
          销量
          <template v-if="order === 'sales'">↓</template>
        </span>
        <span class="list-control-order-item" :class="{on: order.indexOf('cost') > -1}" @click.prevent="handleOrderCost">
          价格
          <template v-if="order === 'cost-desc'">↓</template>
          <template v-if="order === 'cost-asc'">↑</template>
        </span>
      </div>
    </div>
    <!-- 品牌过滤 -->
    <div class="list-control-filter">
      <span>品牌:</span>
      <span 
        class="list-control-filter-item"
        :class="{on: item == filterBrand}"
        v-for="item in brands"
        :key="item.id"
        @click="handelFilterBrand(item)">{{ item }}</span>
    </div>
    <!-- 颜色过滤 -->
    <div class="list-control-filter">
      <span>颜色:</span>
      <span 
      class="list-control-filter-item" 
        :class="{on: item == filterColor}"
        v-for="item in colors"
        :key="item.id"
        @click="handelFilterColor(item)">{{ item }}</span>
    </div>

    <product v-for="item in filteredAndOrderedList" :key="item.id" :info="item"></product>

    <div class="product-not-found" v-show="!filteredAndOrderedList">暂无相关商品</div>
  </div>
</template>

<script>
import product from '../components/product.vue';

export default {
  components: { product },
  data(){
    return{
      // 排序依据, 可选值为:
      // sales(销量)
      // cost-desc(价格降序)
      // cost-asc(价格升序)
      order: '',
      filterBrand: '',
      filterColor: ''
    }
  },
  created(){

  },
  methods: {
    // 默认排序
    handleOrderDefault(){
      this.order = '';
    },
    // 销量排序
    handleOrderSales(){
      this.order = 'sales';
    },
    // 价格排序
    handleOrderCost() {
      if(this.order === 'cost-desc'){
        this.order = 'cost-asc'
      } else {
        this.order = 'cost-desc'
      }
    },
    // 品牌选择
    handelFilterBrand(item){
      if(this.filterBrand == item){
        this.filterBrand = '';
      } else {
        this.filterBrand = item;
      }
    },
    // 颜色选择
    handelFilterColor(item){
      if(this.filterColor === item){
        this.filterColor = '';
      } else {
        this.filterColor = item;
      }
    }
  },
  mounted(){
    console.log(111)
    // this.$store.dispatch('getProductList')
  },
  computed: {
    list() {
      return this.$store.state.productList;
    },
    brands() {
      return this.$store.getters.brands;
    },
    colors() {
      return this.$store.getters.colors;
    },
    // 排序
    filteredAndOrderedList(){
      let list = [ ...this.list ];
      if(this.order !== ''){
        if(this.order === 'sales'){
          list = list.sort((a, b) => b.sales - a.sales)
        } else if(this.order === 'cost-desc'){
          list = list.sort((a, b) => b.cost - a.cost)
        } else if(this.order === 'cost-asc'){
          list = list.sort((a, b) => a.cost - b.cost)
        } 
      }
      // 品牌过滤
      if(this.filterBrand !== ''){
          list = list.filter(item => item.name === this.filterBrand);
      }
      // 颜色过滤
      if(this.filterColor !== ''){
          list = list.filter(item => item.color === this.filterColor)
      }

      return list;
    }
  }
}
</script>

<style scope>
  .product-not-found{
    text-align: center;
    padding: 32px;
  }
  .list{
    padding-top: 50px;
  }
  .list-control{
    background: #fff;
    border-radius: 6px;
    margin: 0 16px;
    padding: 16px;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
  }
  .list-control-filter{
    margin-bottom: 16px;
  }
  .list-control-filter-item,
  .list-control-order-item{
    cursor: pointer;
    display: inline-block;
    border: 1px solid #e9eaec;
    color: red;
    border-radius: 4px;
    margin-right: 6px;
    padding: 2px 6px;
  }
  .list-control-filter-item.on,
  .list-control-order-item.on{
    background: #f2352e;
    border: 1px solid #f2352e;
    color: #fff;
  }
</style>

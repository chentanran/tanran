<template>
  <div class="product">
    <router-link  :to="'/product/'+info.id" class="product-main">
      <img :src="info.image" alt="">
      <h4>{{info.name}}</h4>
      <div class="product-color" :style="{ background: colors[info.color] }"></div>
      <div class="product-cost">¥ {{info.cost}}</div>
      <div class="product-add-cast" @click.prevent="handleCart">加入购物车</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props:{
    info: Object
  },
  data(){
    return {
      colors: {
        '白色': '#ffffff',
        '金色': '#dac272',
        '蓝色': '#233472',
        '红色': '#f2352e'
      }
    }
  },
  methods: {
    handleCart(){
      this.$store.commit('addCart', this.info.id)
    }
  }
}
</script>

<style lang="less" scoped>
  // @profix-cls: 'product';
  // .@{profix-cls}{
  //   width: 25%;
  //   float: left;
  //   &-main{
  //     display: block;
  //     margin: 16px;
  //     padding: 16px;
  //     border: 1px solid #dddeee;
  //     border-radius: 6px;
  //     overflow: hidden;
  //     background: #fff;
  //     text-align: center;
  //     position: relative;
  //     & img{
  //       width: 100%;
  //     }
  //   }
  //   & h4{
  //     color: #222;
  //     overflow: hidden;
  //     text-overflow: ellipsis;
  //     white-space: nowrap;
  //   }
  //   &:hover h4{
  //     color: #0070c9;
  //   }
  //   &-color{
  //     display: block;
  //     width: 16px;
  //     height: 16px;
  //     border-radius: 50%;
  //     border: 1px solid #dddeee;
  //     margin: 6px auto;
  //   }
  //   &-cost{
  //     color: #de4037;
  //     margin-top: 6px;
  //   }
  //   &-add-cart{
  //     display: none;
  //     padding: 4px 8px;
  //     background: #2d8cf0;
  //     color: #fff;
  //     font-size: 12px;
  //     border-radius: 3px;
  //     cursor: pointer;
  //     position: absolute;
  //     right: 5px;
  //     top: 5px;
  //   }
  //   &:hover &-add-cart{
  //     display: inline-block;
  //   }
  // }
</style>


</style>


<style scoped>
  .product{
    width: 25%;
    float: left;
    /* padding-top: 50px; */
  }
  .product-main{
    display: block;
    margin: 16px;
    padding: 16px;
    border: 1px solid #dddeee;
    border-radius: 6px;
    overflow: hidden;
    background: #fff;
    text-align: center;
    position: relative;
  }
  .product-main img{
    width: 100%;
    height: 200px;
  }
  h4{
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .product-main:hover h4{
    color: #0070c9;
  }
  .product-color{
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #dddeee;
    margin: 6px auto;
  }
  .product-cost{
    color: #de4037;
    margin-top: 6px;
  }
  .product-add-cart{
    display: none;
    padding: 4px 8px;
    background: #2d8cf0;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .product-main:hover .product-add-cart{
    display: inline-block;
  }
</style>

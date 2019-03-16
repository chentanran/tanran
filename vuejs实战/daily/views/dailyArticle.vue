<template>
  <div class="daliy-article">
    <div>{{listItem.title}}</div>

    <div>评论</div>
    <div v-for="item in comment" :key="item.user">
      <div>{{item.user}}</div>
      <div v-time="item.time"></div>
      <div>{{item.comment}}</div>
    </div>
  </div>
</template>

<script>
import Time from '../directive/time.js';
import util from '../util.js'
export default {
  directives: {Time},
  props:{
    articleId:{
      type: Number,
      default:0
    }
  },
  data(){
    return {
      list: [
        {type: 0, id:222232, title: '12'},
        {type: 0, id:223233, title: '23'},
        {type: 0, id:234234, title: '34'},
        {type: 0, id:222235, title: '45'},
        {type: 0, id:223236, title: '56'},
        {type: 0, id:234237, title: '67'},
        {type: 0, id:222238, title: '78'},
        {type: 0, id:223239, title: '89'},
        {type: 0, id:234240, title: '90'},
        {type: 0, id:222241, title: '13'},
        {type: 0, id:223242, title: '34'},
        {type: 0, id:234243, title: '56'},
        {type: 0, id:223244, title: '78'},
        {type: 0, id:234245, title: '78'},
        {type: 0, id:222246, title: '矛'},
        {type: 0, id:223247, title: '更让他让他'},
        {type: 0, id:234248, title: '6676一样'},
        {type: 0, id:223249, title: '通天塔'},
        {type: 0, id:234250, title: '家具家居'},
        {type: 0, id:222251, title: '浮动浮动'},
        {type: 0, id:223252, title: '热热无'},
        {type: 0, id:234253, title: '一一'},
        {type: 0, id:223254, title: '的'},
        {type: 0, id:234255, title: '考虑好几回'},
        {type: 0, id:222256, title: '发光飞碟'},
        {type: 0, id:223257, title: '大幅度'},
        {type: 0, id:234258, title: '个人体验'},
        {type: 1, id:2222, title: '娃哈哈真好喝'},
        {type: 2, id:2233, title: '爽歪歪'},
        {type: 3, id:2344, title: '讲究的是富士康服务号'},
        {type: 1, id:2225, title: '娃哈哈真好喝'},
        {type: 2, id:2236, title: '爽歪歪'},
        {type: 3, id:2347, title: '讲究的是富士康服务号'},
        {type: 1, id:2228, title: '娃哈哈真好喝'},
        {type: 2, id:2239, title: '爽歪歪'},
        {type: 3, id:234210, title: '讲究的是富士康服务号'},
        {type: 1, id:222211, title: '娃哈哈真好喝'},
        {type: 2, id:223212, title: '爽歪歪'},
        {type: 3, id:234213, title: '讲究的是富士康服务号'},
        {type: 1, id:222214, title: '娃哈哈真好喝'},
        {type: 2, id:223215, title: '爽歪歪'},
        {type: 3, id:234216, title: '讲究的是富士康服务号'},
        {type: 1, id:222217, title: '娃哈哈真好喝'},
        {type: 2, id:223218, title: '爽歪歪'},
        {type: 3, id:234219, title: '讲究的是富士康服务号'},
        {type: 1, id:222220, title: '娃哈哈真好喝'},
        {type: 2, id:223221, title: '爽歪歪'},
        {type: 3, id:234222, title: '讲究的是富士康服务号'},
        {type: 1, id:222223, title: '娃哈哈真好喝'},
        {type: 2, id:223224, title: '爽歪歪'},
        {type: 3, id:234225, title: '讲究的是富士康服务号'},
      ],

      comment:[
        {user: '小王', comment: '今天是个好日子', time: '1234354'},
        {user: '小李', comment: '明天是个哈日子', time: '343545'},
        {user: '小张', comment: '到底是啥日子', time: '3432324'},
        {user: '小受', comment: '我今天喝了个汤', time: '465656'},
        {user: '小哇', comment: '小米爱大猫', time: '232443'},
      ],

      listItem:{type: 3, id:0, title: '我要逆天啦'},
    }
  },
  methods: {
    getList(){
      for(let i = 0; i < this.list.length; i++) {
        if(this.articleId == this.list[i].id) {
          this.listItem = this.list[i]
        }
      }

      window.scrollTo(0, 0);
    }
  },
  watch:{
    articleId(val){
      if(val) {
        this.getList()
      }
    }
  }
}
</script>

<style>

</style>

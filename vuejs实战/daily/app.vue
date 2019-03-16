<template>
  <div class="daily">
    <div class="daily-menu">
      <div class="daily-menu-item" :class="{ on: type === 'recommend' }" @click="handleToRecommend">每日推荐</div>
      <div class="daily-menu-item" :class="{ on: type === 'daily' }" @click="showItems = !showItems">主题日报</div>

      <ul v-show="showItems">
        <li v-for="item in themes" :key="item.id">
          <a :class="{ on: item.id === themeId && type === 'daily' }" @click="handleToTheme(item.id)">{{item.name}}</a>
        </li>
      </ul>
    </div>

    <div class="daily-list" ref="list" @scroll="handleScroll">
      <template v-if="type == 'recommend'">
        <Item v-for="item in list" :key="item.id" :list="item" @click.native="handleId(item.id)"></Item>
      </template>
      <template v-if="type == 'daily'">
        <Item v-for="item in listItem" :key="item.id" :list="item" @click.native="handleId(item.id)"></Item>
      </template>
      
    </div>

    <daily-article :articleId="articleId"></daily-article>
  </div>
</template>

<script>
import Item from './views/item.vue';
import dailyArticle from './views/dailyArticle.vue';
import $ from './util.js';

export default {
  components:{ Item, dailyArticle },
  data() {
    return {
      themes: [
        {id: 1, name: '小小'},
        {id: 2, name: '大大'},
        {id: 3, name: '娃哈哈'},
        {id: 4, name: '爽歪歪'}
      ],
      showItems: false,
      type: 'recommend',
      themeId: 0,
      list: [
        {type: 0, id:222232, title: '讲究的是富士康服务号'},
        {type: 0, id:223233, title: '讲究的是富士康服务号'},
        {type: 0, id:234234, title: '讲究的是富士康服务号'},
        {type: 0, id:222235, title: '讲究的是富士康服务号'},
        {type: 0, id:223236, title: '讲究的是富士康服务号'},
        {type: 0, id:234237, title: '讲究的是富士康服务号'},
        {type: 0, id:222238, title: '讲究的是富士康服务号'},
        {type: 0, id:223239, title: '讲究的是富士康服务号'},
        {type: 0, id:234240, title: '讲究的是富士康服务号'},
        {type: 0, id:222241, title: '讲究的是富士康服务号'},
        {type: 0, id:223242, title: '讲究的是富士康服务号'},
        {type: 0, id:234243, title: '讲究的是富士康服务号'},
        {type: 0, id:223244, title: '讲究的是富士康服务号'},
        {type: 0, id:234245, title: '讲究的是富士康服务号'},
        {type: 0, id:222246, title: '讲究的是富士康服务号'},
        {type: 0, id:223247, title: '讲究的是富士康服务号'},
        {type: 0, id:234248, title: '讲究的是富士康服务号'},
        {type: 0, id:223249, title: '讲究的是富士康服务号'},
        {type: 0, id:234250, title: '讲究的是富士康服务号'},
        {type: 0, id:222251, title: '讲究的是富士康服务号'},
        {type: 0, id:223252, title: '讲究的是富士康服务号'},
        {type: 0, id:234253, title: '讲究的是富士康服务号'},
        {type: 0, id:223254, title: '讲究的是富士康服务号'},
        {type: 0, id:234255, title: '讲究的是富士康服务号'},
        {type: 0, id:222256, title: '讲究的是富士康服务号'},
        {type: 0, id:223257, title: '讲究的是富士康服务号'},
        {type: 0, id:234258, title: '讲究的是富士康服务号'},
      ],
      listItem: [
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
      recommendList: [],
      dailyTime: $.getTodayTime(),
      isLoading: false,
      articleId:0
    }
  },
  created() {
    this.getThemes()
    // console.log($.getTodayTime())
  },
  mounted() {
    this.getRecommendList();

    // 获取dom
    const $list = this.$refs.list;
    // 监听中栏的滚动事件
    $list.addEventListener('scroll', this.handleScroll, false)
  },
  beforeDestroy() {

    this.$refs.list.removeEventListener('scroll', this.handleScroll, false)
  },
  methods: {
    // 获取id
    handleId(id){
      this.articleId = id;
    },
    // 滚动事件
    handleScroll(){
      // 获取dom
    const $list = this.$refs.list;
      // 主题日报或正在加载列表时停止
      if(this.type == 'daily' || this.isLoading) return;
      // 已经滚动的距离 + 页面的高度 = 整个内容区域, 视为接触底部
      console.log($list.scrollTop + '---' + document.body.clientHeight + '---' + $list.scrollHeight)
      if(Math.ceil(Number($list.scrollTop)) + Number(document.body.clientHeight) >= Number($list.scrollHeight)){
        // 时间相对减少一天
        alert(1)
        this.dailyTime -= 86400000;
        this.getRecommendList();
      }
    },

    getThemes(){
      $.ajax.get('news/latest').then(res => {
        console.log(res)
      })
    },

    handleToTheme(id){
      console.log(this.type)
      this.type = 'daily';
      this.themeId = id;

      // this.list = [];
      // $.ajax.get('theme/' + id).then(res => {
      //   console.log(res)
      // })
    },

    handleToRecommend(){
      console.log(this.type)
      this.type = 'recommend';
      // this.recommendList = [];
      this.dailyTime = $.getTodayTime();
      this.getRecommendList();
    },

    getRecommendList(){
      // this.isLoading = true;
      const prevDay = $.prevDay(this.dailyTime - 86400000);
      // $.ajax.get('news/before/' + prevDay).then(res => {
      //   this.recommendList.push(res);
      //   this.isLoading = false;
      // })
    },

    // 转换为带汉字的月日
    formatDay(date){
      let month = date.substr(4,2);
      let day = date.substr(6,2);
      if(month.substr(0,1) == '0') month = month.substr(1,1)
      if(day.substr(0,1) == '0') month = month.substr(1,1)

      return `${month}月${day}日`
    }
  },
}
</script>

<style>

</style>

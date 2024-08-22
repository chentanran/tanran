<template>
  <div class="customerAnalysis">
    <div class="customerAnalysis-box">
      <GaugeBox
        title="成交情况分析"
        elementId="customerAnalysis-left"
        :data="data"
      />
    </div>
    <div class="customerAnalysis-right">
      <LineBox title="新增客户数据分析" />
    </div>
  </div>
</template>

<script>
import GaugeBox from "./gaugeBox.vue";
import LineBox from "./lineBox.vue";
// import api from "../api";
export default {
  components: {
    GaugeBox,
    LineBox,
  },
  data() {
    return {
      data: {
        rate: 50,
        finish: 10,
        unfinished: 10
      },
    };
  },
  mounted() {
    this.getCustomerStatistic();
  },
  methods: {
    async getCustomerStatistic() {
      // const { data } = await api.customerStatistic();
      // this.data = {
      //   rate: data.rate,
      //   finish: data.handleNumber,
      //   unfinished: data.unHandleNumber
      // };
    },
  },
};
</script>

<style lang="less" scoped>
.customerAnalysis {
  height: 100%;
  width: 100%;
  padding: 1vw 1vw 1vw 0;
  overflow: auto;
  display: flex;
  justify-content: space-between;

  &-box {
    width: 40%;
    height: 100%;
  }

  &-right {
    width: 58%;
    height: 100%;
  }
}
</style>
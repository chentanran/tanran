<template>
  <div class="numberTasks">
    <div class="numberTasks-box">
      <GaugeBox title="保养任务" elementId="numberTasks-left" :data="statistics" />
    </div>
    <div class="numberTasks-box">
      <GaugeBox title="投诉建议" elementId="numberTasks-right" :data="sqgdStatistics" />
    </div>
  </div>
</template>

<script>
import GaugeBox from './gaugeBox.vue'
// import api from '../api'
export default {
  components: {
    GaugeBox
  },
  data() {
    return {
      statistics: {
        finish: 10,
        unfinished: 10,
        rate: 50
      },
      sqgdStatistics: {
        finish: 10,
        unfinished: 10,
        rate: 50
      }
    };
  },
  mounted() {
    this.getStatistics()
    this.getSqgdStatistics()
  },
  methods: {
    async getStatistics() {
      // const { data } = await api.handleStatistics()
      // this.statistics = {
      //   finish: data.handleNumber,
      //   unfinished: data.unHandleNumber,
      //   rate: data.rate
      // }
    },

    async getSqgdStatistics() {
      // const { data } = await api.handlerSqgdStatistics()
      // this.sqgdStatistics = {
      //   finish: data.handleNumber,
      //   unfinished: data.unHandleNumber,
      //   rate: data.rate
      // }
    }
  },
};
</script>

<style lang="less" scoped>
.numberTasks {
  height: 100%;
  width: 100%;
  padding: 1vw 2vw;
  overflow: auto;
  display: flex;
  justify-content: space-between;

  &-box {
    width: 45%;
    height: 100%;
  }
}
</style>
<template>
  <div class="leaseAnalysis">
    <div class="leaseAnalysis-box">
      <GaugeChart
        elementId="workorderAnalysis"
        :rate="data.totalNumber"
        :min="data.handleNumber / data.totalNumber"
        :max="data.unHandleNumber / data.totalNumber"
        :fOptions="{
          title: '工单总数'
        }"
      />
    </div>
    <div class="leaseAnalysis-box leaseAnalysis-right">
      <div>
        <div class="leaseAnalysis-box-item">
          <div>
            <div>已关闭</div>
            <div class="leaseAnalysis-box-item-text">
              {{ data.handleNumber || "0" }}
            </div>
          </div>
        </div>
        <div class="leaseAnalysis-box-item leaseAnalysis-box-bottom">
          <div>
            <div>待处理</div>
            <div class="leaseAnalysis-box-item-text">
              {{ data.unHandleNumber || "0" }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GaugeChart from "./gaugeChart";
// import api from "../api";
export default {
  components: {
    GaugeChart,
  },
  data() {
    return {
      data: {
        totalNumber: 100,
        unHandleNumber: 50,
        handleNumber: 50,
      },
    };
  },
  mounted() {
    // this.getHandlerOrderStatistics();
  },
  methods: {
    // async getHandlerOrderStatistics() {
    //   const { data } = await api.handlerOrderStatistics();
    //   this.data = data;
    // },
  },
};
</script>

<style lang="less" scoped>
.leaseAnalysis {
  height: 100%;
  width: 100%;
  padding: 1vw;
  display: flex;

  &-box {
    height: 100%;
    width: 50%;
    position: relative;

    &-img {
      position: absolute;
      height: 6.2vw;
      width: 6.3vw;
      // top: 25%;
      // left: 29%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: rotate360 2s linear infinite;
    }

    &-item {
      background-image: url(../../../assets/homezs/k1.png);
      background-size: 100% 100%;
      width: 11vw;
      height: 5vw;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      > div {
        width: 100%;
        color: #bcd6f3;
      }

      &-text {
        font-size: 1vw;
      }
    }

    &-bottom {
      background-image: url(../../../assets/homezs/k2.png);
    }
  }

  &-right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}

@keyframes rotate360 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
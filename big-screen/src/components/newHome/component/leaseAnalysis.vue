<template>
  <div class="leaseAnalysis">
    <div class="leaseAnalysis-box">
      <GaugeChart
        elementId="leaseAnalysis"
        :rate="data.totalNumber"
        :min="data.leaseNumber / data.totalNumber"
        :max="data.unLeaseNumber / data.totalNumber"
      />
    </div>
    <div class="leaseAnalysis-box leaseAnalysis-right">
      <div>
        <div class="leaseAnalysis-box-item">
          <div>
            <div>可租总数</div>
            <div class="leaseAnalysis-box-item-text">
              {{ data.leaseNumber || "0" }}
            </div>
          </div>
        </div>
        <div class="leaseAnalysis-box-item leaseAnalysis-box-bottom">
          <div>
            <div>已租总数</div>
            <div class="leaseAnalysis-box-item-text">
              {{ data.unLeaseNumber || "0" }}
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
        totalNumber: 10,
        leaseNumber: 5,
        unLeaseNumber: 5,
      },
    };
  },
  mounted() {
    this.getLeasedAndNotLeased();
  },
  methods: {
    async getLeasedAndNotLeased() {
      // const { data } = await api.leasedAndNotLeased();
      // this.data = data;
    },
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
</style>
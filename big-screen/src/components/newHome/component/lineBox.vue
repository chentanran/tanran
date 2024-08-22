<template>
  <div class="gaugeBox">
    <div class="gaugeBox-top">
      <div class="gaugeBox-top-box">
        <div class="gaugeBox-top-box-title">
          <span class="gaugeBox-top-box-title-decorate"></span>
          {{ title }}
        </div>
        <div class="gaugeBox-top-box-center">
          <Linechart :xAxisData="xAxisData" :data="data" />
        </div>
      </div>
    </div>
    <div class="gaugeBox-bottom">
      <div class="gaugeBox-bottom-box">
        <div class="gaugeBox-bottom-box-item">
          <div class="gaugeBox-bottom-box-item-box">
            <div class="gaugeBox-bottom-box-item-box-title">
              本日新增
            </div>
            <div class="gaugeBox-bottom-box-item-box-value">{{ increaseStatistic.dayNumber || '0' }}</div>
          </div>
        </div>
        <div class="gaugeBox-bottom-box-item">
          <div class="gaugeBox-bottom-box-item-box">
            <div class="gaugeBox-bottom-box-item-box-title">
              本周新增
            </div>
            <div class="gaugeBox-bottom-box-item-box-value">{{ increaseStatistic.weekNumber || '0' }}</div>
          </div>
        </div>
        <div class="gaugeBox-bottom-box-item">
          <div class="gaugeBox-bottom-box-item-box">
            <div class="gaugeBox-bottom-box-item-box-title">
              本月新增
            </div>
            <div class="gaugeBox-bottom-box-item-box-value">{{ increaseStatistic.monthNumber || '0' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Linechart from './lineChart-a.vue'
// import api from '../api'
export default {
  components: {
    Linechart,
  },
  props: {
    elementId: {
      type: String,
      default: "numberTasksLeft",
    },
    title: {
      type: String,
      default: "保养任务"
    }
  },
  data() {
    return {
      xAxisData: ['8-19', '8-20', '8-21', '8-22', '8-23', '8-24', '8-25'],
      data: [1, 2, 3, 4, 5, 6, 7],
      increaseStatistic: {
        dayNumber: '1',
        weekNumber: '2',
        monthNumber: '3'
      }
    };
  },
  mounted() {
    this.getDayIncreaseStatistic();
    this.getIncreaseStatistic()
  },
  methods: {
    async getDayIncreaseStatistic() {
      // const { data } = await api.dayIncreaseStatistic();
      // data.forEach(item => {
      //   this.xAxisData.push(item.name);
      //   this.data.push(item.value);
      // })
    },

    async getIncreaseStatistic() {
      // const { data } = await api.increaseStatistic();
      // this.increaseStatistic = data
    }
  },
};
</script>

<style lang="less" scoped>
.gaugeBox {
  height: 100%;
  width: 100%;
  overflow: auto;

  &-top {
    height: 69%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5vw;

    &-box {
      width: 100%;
      height: 100%;
      background: rgba(26, 46, 76, 0.5);
      // display: flex;

      &-title {
        width: 100%;
        height: 2vw;
        display: flex;
        align-items: center;
        color: #bcd6f3;

        &-decorate {
          display: inline-block;
          width: 0.3vw;
          height: 1vw;
          background-color: #005cff;
          margin: 0 0.2vw 0 0.5vw;
        }
      }

      &-center {
        width: 100%;
        height: calc(100% - 2vw);
      }
    }
  }

  &-bottom {
    height: 27%;
    display: flex;
    justify-content: space-between;

    &-box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;

      &-item {
        width: 31%;
        height: 100%;
        background: rgba(26, 46, 76, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #bcd6f3;

        &-box {

          &-title {
            display: flex;
            align-items: center;

            &-decorate {
              display: inline-block;
              width: 12px;
              height: 3px;
              background-color: #50CD3D;
              // margin-right: 0.2vw;
            }

            &-decorate-right {
              background-color: #DAA11D;
            }
          }

          &-value {
            // padding-left: 1.2vw;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
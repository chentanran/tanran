<template>
  <div class="gaugeBox">
    <div class="gaugeBox-top">
      <div class="gaugeBox-top-box">
        <div class="gaugeBox-top-box-title">
          <span class="gaugeBox-top-box-title-decorate"></span>
          {{ title }}
        </div>
        <div class="gaugeBox-top-box-center">
          <GaugeChart
            :elementId="elementId"
            :fOptions="fOptions"
            :imgHeight="imgHeight"
            :imgWidth="imgWidth"
            :rate="data.rate || '0'"
            unit="%"
            :min="data.finish / (Number(data.finish) + Number(data.unfinished))"
            :max="data.unfinished / (Number(data.finish) + Number(data.unfinished))"
          />
        </div>
      </div>
    </div>
    <div class="gaugeBox-bottom">
      <div class="gaugeBox-bottom-box">
        <div class="gaugeBox-bottom-box-item">
          <div class="gaugeBox-bottom-box-item-box">
            <div class="gaugeBox-bottom-box-item-box-title">
              <span class="gaugeBox-bottom-box-item-box-title-decorate"></span>
              已完成
            </div>
            <div class="gaugeBox-bottom-box-item-box-value">{{ data.finish || '0' }}</div>
          </div>
        </div>
        <div class="gaugeBox-bottom-box-item">
          <div class="gaugeBox-bottom-box-item-box">
            <div class="gaugeBox-bottom-box-item-box-title">
              <span class="gaugeBox-bottom-box-item-box-title-decorate gaugeBox-bottom-box-item-box-title-decorate-right"></span>
              待处理
            </div>
            <div class="gaugeBox-bottom-box-item-box-value">{{ data.unfinished || '0' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GaugeChart from "./gaugeChart";
export default {
  components: {
    GaugeChart,
  },
  props: {
    elementId: {
      type: String,
      default: "numberTasksLeft",
    },
    title: {
      type: String,
      default: "保养任务"
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      fOptions: {
        title: "完成率",
        value: "50%",
        titleFontSize: 14,
        valueFontSize: 14,
        radius: "120%",
        splitNumber: 50,
        splitLineLength: 15,
      },
      imgHeight: "3.8vw",
      imgWidth: "3.8vw",
    };
  },
  methods: {},
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
        width: 48%;
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
              margin-right: 0.2vw;
            }

            &-decorate-right {
              background-color: #DAA11D;
            }
          }

          &-value {
            padding-left: 1.2vw;
          }
        }
      }
    }
  }
}
</style>
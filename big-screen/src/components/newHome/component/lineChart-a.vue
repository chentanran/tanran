<template>
  <div :id="elementId" class="gaugeChart"></div>
</template>

<script>
export default {
  props: {
    elementId: {
      type: String,
      default: "linechart",
    },
    xAxisData: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    data: {
      handler(val) {
        if (val.length > 0) {
          this.$echart.init(document.getElementById(this.elementId)).setOption({
            xAxis: {
              data: this.xAxisData,
            },
            series: [
              {
                data: val,
              },
            ],
          });
        }
      },
      deep: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const echart1 = this.$echart.init(
        document.getElementById(this.elementId)
      );

      echart1.setOption({
        backgroundColor: "",
        grid: {
          left: "5%",
          right: "5%",
          bottom: "3%",
          top: "25%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: this.xAxisData,
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(98, 130, 164, 0.3)",
            },
          },
          axisLabel: {
            color: "#BCD6F3",
          },
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
          name: "单位：人",
          nameTextStyle: {
            color: "#BCD6F3",
            fontSize: 12,
            align: "center",
            padding: [0, 22, 0, 20],
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(98, 130, 164, 0.3)",
            },
          },
          axisLabel: {
            color: "#BCD6F3",
          },
        },
        series: [
          {
            data: this.data,
            type: "line",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: "#50CD3D",
              },
            },
            label: {
              show: true,
              position: "right",
              color: "#50CD3D",
            },
            lineStyle: {
              width: 1,
              color: "#50CD3D",
              shadowColor: "rgba(80, 205, 61, .8)",
              shadowBlur: 15,
              shadowOffsetY: 0,
              shadowOffsetX: 0,
            },
            areaStyle: {
              color: "rgba(80, 205, 61, 0.3)",
            },
          },
        ],
      });

      setTimeout(() => {
        echart1.resize();
      }, 500);
      window.addEventListener("resize", function () {
        echart1.resize();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.gaugeChart {
  height: 100%;
  width: 100%;
}
</style>
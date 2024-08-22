<template>
  <div :id="elementId" class="gaugeChart"></div>
</template>

<script>
// import api from '../api'
export default {
  props: {
    elementId: {
      type: String,
      default: "stageDistribution",
    },
  },
  data() {
    return {
      xAxisData: ['8-20', '8-21', '8-22', '8-23', '8-24', '8-25', '8-26'],
      data: [1, 2, 3, 4, 5, 6, 7]
    };
  },
  mounted() {
    
    this.getData()
  },
  methods: {
    async getData() {
      // const { data } = await api.dayStatistic()
      // data.forEach(item => {
      //   this.xAxisData.push(item.name)
      //   this.data.push(item.value)
      // })
      this.init();
    },

    init() {
      const echart1 = this.$echart.init(
        document.getElementById(this.elementId)
      );

      echart1.setOption({
        backgroundColor: "",
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
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
        },
        yAxis: {
          type: "value",
          name: "单位：个",
          nameTextStyle: {
            color: "#BCD6F3",
            fontSize: 12,
            align: "center",
            padding: [0, 28, 0, 0],
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
            type: "bar",
            barWidth: "15%",
            label: {
              show: true,
              position: "top",
              color: "#6DA9FF",
            },
            itemStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#006CFF",
                    },
                    {
                      offset: 1,
                      color: "#6DA9FF",
                    },
                  ],
                },
              },
              // borderRadius: [2, 2, 0, 0],
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
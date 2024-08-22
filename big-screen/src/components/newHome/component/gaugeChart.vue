<template>
  <div class="gaugeChart-box">
    <div :id="elementId" class="gaugeChart"></div>
    <img
      class="leaseAnalysis-box-img"
      src="../../../assets/homezs/image1.png"
      alt=""
      :style="{ height: imgHeight, width: imgWidth }"
    />
  </div>
</template>

<script>
export default {
  props: {
    elementId: {
      type: String,
      default: "leaseAnalysis",
    },
    fOptions: {
      type: Object,
      default: () => {}
    },
    imgHeight: {
      type: String,
      default: "6.2vw"
    },
    imgWidth: {
      type: String,
      default: "6.3vw"
    },
    rate: {
      type: String,
      default: '0'
    },
    unit: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  watch: {
    rate: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.init();
          })
        }
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      options: {
        title: '房屋总数',
        value: 1200,
        titleFontSize: 16,
        valueFontSize: 16,
        radius: '90%',
        splitNumber: 100,
        splitLineLength: 20
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const echart1 = this.$echart.init(
        document.getElementById(this.elementId)
      );

      console.log(this.min, this.max, 'max')

      this.options = { ...this.options, ...this.fOptions };
      const { title, titleFontSize, valueFontSize, radius, splitNumber, splitLineLength } = this.options

      echart1.setOption({
        title: {
          text: "{a|" + this.rate + this.unit + "}\n{c|" + title + "}",
          x: "center",
          y: "center",
          textStyle: {
            rich: {
              a: {
                fontSize: titleFontSize,
                color: "#BCD6F3",
              },
              c: {
                fontSize: valueFontSize,
                color: "#BCD6F3",
                padding: [2, 0, 0, 0],
              },
            },
          },
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "1%",
          top: '1%',
          containLabel: true,
        },
        series: [
          {
            name: "大环",
            type: "gauge",
            splitNumber: splitNumber,
            radius: radius,
            center: ["50%", "50%"],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
              show: false,
              lineStyle: {
                color: [
                  [this.max, "#F7AB00"],
                  [this.min, "#50CD3D"],
                ],
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              length: splitLineLength,
              lineStyle: {
                color: "auto",
                width: 2,
              },
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
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
.gaugeChart-box {
  height: 100%;
  width: 100%;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotate360 2s linear infinite;
  }
}
.gaugeChart {
  height: 100%;
  width: 100%;
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
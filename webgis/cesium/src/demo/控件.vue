<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  new Cesium.Viewer("cesiumContainer", {
    // 地图高程
    terrainProvider: Cesium.createWorldTerrain({
      // 水面特效
      requestWaterMask: true,
    }),
    animation: false, // 动画按钮
    geocoder: false, // 搜索控件
    timeline: false, // 时间轴
    homeButton: false, // 首页
    fullscreenButton: false, // 全屏
    navigationHelpButton: false, // 导航帮助
    baseLayerPicker: false, // 底图切换
    sceneModePicker: false, // 地图模式切换
    // infoBox: false, // 信息框
    // selectionIndicator: false, // 选中指示器
    navigationHelpButton: false, // 导航帮助
  })
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

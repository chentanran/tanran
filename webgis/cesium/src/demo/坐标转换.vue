<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  new Cesium.Viewer("cesiumContainer")

  // 经纬度转笛卡尔坐标
  const cartesian = Cesium.Cartesian3.fromDegrees(116.39, 39.9, 1000000)
  console.log(cartesian)
  // 笛卡尔转经纬度
  const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
  // 弧度转角度
  // let lon = 180 / Math.PI * cartographic.longitude
  // let lat = 180 / Math.PI * cartographic.latitude
  let lon = Cesium.Math.toDegrees(cartographic.longitude)
  let lat = Cesium.Math.toDegrees(cartographic.latitude)
  console.log(lon, lat)
  console.log(cartographic)
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

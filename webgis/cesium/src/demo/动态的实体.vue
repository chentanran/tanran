<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  let lon = 0
  let lat = 0
  let num = 0
  const line = viewer.entities.add({
    polyline: {
      // CallbackProperty 生成动态的实体
      // 因为 positions 是一个回调函数，所以需要设置 false 参数，否则会报错
      positions: new Cesium.CallbackProperty(() => {
        if (lon > 121 && lat > 31) {
          line.polyline.positions = Cesium.Cartesian3.fromDegreesArray([120, 30, 121, 31])
        }
        num += 0.005
        lon = 120 + num
        lat = 30 + num
        return Cesium.Cartesian3.fromDegreesArray([120, 30, lon, lat])
      }, false),
      width: 5,
      material: Cesium.Color.SKYBLUE
    }
  })
  viewer.zoomTo(line)
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

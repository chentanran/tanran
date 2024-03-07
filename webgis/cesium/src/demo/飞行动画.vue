<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  // const position = Cesium.Cartesian3.fromDegrees(110, 20, 20000)

  // 飞行动画
  // viewer.camera.flyTo({
  //   destination: position,
  //   orientation: {
  //     heading: Cesium.Math.toRadians(0),
  //     pitch: Cesium.Math.toRadians(-90),
  //     roll: Cesium.Math.toRadians(0),
  //   },
  //   duration: 10
  // })

  // lookAt 将视角固定在设置的点位上，可以选择视角，但不能改变位置
  const position = Cesium.Cartesian3.fromDegrees(110, 19.95)
  viewer.camera.lookAt(
    position,
    new Cesium.HeadingPitchRange(
      Cesium.Math.toRadians(0),
      Cesium.Math.toRadians(-90),
      5000
    )
  )
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer", {
    shouldAnimate: true, // 动画效果
    shadows: true // 阴影
  })

  const position = Cesium.Cartesian3.fromDegrees(
    114,
    30,
    30
  );
  // 方向
  const orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    new Cesium.HeadingPitchRoll(0, 0, 0)
  )
  //
  const model = viewer.entities.add({
    position,
    orientation,
    model: {
      uri: '/Cesium_Air.glb',
      scale: 1,
      minimumPixelSize: 20,
      maximumScale: 200
    }
  })
  viewer.zoomTo(model)
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

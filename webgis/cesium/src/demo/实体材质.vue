<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  // 箭头
  // let material = new Cesium.PolylineArrowMaterialProperty(Cesium.Color.RED)

  // 发光
  let material = new Cesium.PolylineGlowMaterialProperty({
    glowPower: 0.1,
    taperPower: 0.9,
    color: Cesium.Color.RED
  })

  const point = viewer.entities.add({
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray([
        120, 20, 121, 20, 122, 20, 123, 20, 124, 20, 125, 20.5
      ]),
      width: 10,
      material: material
    }
  })
  viewer.zoomTo(point)
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

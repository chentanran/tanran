<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  // 实体 entity
  // const point = new Cesium.Entity({
  //   position: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 100),
  //   point: {
  //     color: Cesium.Color.RED,
  //     pixelSize: 10,
  //   }
  // })

  // viewer.entities.add(point)
  // viewer.zoomTo(point)

  const point2 = viewer.entities.add({
    id: 'point',
    position: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 100),
    point: {
      color: Cesium.Color.RED,
      pixelSize: 10,
    }
  })
  viewer.zoomTo(point2)
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

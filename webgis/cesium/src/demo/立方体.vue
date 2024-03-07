<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  const point3 = viewer.entities.add({
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArray([
        120, 25, 121, 25, 121, 25.5
      ]),
      material: Cesium.Color.RED,
      height: 100000,
      extrudedHeight: 200000,
      outline: true,
      outlineColor: Cesium.Color.WHITE,
      fill: false
    }
  })
  viewer.zoomTo(point3)
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

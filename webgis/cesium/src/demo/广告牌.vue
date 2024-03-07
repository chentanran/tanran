<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  const point3 = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 10),
    billboard: {
      image: '/src/assets/biaozhu.jpg',
      scale: 0.1,
      color: Cesium.Color.SKYBLUE
    }
  })
  viewer.zoomTo(point3)
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

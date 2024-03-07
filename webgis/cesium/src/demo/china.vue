<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  Cesium.GeoJsonDataSource.load('/src/assets/china.json').then(res => {
    viewer.dataSources.add(res)
    viewer.zoomTo(res)
    let entities = res.entities.values
    entities.forEach(entity => {
      entity.polygon.material = new Cesium.ColorMaterialProperty(Cesium.Color.fromRandom({ alpha: 1 }))
      entity.polygon.outline = false
      entity.polygon.extrudedHeight = Math.random() * 1000000
    })
  })
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

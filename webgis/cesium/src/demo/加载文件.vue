<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  // var linestring = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 60]])
  // Cesium.GeoJsonDataSource.load(linestring).then(res => {
  //   // console.log(res, '-res')
  //   // const entity = res.entities.values[0]
  //   // viewer.entities.add(entity)
  //   // viewer.zoomTo(entity)
  //   viewer.dataSources.add(res)
  //   viewer.zoomTo(res)
  // })

  const promise = Cesium.KmlDataSource.load('/src/assets/gdp2008.kmz')
  viewer.dataSources.add(promise)
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

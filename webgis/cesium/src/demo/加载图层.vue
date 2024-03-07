<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(async () => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  const tileset = viewer.scene.primitives.add(
    // await Cesium.Cesium3DTileset.fromIonAssetId(75343),
    new Cesium.Cesium3DTileset({
      // url: Cesium.IonResource.fromAssetId(75343),
      url: Cesium.IonResource.fromAssetId(69380),
    })
  );

  viewer.flyTo(tileset)
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  let tiles3d = new Cesium.createOsmBuildings()
  viewer.scene.primitives.add(tiles3d)
  const position = Cesium.Cartesian3.fromDegrees(
    113.3191,
    23.109,
    1000
  )
  viewer.camera.flyTo({
    destination: position,
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-50),
      roll: Cesium.Math.toRadians(0),
    },
    duration: 2
  })

  tiles3d.style = new Cesium.Cesium3DTileStyle({
    defines: {
      distance: 'distance(vec2(${feature["cesium#longitude"]},${feature["cesium#latitude"]}), vec2(113.3191,23.109))'
    },
    color: {
      conditions: [
        // ['${feature["building"]} === "apartments"', 'color("yellow", 1)'],
        ['${distance} < 0.01', 'color("yellow", 1)'],
        ['true', 'color("skyblue")']
      ]
    }
  })
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

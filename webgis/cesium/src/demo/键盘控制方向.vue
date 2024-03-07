<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  viewer.scene.primitives.add(
    new Cesium.createOsmBuildings()
  )

  const position = Cesium.Cartesian3.fromDegrees(114.30, 30.59, 1000)
  // setView 通过定义相继目的地（方向），直接跳转到目的地
  viewer.camera.setView({
    destination: position,
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(0),
      roll: Cesium.Math.toRadians(0),
    }
  })

  document.addEventListener('keydown', (e) => {
    let height = viewer.camera.positionCartographic.height
    let moveRate = height / 100
    if (e.key === 'w') {
      viewer.camera.moveForward(moveRate)
    } else if (e.key === 's') {
      viewer.camera.moveBackward(moveRate)
    } else if (e.key === 'a') {
      viewer.camera.moveLeft(moveRate)
    } else if (e.key === 'd') {
      viewer.camera.moveRight(moveRate)
    } else if (e.key === 'q') {
      viewer.camera.moveUp(moveRate)
    } else if (e.key === 'e') {
      viewer.camera.moveDown(moveRate)
    } else if (e.key === 'r') {
      viewer.camera.rotateRight(Cesium.Math.toRadians(0.1))
    } else if (e.key === 'f') {
      viewer.camera.rotateLeft(Cesium.Math.toRadians(0.1))
    } else if (e.key === 'g') {
      viewer.camera.lookLeft(Cesium.Math.toRadians(0.1))
    } else if (e.key === 'h') {
      viewer.camera.lookRight(Cesium.Math.toRadians(0.1))
    }
  })
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

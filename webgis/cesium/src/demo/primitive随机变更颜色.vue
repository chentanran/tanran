<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer")

  // 创建几何
  let rectGeometry = new Cesium.RectangleGeometry({
    rectangle: Cesium.Rectangle.fromDegrees(115.0, 20.0, 135.0, 30.0),
    height: 0,
    vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT
  })

  // 创建几何体实例
  let instance = new Cesium.GeometryInstance({
    id: "redRect",
    geometry: rectGeometry,
    attributes: {
      color: Cesium.ColorGeometryInstanceAttribute.fromColor(
        Cesium.Color.fromCssColorString("red").withAlpha(0.5)
      )
    }
  })

  // 创建几何
  let rectGeometry2 = new Cesium.RectangleGeometry({
    rectangle: Cesium.Rectangle.fromDegrees(145.0, 20.0, 165.0, 30.0),
    height: 0,
    vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT
  })

  // 创建几何体实例
  let instance2 = new Cesium.GeometryInstance({
    id: "blueRect",
    geometry: rectGeometry2,
    attributes: {
      color: Cesium.ColorGeometryInstanceAttribute.fromColor(
        Cesium.Color.fromCssColorString("blue").withAlpha(0.5)
      )
    }
  })

  let primitive = new Cesium.Primitive({
    geometryInstances: [instance, instance2],
    appearance: new Cesium.PerInstanceColorAppearance({
      flat: true
    })
  })

  viewer.scene.primitives.add(primitive)

  setInterval(() => {
    let attributes = primitive.getGeometryInstanceAttributes("redRect")
    attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(
      Cesium.Color.fromRandom({
        alpha: 0.5
      })
    )

    let blueAttributes = primitive.getGeometryInstanceAttributes("blueRect")
    blueAttributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(
      Cesium.Color.fromRandom({
        alpha: 0.5
      })
    )
  }, 1000);
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

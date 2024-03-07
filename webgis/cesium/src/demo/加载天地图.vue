<script setup>
import * as Cesium from "cesium"
import { onMounted } from 'vue'

console.log(Cesium)

onMounted(async () => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODVjZTFlMi00ODlkLTQwZjQtYjZkZi1iMWQ0Y2E3YTg3MDgiLCJpZCI6MTk2MzIyLCJpYXQiOjE3MDgzMDc1NTh9.tdD1SV60qoICPlQhnLjPPSSWmkj9Awjck__lvQczyjQ";
  const viewer = new Cesium.Viewer("cesiumContainer", {
    // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
    //   url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk="+'1d80179bde6f6c881b8f5de43c8dee4b',
    //     layer: "tdtVecBasicLayer",
    //     style: "default",
    //     format: "image/jpeg",
    //     tileMatrixSetID: "GoogleMapsCompatible",
    //     show: false
    // })

    // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
    //   url: "http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=" + '1d80179bde6f6c881b8f5de43c8dee4b',
    //   layer: "tdtAnnoLayer",
    //   style: "default",
    //   format: "image/jpeg",
    //   tileMatrixSetID: "GoogleMapsCompatible"
    // })

    // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
    //   url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" + '1d80179bde6f6c881b8f5de43c8dee4b',
    //   layer: "tdtBasicLayer",
    //   style: "default",
    //   format: "image/jpeg",
    //   tileMatrixSetID: "GoogleMapsCompatible",
    //   show: false
    // })

    imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
      url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=" + '1d80179bde6f6c881b8f5de43c8dee4b',
      layer: "tdtAnnoLayer",
      style: "default",
      format: "image/jpeg",
      tileMatrixSetID: "GoogleMapsCompatible",
      show: false
    })
  })

})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped></style>

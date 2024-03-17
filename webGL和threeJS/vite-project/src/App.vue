<script setup lang="ts">
import { onMounted } from 'vue'
import { initCity } from './enter'

onMounted(() => {
  initCity()
})
</script>

<template>
  <canvas id="webgl"></canvas>
</template>

<style scoped>
</style>

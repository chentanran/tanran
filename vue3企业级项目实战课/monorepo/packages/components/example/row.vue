<template>
  <Row>
    <Col class="gird" :span="24">col-24</Col>
  </Row>
  <Row>
    <Col class="gird" :span="12">col-12</Col>
    <Col class="gird gird-dark" :span="12">col-12</Col>
  </Row>
  <Row>
    <Col class="gird" :span="8">col-8</Col>
    <Col class="gird gird-dark" :span="8">col-8</Col>
    <Col class="gird" :span="8">col-8</Col>
  </Row>
</template>

<script setup lang="ts">
import { Col, Row } from '../src';
</script>

<style lang="less">
.gird {
  background: #0092ff6b;
  border: 1px #0092ff6b solid;
  margin-bottom: 10px;
  height: 50px;
  color: #035593;
  font-size: 18px;
  // font-weight: bolder;
  text-align: center;
  line-height: 50px;

  &.gird-dark {
    background: #068aed;
    border: 1px #068aed solid;
    color: #ffffff;
    margin-bottom: 10px;
  }
}
</style>

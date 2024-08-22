<template>
  <div class="quickNavigation">
    <div v-for="(item, index) in list" :key="index" class="quickNavigation-item">{{ item.label }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            label: '首页'
          },
          {
            label: '房屋资产管理'
          },
          {
            label: '合同管理'
          },
          {
            label: '其他'
          },
          {
            label: '物业管理'
          },
          {
            label: '物业管理'
          },
          {
            label: '物业管理'
          },
          {
            label: '物业管理'
          },
          {
            label: '物业管理'
          },
          {
            label: '物业管理'
          },
          {
            label: '物业管理'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
.quickNavigation {
  height: 100%;
  width: 100%;
  padding: 1vw;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;

  &-item {
    background-image: url(../../../assets/homezs/bt2.png);
    background-size: 100% 100%;
    width: 9vw;
    height: 2vw;
    line-height: 2vw;
    padding-left: 2vw;
    margin: 0.25vw 0.4vw;
    font-size: 0.7vw;
    cursor: pointer;
    color: #BCD6F3;
    &:first-child {
      background-image: url(../../../assets/homezs/bt1.png)
    }
  }
}
</style>
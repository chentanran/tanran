<template>
  <div class="listBox">
    <div v-for="(item, index) in list" :key="index" class="listBox-item" @click="click(item)">
      <div class="listBox-item-index">{{ index + 1 }}</div>
      <div class="listBox-item-text" :title="item.infoTitle">{{ item.infoTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    async click(record) {
      this.$emit('click', record)
    },
  }
}
</script>

<style lang="less" scoped>
.listBox {
  height: 100%;
  width: 100%;
  padding: 1vw;
  overflow: auto;

  &-item {
    background: rgba(9,66,92, 0.2);
    margin-bottom: 0.2vw;
    display: flex;
    color: #BCD6F3;
    font-size: 0.7vw;
    cursor: pointer;

    &-index {
      width: 2.2vw;
      text-align: center;
      background: rgba(9,66,92, 0.5);
      padding: 0.5vw 0;
    }
    
    &-text {
      padding: 0.5vw 0;
      padding-left: 1vw;
      width: calc(100% - 2.2vw);
      overflow: hidden;  /*超出部分隐藏*/
      white-space: nowrap;  /*禁止换行*/
      text-overflow: ellipsis; /*省略号*/
    }
  }
}
</style>
<template>
  <div class="agencyCenter">
    <ListBox :list="list" @click="clickNotice" />
  </div>
</template>

<script>
import ListBox from './listBox.vue'
// import api from '../api'
export default {
  components: {
    ListBox
  },
  data() {
    return {
      list: [
        {
          infoTitle: '小区电梯维修通知',
        },
        {
          infoTitle: '停水通知',
        },
        {
          infoTitle: '停电通知',
        }
      ]
    }
  },
  mounted() {
    this.getWorkList()
  },
  methods: {
    // 公告
    async getWorkList() {
      // const res = await api.sysInfoCustom()
      // this.list = res.data.records || []
    },

    async clickNotice() {
    },
  }
}
</script>

<style lang="less" scoped>
.agencyCenter {
  height: 100%;
  width: 100%;
}
</style>
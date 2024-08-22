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
          infoTitle: '房屋租赁合同',
        },
        {
          infoTitle: '物业合同',
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
      // const res = await api.taskTodoList()
      // this.list = res.data.records.map(item => {
      //   return {
      //     ...item,
      //     infoTitle: item.processName
      //   }
      // })
    },

    async clickNotice(record) {
      console.log(record)
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
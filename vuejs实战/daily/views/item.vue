<template>
  <div>
    <div class="daily-item" >{{list.title}}</div>
  </div>
</template>

<script>
export default {
  props:{
    list: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>

</style>

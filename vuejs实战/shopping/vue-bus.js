
const install = function(Vue) {
  const Bus = new Vue({
    methods: {
      emit (event, ...ages) {
        this.$emit(event, ...ages)
      }, 

      on (event, callback) {
        this.$on(event, callback)
      },

      off(event, callback) {
        this.$off(event, callback)
      }
    },
  });

  Vue.prototype.$bus = Bus;
}

export default install;
<template>
  <header>
    <div>
      <van-icon
        v-if="pageInfoComputed.icon.arrow && pageInfoComputed.icon.arrow === 'left'"
        :name="pageInfoComputed.icon.name"
        size="1.5rem"
        @click="leftHandle"
      />
    </div>
    <h3>{{ pageInfoComputed.title }}</h3>
    <div>
      <van-icon
        v-if="pageInfoComputed.icon.arrow && pageInfoComputed.icon.arrow === 'right'"
        :name="pageInfoComputed.icon.name"
        size="1.5rem"
        @click="rightHandle"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Icon } from "vant";

@Component({
  components: {
    [Icon.name]: Icon
  }
})
export default class Header extends Vue {
  private get pageInfoComputed() {
    console.log(this.$route)
    const currentRouteName = this.$route.path;
    switch (currentRouteName) {
      case "/":
        return {
          icon: {
            name: "plus",
            arrow: "right"
          },
          title: "我的代办"
        };
      case "/about":
        return {
          icon: {
            name: "arrow-left",
            arrow: "left"
          },
          title: "新建任务"
        };
      default:
        return "";
    }
  }

  private leftHandle() {
    this.$router.back();
  }
  private rightHandle() {
    this.$router.push({ path: "/create" });
  }
}
</script>

<style>
</style>
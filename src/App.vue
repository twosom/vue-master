<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader";


export default {
  components: {
    AppHeader,
  }
};
</script>

<style scoped>
@import "css/common.css";
@import "css/reset.css";
</style>

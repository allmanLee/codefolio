<template>
  <v-app id="app">
    <v-header><appheader></appheader></v-header>
    <v-main class="main">
      <router-view></router-view>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>
<script>
import appheader from "./components/appHeader";

export default {
  name: "App",
  components: { appheader },
  data() {
    return {
      //
    };
  },
};
</script>
<style lang="scss" scope>
v-header {
  height: 80px !important;
}

.main {
  margin: 20px;
}
</style>

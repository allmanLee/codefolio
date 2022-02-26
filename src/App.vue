<template>
  <v-app id="app">
    <v-header></v-header>
    <v-main class="main">
      <router-view></router-view>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scope>
v-header {
  height: 60px !important;
}
.main {
  margin: 20px;
}
</style>

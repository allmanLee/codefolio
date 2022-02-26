<template>
  <div id="app">
    <v-header></v-header>
    <v-main class="main">
      <router-view></router-view>
    </v-main>
    <v-footer></v-footer>
  </div>
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
  width: 1200px;
  margin: 20px;
}
</style>

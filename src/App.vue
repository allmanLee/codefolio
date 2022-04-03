<template>
  <v-app
    id="app"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <v-header> </v-header>
    <router-view></router-view>
  </v-app>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="scss" scope>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap");
v-header {
  height: 60px !important;
}
.banner {
  position: relative;
  height: 508px;
  width: 100%;
  margin-bottom: 84px;
  .banner-container {
    position: relative;
    width: 100%;
    height: 508px;
    margin-left: 74px;
    .banner-title {
      position: absolute;
      margin-left: 72px;
      font: {
        size: rem-calc(100px);
        family: "Orbitron", sans-serif;
      }
      line-height: 88px;
    }

    .banner-images__right {
      position: absolute;
      width: 100%;
      height: 508px;
      right: 0px;
      top: 0px;
      .banner-images-container {
        position: relative;
        width: 100%;
        height: 508px;
        .banner-mockup {
          position: absolute;
          right: 330px;
          z-index: 46;
        }
        .banner-right {
          position: absolute;
          width: 980px;
          height: 408px;
          right: 0px;
          top: 8px;
          z-index: 45;
        }
      }
      .banner-left {
        position: absolute;
        width: 980px;
        height: 408px;
        left: 0px;
        bottom: 0px;
        z-index: 44;
      }
    }
  }
}
</style>

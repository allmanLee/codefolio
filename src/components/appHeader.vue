<template>
  <nav class="headerbar-wrap">
    <v-toolbar class="headerbar" flat>
      <v-toolbar-title>
        <span class="font-weight-bold white--text header-logo">codefolio</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        rounded
        color="white"
        class="upload-btn"
        @click="handleClickCreateProject"
      >
        <v-icon dark> mdi-plus </v-icon>프로젝트 등록
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    handleClickCreateProject() {
      console.log("asdf");
      this.$router.push({ name: "projectCreate" });
    },
  },
};
</script>

<style lang="scss" scoped>
.headerbar-wrap {
  position: fixed;
  width: 100%;
  z-index: 100;
  .headerbar {
    padding: 0 40px;
    background-color: $app-background-color !important;
    .upload-btn {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 600;
      font-size: rem-calc(14px);
      line-height: 17px;
    }
    .header-logo {
      font-family: "Orbitron";
      font-weight: 500;
      font-size: rem-calc(24px);
      line-height: 30px;
    }
  }
}
</style>

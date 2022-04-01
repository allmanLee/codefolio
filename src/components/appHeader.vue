<template>
  <nav>
    <v-toolbar color="black" class="headerbar">
      <v-toolbar-title>
        <span class="font-weight-bold white--text header-logo">codefolio</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined rounded color="white" class="upload-btn">
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
};
</script>

<style lang="scss">
.headerbar {
  padding: 0 40px;
}
.header-logo {
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
}
.upload-btn {
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}
</style>

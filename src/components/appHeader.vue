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

    <v-dialog
      class="modal-project-create"
      persistent
      dark
      @click:outside="isOpendModalProjectCreate = false"
      max-width="600px"
      v-model="isOpendModalProjectCreate"
    >
      <v-card>
        <div class="modal-project-create-container">
          <div class="modal-header">
            <h1>무엇으로 내용을 채우시겠습니까?</h1>
            <p>기본적인 프로젝트 정보는 동일하게 받습니다.</p>
          </div>
          <v-btn
            class="modal-method-btn"
            height="200px"
            @click="handleRouteProjectCreate(false)"
            >이미지</v-btn
          >
          <v-btn
            class="modal-method-btn"
            height="200px"
            @click="handleRouteProjectCreate(true)"
            >마크다운</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      isOpendModalProjectCreate: false,
    };
  },
  methods: {
    handleClickCreateProject() {
      console.log("asdf");
      this.isOpendModalProjectCreate = true;
      // this.$router.push({ name: "projectCreate" });
    },
    handleRouteProjectCreate(isMarkdown) {
      console.log("projectCreate로 이동");
      if (isMarkdown) {
        console.log("마크다운선택");
        this.$router.push({ name: "projectCreate" });
      } else {
        console.log("이미지로 프로젝트 생성하기 선택");
        this.$router.push({ name: "projectCreate" });
      }

      //팝업을 닫습니다.
      this.isOpendModalProjectCreate = false;
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
.modal-project-create {
  &::v-deep {
    .v-dialog {
      border-radius: 20px !important;
    }
    border-radius: 20px !important;
  }
}
.modal-project-create-container {
  display: flex;
  justify-self: center;
  flex-direction: column;
  padding: 40px;
  background: black !important;
  border: 1px solid white !important;
  .modal-method-btn {
    display: flex;
    margin-top: 20px;
  }
}
</style>

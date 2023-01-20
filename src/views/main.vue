<template>
  <v-container class="pa-0">
    <section class="banner">
      <div class="banner-container">
        <h1 class="banner-title">Visualize<br />My Codefolio</h1>
        <img class="banner-left" src="@/assets/img/banner-left.png" />
        <article class="banner-images__right">
          <div class="banner-images-container">
            <img class="banner-mockup" src="@/assets/img/banner-mockup.svg" />
            <img class="banner-right" src="@/assets/img/banner-right.png" />
            <img class="banner-button" src="@/assets/img/banner-button.png" />
          </div>
        </article>
      </div>
    </section>
    <the-main-skill-bar></the-main-skill-bar>
    <the-search-bar></the-search-bar>

    <div class="project-nav">
      <p class="list-title">전체 (32)</p>
      <v-select
        class="list-cate-select"
        v-model="selectedCate"
        :items="cates"
        solo
      ></v-select>
    </div>
    <the-project-list></the-project-list>
  </v-container>
</template>

<script>
import TheProjectList from "../components/ProjectList/TheProjectList.vue";
import TheMainSkillBar from "../components/TheMainSkillBar.vue";
import TheSearchBar from "../components/TheSearchBar.vue";
export default {
  name: "Main",
  components: { TheMainSkillBar, TheSearchBar, TheProjectList },
  data() {
    return {
      cates: ["좋아요순", "최신순"],
      selectedCate: "좋아요순",
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
.project-nav {
  position: relative;
  font-size: rem-calc(16px);
  height: rem-calc(48px);
  line-height: rem-calc(48px);
  margin-bottom: 40px;
  .list-title {
    float: left;
    &:after {
      clear: both;
    }
  }

  .list-cate-select {
    float: right;
    &:after {
      clear: both;
    }
  }
}

@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap");
v-header {
  height: 60px !important;
}
.banner {
  position: relative;
  height: 508px;
  width: 1440px;
  margin-bottom: 84px;
  margin-left: -74px;
  .banner-container {
    position: relative;
    width: 100%;
    height: 508px;
    margin-left: 0px;
    .banner-title {
      position: absolute;
      margin-left: 0px;
      top: 60px;
      left: 80px;
      font: {
        size: rem-calc(100px);
        family: "Orbitron", sans-serif;
      }
      line-height: 88px;
      z-index: 47;
    }
    .banner-left {
      position: absolute;
      width: 980px;
      height: 408px;
      left: -72px;
      bottom: 0px;
      z-index: 44;
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
        .banner-button {
          position: absolute;
          top: 276px;
          left: 740px;
          z-index: 47;
        }
      }
    }
  }
}
</style>

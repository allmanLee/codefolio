<template>
  <div class="project-list-item" @click="clickHandler">
    <v-card flat class="project-item-card">
      <v-card-text class="card-text">
        <v-img
          class="thumbnail-image"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        />
        <skill-tag-chips></skill-tag-chips>

        <v-card-title class="pa-6 py-0 card-title text--primary">
          Bixbar: 박스비 칵테일 추천 캡슐
        </v-card-title>
        <v-card-subtitle class="pa-6 py-0 ma-0 text--disabled">
          칵테일 추천 서비스 입니다.
        </v-card-subtitle>
        <v-card-actions class="py-6 pa-0">
          <v-list-item class="px-6 grow">
            <v-list-item-avatar class="ma-0 mr-2" color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="subtitle-2">Evan You</v-list-item-title>
            </v-list-item-content>

            <v-row
              class="my-0 mx-0 text--disabled"
              align="center"
              justify="end"
            >
              <v-icon class="mr-1 text--disabled"> mdi-eye-outline </v-icon>
              <span class="subheading mr-2">1000</span>
              <v-icon class="mr-1 ml-2 text--disabled">
                mdi-heart-outline
              </v-icon>
              <span class="subheading">200</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import SkillTagChips from "../SkillTagChips.vue";

export default {
  components: { SkillTagChips },
  name: "TheProjectListItem",
  data() {
    return {};
  },
  methods: {
    clickHandler() {
      console.log("@click");
      this.$router.push({ path: "/project-detail/2" });
    },
  },
};
</script>

<style lang="scss" scoped>
.project-list-item {
  position: relative;
  .project-item-card {
    position: relative;
    border-radius: 20px;

    &:hover::after {
      content: "";
      position: absolute;
      top: 0px !important;
      left: 0px;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.4);
      border: solid white 2px;
    }
    &:hover::before {
      content: "";
      position: absolute;
      display: block;
      top: 8px;
      right: 8px;
      width: 60px;
      height: 60px;
      font-size: 30px;
      background: url("../../assets/icon/heart-icon-white.png") no-repeat;
      background-position: center;
      z-index: 200;
    }
    .thumbnail-image {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      width: 100%;
      max-height: 240px;
    }
  }
  .card-text {
    padding: 0px;
    background: rgba(255, 255, 255, 0.08);
  }
}
//fade transition

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

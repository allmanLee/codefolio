<template>
  <div class="project-list-item">
    <v-card
      width="calc(1120px / 3)"
      class="project-item-card"
      @mouseover="isHoveredCard = true"
    >
      <v-card-text class="card-text">
        <v-img
          class="thumbnail-image"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        />
        <v-chip-group class="tag-bar">
          <v-chip class="tag-chip" color="#61DAFB">React</v-chip>
          <v-chip class="tag-chip" color="#41B883">Vue</v-chip>
          <v-chip class="tag-chip" color="#CD6799">Sass</v-chip>
          <v-chip class="tag-chip tag-chip-number">+3</v-chip>
        </v-chip-group>
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
    <transition name="fade">
      <div
        @mouseleave="isHoveredCard = false"
        v-show="isHoveredCard"
        class="hover-wrapper"
      >
        <v-icon class="like-icon"> mdi-heart-outline </v-icon>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "TheProjectListItem",
  data() {
    return {
      isHoveredCard: false,
    };
  },
  methods: {
    cardMouseOverHandler() {
      this.isHoveredCard = true;
    },
    cardMouseLeaveHandler() {
      this.isHoveredCard = false;
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

    .item-card__hover {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
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

  .tag-bar {
    padding: rem-calc(24px);
    padding-bottom: rem-calc(12px);
    line-height: 100%;

    .tag-chip-number {
      opacity: 0.5;
      padding: 0px;
      text-align: left;
      background: none !important;
    }
  }
  .hover-wrapper {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.4);
    border: solid white 2px;
    .like-icon {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 60px;
      height: 60px;
      font-size: 30px;
    }
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

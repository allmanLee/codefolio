<template>
  <v-card width="calc(1120px / 3)" class="project-item-card">
    <div class="item-card__hover"></div>
    <img
      height="240px"
      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
    />

    <v-card-text class="card-text">
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

          <v-row class="my-0 mx-0 text--disabled" align="center" justify="end">
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
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.project-item-card {
  position: relative;
  overflow: hidden;
  .item-card__hover {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    z-index: 10;
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
</style>

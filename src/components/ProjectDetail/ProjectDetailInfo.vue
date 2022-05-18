<template>
  <v-card class="project-detail-info" flat>
    <skill-tag-chips></skill-tag-chips>
    <section class="project-detail">
      <h3 class="project-title">Bixbar: 빅스비 칵테일 추천 캘슐</h3>
      <p class="proeject-description">
        [DB 종류 설명 및 설계하기] DB의 종류에 대해서 이해하고 어떤 DB를
        선택할지 결정합니다. 이전 수업에서 작성한 기능 기획에 맞는 DB 설계를
        완성합니다. [Restful API 설명 및 설계하기] Restful API 를 이해하고 API
        서버를 설계하고 문서를 작성합니다. 백엔드 서버를 개발하기 전에 기능에
        알맞는 서버 설계를 멘토와 함께 진행하게 됩니다.
      </p>
    </section>
    <footer>
      <button class="solid-button">데모사이트로 이동</button>
      <button class="solid-button button-github">
        <i class="github-icon" /><span>Repository로 이동</span>
      </button>
    </footer>
  </v-card>
</template>

<script>
import SkillTagChips from "../SkillTagChips.vue";
export default {
  name: "ProjectDetailInfo",
  components: { SkillTagChips },
};
</script>

<style lang="scss" scoped>
.project-detail-info {
  flex-grow: 1;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.08);
  .project-title {
    padding: {
      left: 24px;
      right: 24px;
    }
  }
  .proeject-description {
    padding: {
      left: 24px;
      right: 24px;
    }
    margin-top: 20px;
  }
  footer {
    margin-left: 20px;
    margin-top: 54px;
    .button-github {
      .github-icon {
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
        width: 22px;
        height: 22px;
        -webkit-mask-image: url("../../assets/img/gitub-icon.svg");
        mask-image: url("../../assets/img/gitub-icon.svg");
        mask-size: contain;
        // background-image: url("../../assets/img/gitub-icon.svg");
        background-size: contain;
        background-color: white;
      }
      &:hover .github-icon {
        background-color: black;
      }
    }
    .solid-button {
      margin-right: 20px;
    }
  }
}
</style>

<template>
  <v-container class="project-detail">
    <section class="project-detail-container">
      <profile-detail-card class="profile-detail" />
      <project-detail-info class="profile-info" />
    </section>
    <section class="detail-image-container">
      <project-detail-images></project-detail-images>
    </section>
  </v-container>
</template>

<script>
import ProfileDetailCard from "../../components/ProfileDetailCard.vue";
import ProjectDetailImages from "../../components/ProjectDetail/ProjectDetailImages.vue";
import ProjectDetailInfo from "../../components/ProjectDetail/ProjectDetailInfo.vue";

export default {
  name: "ProjectDetail",
  components: {
    ProjectDetailInfo,
    ProjectDetailImages,
    ProfileDetailCard,
  },
};
</script>

<style lang="scss" scoped>
.project-detail {
  width: 100%;
  .project-detail-container {
    display: flex;
    .profile-detail {
      margin-right: 20px;
    }
    &.detail-image-container {
      width: 100%;
    }
    .profile-info {
    }
  }
}
</style>

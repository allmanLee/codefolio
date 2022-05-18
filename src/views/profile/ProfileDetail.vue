<template>
  <v-container class="pa-0">
    <section class="project-detail-container">
      <profile-detail-card class="profile-detail" />
      <the-project-list></the-project-list>
    </section>
    <section></section>
  </v-container>
</template>

<script>
import ProfileDetailCard from "../../components/profile/ProfileDetailCard.vue";
import TheProjectList from "../../components/projectList/TheProjectList.vue";

export default {
  components: { TheProjectList, ProfileDetailCard },
};
</script>

<style>
.project-detail-container {
  display: flex;
}
</style>

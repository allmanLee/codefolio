<template>
  <v-container class="pa-0">
    <section class="project-detail-container">
      <profile-detail-card class="profile-detail" />
    </section>
    <section></section>
  </v-container>
</template>

<script>
import ProfileDetailCard from "../../components/ProfileDetailCard.vue";

export default {
  components: { ProfileDetailCard },
};
</script>

<style>
.project-detail-container {
  display: flex;
}
</style>

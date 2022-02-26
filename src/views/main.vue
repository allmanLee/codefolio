<template>
  <v-container>
    <v-row justify="center">
      <the-project-list></the-project-list>
    </v-row>
  </v-container>
</template>

<script>
import TheProjectList from "../components/TheProjectList.vue";
export default {
  name: "Main",
  components: {
    TheProjectList,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

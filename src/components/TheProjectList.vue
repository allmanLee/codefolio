<template>
  <div>
    <v-row>
      <v-col>전체 (32)</v-col>
      <v-col align="end"> 좋아요순 <v-icon>mdi-menu-down</v-icon> </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item, index) of items" :key="index">
        <the-project-list-item></the-project-list-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TheProjectListItem from "../components/TheProjectListItem.vue";
export default {
  name: "TheProjectList",
  components: {
    TheProjectListItem,
  },
  data() {
    return {
      items: [1, 2, 3, 4],
    };
  },
};
</script>

<style></style>

<template>
  <ul>
    <li v-for="(item, index) in projects" :key="index">
      <the-project-list-item></the-project-list-item>
    </li>
  </ul>
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
      projects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
  methods: {
    listPadding(index) {
      return (index + 1) % 3 === 0 ? "pr-0" : "pr-10";
    },
    listInclude(index) {
      console.log(index);
      if (this.projects.length % 3 > 0) {
        console.log(this.projects.length % 3);
        this.projects.length;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px;
  li {
    display: block;
    list-style-type: none;
    height: auto;
    //isplay: flex;
  }
}
</style>

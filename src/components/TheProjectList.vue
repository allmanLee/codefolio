<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
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
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
  methods: {
    listPadding(index) {
      return (index + 1) % 3 === 0 ? "pr-0" : "pr-10";
    },
    listInclude(index) {
      console.log(index);
      if (this.items.length % 3 > 0) {
        console.log(this.items.length % 3);
        this.items.length;
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

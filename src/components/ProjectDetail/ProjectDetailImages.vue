<template>
  <div class="project-detail-images">
    <div v-for="item in items" :key="item.name" class="project-img-container">
      <img />
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectDetailImages",
  data() {
    return {
      items: [
        { key: "itemKey", name: "itemName" },
        { key: "itemKey", name: "itemName" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.project-detail-images {
  margin-top: 20px;
  .project-img-container {
    width: 100%;
    height: 600px;
    background-color: grey;
    border-radius: 20px;
    margin-top: 14px;
  }
}
</style>

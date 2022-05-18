<template>
  <v-container class="proeject-create">
    <div class="df">
      <v-card class="project-create-card">
        <h2 class="projec-skill-tag-label">기술스택</h2>
        <skill-tag-add-icon></skill-tag-add-icon>
        <skill-tag-chips class="skill-tag-chips"></skill-tag-chips>
        <section class="project-detail"></section>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import SkillTagAddIcon from "../../components/SkillTagAddIcon.vue";
import SkillTagChips from "../../components/SkillTagChips.vue";
export default {
  components: { SkillTagChips, SkillTagAddIcon },
  name: "ProjectCreate",
};
</script>

<style lang="scss" scoped>
.proeject-create {
  padding: 0px;
  border: 1px solid red;
  .project-create-card {
    padding: 40px;
    width: 100%;
    height: 500px;
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: none;
    .skill-tag-chips {
      padding: 0px;
      padding-top: 20px;
    }
  }
  .project-title {
    padding: {
      left: 24px;
      right: 24px;
    }
  }
}
</style>

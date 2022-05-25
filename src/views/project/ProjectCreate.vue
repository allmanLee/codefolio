<template>
  <v-container class="proeject-create">
    <div class="df">
      <app-taps-slide></app-taps-slide>
      <v-card class="project-create-card">
        <div v-for="item in projectCreateColumn" :key="item.bindKey">
          <app-register-content
            v-model="createPayload[item.bindKey]"
            :label="item.label"
            :placeholder="item.placeholder"
            :inputType="item.inputType"
          >
            <template v-if="item.bindKey === 'skill'">
              <div class="project-create-skill-header">
                <h2 class="projec-skill-tag-label">기술스택</h2>
                <skill-tag-add-icon></skill-tag-add-icon>
              </div>
              <skill-tag-chips class="skill-tag-chips"></skill-tag-chips>
            </template>
          </app-register-content>
        </div>
        <section class="project-detail"></section>
      </v-card>
      <v-card class="project-create-card">
        <project-create-image></project-create-image>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import AppRegisterContent from "../../components/common/list/AppRegisterContent.vue";
import AppTapsSlide from "../../components/common/tab/AppTapsSlide.vue";
import ProjectCreateImage from "../../components/projectCreate/ProjectCreateImage.vue";
import SkillTagAddIcon from "../../components/SkillTagAddIcon.vue";
import SkillTagChips from "../../components/SkillTagChips.vue";
export default {
  components: {
    SkillTagChips,
    SkillTagAddIcon,
    AppRegisterContent,
    ProjectCreateImage,
    AppTapsSlide,
  },
  name: "ProjectCreate",
  data: function () {
    return {
      projectCreateColumn: [
        {
          label: "기술스택",
          inputType: "",
          bindKey: "skill",
        },

        {
          label: "프로젝트 제목",
          inputType: "text",
          bindKey: "projectTitle",
          placeholder: "제목을 입력해주세요.",
        },
        {
          label: "프로젝트 설명 (200자 이내)",
          inputType: "textarea",
          bindKey: "projectDescription",
          placeholder: "프로젝트 설명을 입력해주세요(선택)",
        },
        {
          label: "데모사이트 URL",
          inputeype: "text",
          bindKey: "projectDemoUrl",
          placeholder: "http://",
        },
        {
          label: "연결된 프로젝트 깃 URL",
          inputeype: "text",
          bindKey: "projectGitUrl",
          placeholder: "http://",
        },
      ],
      createPayload: {
        skill: "",
        projectTitle: "",
        projectDescription: "",
        projectDemoUrl: "",
        projectGitUrl: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.proeject-create {
  padding: 0px;
  .project-create-card {
    padding: 40px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: none;
    .skill-tag-chips {
      padding: 0px;
      padding-top: 20px;
    }

    .project-create-skill-header {
      display: flex;
      box-sizing: border-box;
      vertical-align: middle;
      align-content: center;
      .projec-skill-tag-label {
        display: flex !important;
        margin-right: 16px;
        align-items: center;
      }
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

<template>
  <v-container class="proeject-create">
    <div class="df">
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
      <v-card
        v-for="(item, index) of projectDetailImages"
        :key="item.url + index"
        class="project-create-card project-detail-image"
      >
        <project-create-image
          :index="item.index"
          :imageUrl="item.url"
          :isExitImage="item.isExitImage"
          :modifiable="true"
          @selectImage="addImageItem"
          @updateImage="updateImageItem"
          @cancleSelectedImage="deleteImageItem"
        ></project-create-image>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import AppRegisterContent from "../../components/common/list/AppRegisterContent.vue";
import ProjectCreateImage from "../../components/projectCreate/ProjectCreateImage.vue";
import SkillTagAddIcon from "../../components/SkillTagAddIcon.vue";
import SkillTagChips from "../../components/SkillTagChips.vue";
import { groupBy } from "lodash";
export default {
  components: {
    SkillTagChips,
    SkillTagAddIcon,
    AppRegisterContent,
    ProjectCreateImage,
  },
  name: "ProjectCreate",
  created() {
    console.log(this.projectDetailImages);
  },
  methods: {
    addImageItem(val) {
      console.log("해당 객체를 URL 에 추가", val);
      if (this.projectDetailImages[val.index]) {
        //카드의 속성을 수정합니다.
        this.projectDetailImages[val.index].url = val.url;
        this.projectDetailImages[val.index].isExitImage = val.isExit;

        //변경이 아닌 추가시에만 새로운 생성카드를 만듭니다.
        if (this.projectDetailImages[val.index].isExitImage) {
          console.log("배열로 새로운 인자를 추가합니다.");
          this.projectDetailImages.push({
            index: this.projectDetailImages.length,
            isExitImage: false,
            url: "",
          });
        }
        this.$forceUpdate();
      }
    },
    updateImageItem(val) {
      this.projectDetailImages[val.index].url = val.url;
      this.projectDetailImages[val.index].isExitImage = val.isExit;
    },
    deleteImageItem(val) {
      console.log("삭제한 키 값:", val.index);
      //해당 키(인덱스)를 가진 값을 삭제합니다.
      const groupedImages = groupBy(this.projectDetailImages, "index");
      delete groupedImages[val.index];
      console.log(groupedImages);
      //배열를 바꿔줍니다.
      this.projectDetailImages = [];
      this.$forceUpdate();
      setTimeout(() => {
        this.projectDetailImages = Object.values(groupedImages).flat();
      }, 200);
      this.$forceUpdate();
    },
  },
  data: function () {
    return {
      projectDetailImages: [
        {
          index: 0,
          isExitImage: false,
          url: "",
        },
      ],
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
  margin-top: 80px;
  .project-create-card {
    padding: 40px;
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
  .project-detail-image {
    margin-top: 20px;
    padding: 0px;
  }
}
</style>

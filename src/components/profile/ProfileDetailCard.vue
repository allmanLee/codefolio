<template>
  <v-card class="project-detail-profile-card" flat>
    <section class="profile-container">
      <div class="profile-info-image-container">
        <img class="profile-info-image" />
      </div>
      <div class="profile-info-container">
        <h3 class="profile-info-text-name">Yumi Park</h3>
        <p class="profile-info-text">
          <span class="info__email">asdasdfasdfvsd@gmail.com</span>
          <span class="info__job">Front-end developer</span>
        </p>
        <div class="divider"></div>
        <p class="profile-info-text-myself">
          안녕하세요 자기소개 글입니다.<br />
          몇글자 정도 될까요 몇글자 정도 될까요?
        </p>
      </div>
    </section>
    <section class="footer">
      <div class="button-group">
        <button class="outline-button">팔로우</button>
      </div>
    </section>
    <section
      class="profile-info-detail-container"
      v-if="$route.name === 'profileDetail'"
    >
      <app-git-button title="Github으로 이동"></app-git-button>
      <skill-tag-chips class="skill-tag-chips"></skill-tag-chips>
    </section>
    <section
      class="profile-info-detail-container"
      v-if="$route.name === 'profileDetail'"
    >
      <div class="profile-detail-info">
        <dl
          class="profile-detail-info-item"
          v-for="data in columnsProfileInfo"
          :key="data.key"
        >
          <dt class="profile-detail-info-title">{{ data.label }}</dt>
          <dd class="rpfile-detail-info-description">{{ data.value }}</dd>
        </dl>
      </div>
    </section>
  </v-card>
</template>

<script>
import SkillTagChips from "../SkillTagChips.vue";
import AppGitButton from "../common/buttons/AppGitButton.vue";
export default {
  components: { SkillTagChips, AppGitButton },
  name: "Profil eDetailCard",
  data() {
    return {
      columnsProfileInfo: [
        { key: "projectView", label: "전체 프로젝트 뷰", value: "13" },
        { key: "numberLikes", label: "전체 좋아요 수", value: "1234" },
        { key: "follower", label: "팔로워 수", value: "14" },
        { key: "folloing", label: "팔로잉 수", value: "332" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.project-detail-profile-card {
  width: 400px;
  min-height: 400px;
  max-width: 400px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.08);
  .profile-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .profile-info-image-container {
      border: 2px solid white;
      border-radius: 1000px;
      width: 80px;
      height: 80px;
      margin-bottom: 12px;
    }
    .profile-info-container {
      display: inline-block;
      text-align: center;
      .profile-info-text-name {
        text-align: center;
      }
      .profile-info-text {
        opacity: 0.8;
        .info__email {
          display: inline-block;
        }
        .info__job {
          display: inline-block;
        }
      }
      .divider {
        display: inline-block;
        width: 24px;
        height: 4px;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 100px;
        margin-bottom: 12px;
      }
      .profile-info-text-myself {
        width: 100%;
        font-size: 14px;
        opacity: 0.4;
      }
    }
  }
  .profile-info-detail-container {
    display: inline-block;
    width: 100%;
    margin-top: 40px;
    text-align: center;
    .skill-tag-chips {
      display: flex;
      align-content: center;
    }
    .profile-detail-info {
      display: flex;
      flex-wrap: wrap;
      font-size: rem-calc(16px);

      .profile-detail-info-item {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
  .footer {
    .button-group {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
<style lang="scss">
.profile-info-detail-container {
  .v-slide-group__content {
    display: unset;
  }
}
</style>

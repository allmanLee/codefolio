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
  </v-card>
</template>

<script>
export default {
  name: "ProjectDetailProfileCard",
};
</script>

<style lang="scss" scoped>
.project-detail-profile-card {
  width: 400px;
  height: 400px;
  max-width: 400px;
  max-height: 400px;
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
      .profile-info-image {
      }
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
  .footer {
    .button-group {
      display: flex;
      justify-content: center;
    }
  }
}
</style>

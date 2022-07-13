<template>
  <div class="project-create-image-upload">
    <input
      :id="`image-${index}`"
      class="image-upload-file-input"
      ref="projectImagefileInput"
      type="file"
      @change="Preview_image"
    />
    <label class="image-upload-file-input-label" :for="`image-${index}`">
      <div v-if="isExit" class="image-container">
        <v-btn
          class="cancle-button"
          @click="cancleSelectedImage"
          icon
          color="white"
        >
          <v-icon class="cancle-x-icon">mdi-close-thick</v-icon>
        </v-btn>
        <v-img
          class="project-create-image"
          contain
          ref="projectImagefileImage"
          :src="imageUrl"
        />
      </div>
      <div v-else class="add-center-content">
        <i class="plus-icon"></i>
        <p>이미지 등록</p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    isExitImage: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
    modifiable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      url: this.imageUrl || "",
      image: null,
      isExit: this.isExitImage || false,
    };
  },
  watch: {
    url: {
      handler(newVal, oldVal) {
        let payload = {};
        console.log(oldVal.length);
        console.log(typeof oldVal);
        if (newVal === "" || oldVal === "") {
          this.isExit = true;
          payload = {
            index: this.index,
            isExit: true,
            url: this.url || "",
          };
          //선택된 이미지의 url을 반환합니다.
          console.log("url이 추가됨");
          this.$emit("selectImage", payload);
        } else {
          //선택된 이미지의 url을 반환합니다.
          console.log("url 변경됨");
          payload = {
            index: this.index,
            isExit: true,
            url: this.url || "",
          };
          this.$emit("updateImage", payload);
          // this.isExit = false;
        }
      },
    },
  },
  methods: {
    Preview_image() {
      this.isExit = true;
      this.$nextTick(() => {
        this.image = this.$refs.projectImagefileInput.files[0];
        this.url = URL.createObjectURL(this.image);
      });

      //선택된 이미지의 url을 반환합니다.
      // const payload = {
      //   index: this.index,
      //   isExit: true,
      //   url: this.url || "",
      // };
      // this.$emit("selectedImage", payload);
    },

    cancleSelectedImage() {
      console.log("선택한 이미지 배열에서 삭제");
      const payload = {
        index: this.index,
      };
      this.$emit("cancleSelectedImage", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.project-create-image-upload {
  .image-upload-file-input {
    display: none;
  }
  .image-upload-file-input-label {
    position: relative;
    cursor: pointer;
    display: flex;
    box-sizing: border-box;
    align-content: center;
    justify-content: center;
    width: 100%;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0);
    min-height: 600px;
    .image-container {
      position: relative;
      width: 100%;
      .cancle-button {
        position: absolute;
        width: 50px;
        height: 50px;
        z-index: 10;
        top: 10px;
        right: 10px;
        .cancle-x-icon {
          font-size: 38px;
          &:hover {
            transform: scale(1.3);
          }
        }
      }
    }
    .project-create-image {
      position: relative;
      border-radius: 16px;
      background-size: auto;
    }
    .add-center-content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      align-items: center;
      width: 100%;

      .plus-icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        background-image: url("../../assets/icon/icon_plus.png");
        background-size: 40px;
      }
      p {
        font-size: 24px;
      }
    }

    &:hover {
      border: 1px solid white;
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: black;
        border-radius: 16px;
        opacity: 0.4;
      }
    }
    transition-duration: border 3s ease;
  }
}
</style>

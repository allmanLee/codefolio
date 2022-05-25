<template>
  <button class="solid-button button-github">
    <i class="github-icon" /><span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.button-github {
  .github-icon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    width: 22px;
    height: 22px;
    -webkit-mask-image: url("../../../assets/img/gitub-icon.svg");
    mask-image: url("../../../assets/img/gitub-icon.svg");
    mask-size: contain;
    // background-image: url("../../assets/img/gitub-icon.svg");
    background-size: contain;
    background-color: white;
  }
  &:hover .github-icon {
    background-color: black;
  }
}
</style>

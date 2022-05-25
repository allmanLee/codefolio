<template>
  <div class="skill-tag-add-icon">
    <button class="plus-button"><i class="plus-icon"></i></button>
  </div>
</template>

<script>
export default {
  name: "SkillTagAddIcon",
};
</script>

<style lang="scss" scoped>
.skill-tag-add-icon {
  display: inline-block;
  .plus-button {
    display: inline-flex;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 1px solid white;
    border-radius: 4px;
    justify-content: center;
    background: url("../assets/icon/icon_plus.png") no-repeat;
    background-position: center center;
    .plus-icon {
      display: flex;
      align-self: center;
      margin-top: -2px;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:active {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>

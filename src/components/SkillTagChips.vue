<template>
  <v-chip-group class="tag-bar">
    <v-chip class="tag-chip" color="#61DAFB">React</v-chip>
    <v-chip class="tag-chip" color="#41B883">Vue</v-chip>
    <v-chip class="tag-chip" color="#CD6799">Sass</v-chip>
    <v-chip class="tag-chip tag-chip-number">+3</v-chip>
  </v-chip-group>
</template>

<script>
export default {
  name: "SkillTagChips",
};
</script>

<style lang="scss" scoped>
.tag-bar {
  padding: rem-calc(24px);
  padding-bottom: rem-calc(12px);
  line-height: 100%;

  .tag-chip-number {
    opacity: 0.5;
    padding: 0px;
    text-align: left;
    background: none !important;
  }
}
</style>

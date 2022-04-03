<template>
  <div class="search-bar">
    <v-text-field
      class="searchbar-input mb-13"
      rounded
      hide-details
      prepend-icon="mdi-magnify"
      single-line
      placeholder="프로젝트나 기술스택을 검색해보세요"
    >
      <template slot="prepend"><i class="search-icon"></i></template
    ></v-text-field>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.search-bar {
  margin-top: 80px;
  margin-bottom: 50px;
  height: 80px;
}
.searchbar-input {
  background: rgba(255, 255, 255, 0.08);
  width: 100%;
  padding-left: 24px;
  height: 100%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  input {
    margin-top: 8px;
    font-size: rem-calc(18px);
    height: 100%;
    line-height: 100%;
  }
}
.search-icon {
  width: 40px;
  height: 40px;
  margin-top: 2px;
  background-image: url("../assets/img/search.svg");
  background-position: center center;
  overflow: hidden;
}
.v-text-field--rounded {
  border-radius: 1000px !important;
}
</style>

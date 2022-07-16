<template>
  <div class="search-bar" @click="clickHandler">
    <v-text-field
      class="searchbar-input mb-13"
      :class="{ __clicked: focused }"
      ref="textField"
      rounded
      hide-details
      prepend-icon="mdi-magnify"
      single-line
      @blur="blurHandler"
      placeholder="프로젝트나 기술스택을 검색해보세요."
    >
      <template slot="prepend"><i class="search-icon"></i></template>
      <template slot="append"></template>
    </v-text-field>
    <transition name="fade">
      <div v-if="focused" class="clicked-outline"></div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      console.log("@click");
      this.$refs.textField.focus();
      this.focused = true;
    },
    blurHandler() {
      console.log("@blur");
      this.focused = false;
    },
  },
  data() {
    return {
      focused: false,
    };
  },
};
</script>

<style lang="scss" scope>
.search-bar {
  position: relative;
  cursor: text;
  margin-top: 80px;
  margin-bottom: 50px;
  height: 80px;
  border-radius: 1000px;
  padding: 0px !important;
  .clicked-outline {
    position: absolute;
    top: 0px;
    border-radius: 1000px;
    width: 100%;
    height: 100%;
    border: 2px solid white;
  }
}
.searchbar-input {
  margin: 0px !important;
  background: rgba(255, 255, 255, 0.08);
  width: 100%;
  padding-left: 24px;
  height: 100%;
  line-height: 100%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  input {
    margin-top: 10px;
    font-size: rem-calc(18px);
    height: 100%;
    line-height: 100%;
  }
  &.__clicked {
    .search-icon {
      opacity: 1;
    }
    transition: all 0.3s ease;
  }
}
.search-icon {
  width: 40px;
  height: 40px;
  margin-top: 2px;
  opacity: 0.4;
  background-image: url("../assets/img/search.svg");
  background-position: center center;
  overflow: hidden;
  transition: opacity 0.3s ease;
}
.v-text-field--rounded {
  border-radius: 1000px !important;
}

//fade transition

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

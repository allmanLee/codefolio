<template>
  <div class="skill-bar">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        @mouseover="overHandler(index)"
        @mouseleave="leaveHandler"
      >
        <div
          class="item-container"
          :class="{ 'list__is-hovered': index === hoveredIndex ? true : false }"
        >
          <transition name="fade">
            <div
              v-if="index === hoveredIndex ? true : false"
              class="skills-item__hovered"
            >
              <p class="skills-item-number">97</p>
              <p>Projects</p>
            </div>
          </transition>
          <img
            class="skill-icon"
            :alt="`${item.name}-icon`"
            :src="require(`../assets/img/${item.name}.svg`)"
          />
          <p class="skill-label">{{ item.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheMainSkillBar",
  data() {
    return {
      items: [
        {
          name: "React",
        },
        {
          name: "React",
        },
        {
          name: "React",
        },
        {
          name: "React",
        },
        {
          name: "React",
        },
      ],
      isHovered: false,
      hoveredIndex: null,
    };
  },
  methods: {
    overHandler(index) {
      console.log(index);
      this.hoveredIndex = index;
    },
    leaveHandler() {
      this.hoveredIndex = null;
    },
  },
};
</script>

<style lang="scss" scope>
.skill-bar {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  ul {
    margin: 0px;
    padding: 0px !important;
    height: 160px;
    li {
      width: calc(100% / 5);
      height: 100%;
      display: inline-block;
      text-align: center;
      font-size: 24px;
      font-weight: 300;
      .item-container {
        position: relative;
        padding: 20px;
        height: 100%;

        &.list__is-hovered {
          > .skill-icon {
            opacity: 0.2;
            transition: all 0.06s ease;
          }
          > .skill-label {
            opacity: 0.2;
            transition: all 0.06s ease;
          }
        }

        .skills-item__hovered {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 160px;
          .skills-item-number {
            font-size: rem-calc(60px);
            font-family: "Orbitron", sans-serif;
            margin-top: 10px;
          }
        }
      }
    }
    p {
      padding: 0;
      margin: 0;
    }
  }
}
//fade transition

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

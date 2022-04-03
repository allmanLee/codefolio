<template>
  <div class="skill-bar">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <div class="item-container">
          <img :src="require(`../assets/img/${item.name}.svg`)" />
          <p>{{ item.name }}</p>
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
    };
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
    li {
      width: calc(100% / 5);
      display: inline-block;
      text-align: center;
      font-size: 24px;
      font-weight: 300;
      .item-container {
        padding: 20px;
      }
    }
    p {
      padding: 0;
      margin: 0;
    }
  }
}
</style>

<template>
  <div class="app-register-content">
    <div v-if="$slots.default" class="custom-register-content">
      <slot></slot>
    </div>
    <div v-else class="register-content">
      <h2>{{ label }}</h2>
      <textarea
        v-if="inputType === 'textarea'"
        class="register-content-textarea"
        :placeholder="placeholder"
        maxlength="200"
        rows="5"
        :value="value"
      ></textarea>
      <input
        v-else
        class="register-content-input"
        :type="inputType"
        :placeholder="placeholder"
        :value="value"
      />
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "입력해주세요.",
    },
  },
  computed: {
    valueLength() {
      return this.value.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-register-content {
  margin-bottom: 24px;
  .register-content-input,
  .register-content-textarea {
    width: 100%;
    margin-top: 16px;
    color: white;
    outline: none;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.24);
    box-sizing: border-box;
    padding: {
      left: 20px;
      right: 20px;
      top: 10px;
      bottom: 10px;
    }
    &:focus {
      outline: 1px solid rgba(255, 255, 255, 1);
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      outline: 1px solid rgba(255, 255, 255, 0.8);
    }
  }
  .register-content-input {
    height: rem-calc(40px);
  }
  .register-content-textarea {
    resize: none;
  }
}
</style>

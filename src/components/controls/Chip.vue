<template>
  <div class="chip">
    <span
      class="chip__label"
      :class="[
        {'chip__label--primary': color === 'primary'},
        {'chip__label--success': color === 'success'},
        {'chip__label--warning': color === 'warning'},
        {'chip__label--danger': color === 'danger'}
      ]"
    ></span>
    <span class="chip__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Chip",
  props: {
    text: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style lang="scss">
.chip {
  display: inline-flex;
  align-items: center;
  padding: 0px 12px;
  background: #f3f3f6;
  border-radius: 16px;
  &__label {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
    &--primary {
      background-color: #007eff;
    }
    &--success {
      background-color: #15b371;
    }
    &--warning {
      background-color: #faa948;
    }
    &--danger {
      background-color: #ff5b5b;
    }
  }
  &__text {
    font-size: 14px;
    line-height: 1.6;
    color: #808080;
    font-weight: 500;
    user-select: none;
  }
}
</style>

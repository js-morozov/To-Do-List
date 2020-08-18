<template>
  <label class="checkbox">
    <input type="checkbox" class="checkbox__input" />
    <span class="checkbox__item">
      <svg
        class="checkbox__svg"
        width="11"
        height="8"
        viewBox="0 0 11 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 1L4.5 6.5L1 3"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span class="checkbox__text" v-if="title">{{ title }}</span>
  </label>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  &__input {
    display: block;
    width: 1px;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    &:checked {
      & + .checkbox__item {
        background-color: #9378ff;
        border-color: #9378ff;
        .checkbox__svg {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border: 1px solid #b3b3b3;
    border-radius: 50%;
  }
  &__svg {
    opacity: 0;
    visibility: hidden;
    margin-top: 1px;
  }
  &__text {
    font-size: 16px;
    line-height: 1.4;
    color: #808080;
    padding-left: 8px;
  }
}
</style>

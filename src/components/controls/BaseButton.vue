<template>
  <button class="button">
    <i data-feather="plus" class="button__icon"></i> Add Task
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {},
};
</script>

<style lang="scss">
.button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 40px;
  border-radius: 20px;
  background: #9378ff;
  box-shadow: 0px 3px 2px rgba(147, 120, 255, 0.02),
    0px 7px 5px rgba(147, 120, 255, 0.03),
    0px 12px 10px rgba(147, 120, 255, 0.035),
    0px 22px 18px rgba(147, 120, 255, 0.04),
    0px 42px 33px rgba(147, 120, 255, 0.05),
    0px 100px 80px rgba(147, 120, 255, 0.07);
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  border: none;
  outline: none;
  user-select: none;
  &__icon {
    margin-right: 8px;
  }
}
</style>

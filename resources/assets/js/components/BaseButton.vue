<template>
  <button class="button" @click="$emit('click')">{{ value }}</button>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    value: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss">
@import "../../scss/variables";

.button {
  font-size: 16px;
  font-weight: 500;
  background-color: $accent;
  padding: 14px 30px;
  border-radius: 6px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: darken($accent, 10%);
  }
}
</style>

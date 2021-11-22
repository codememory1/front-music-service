<template>
  <div class="drop-down">
    <ul class="drop-down__items">
      <slot />
    </ul>
  </div>
</template>
<script>
export default {
  name: "DropDown"
};
</script>
<style lang="scss">
@import "../../../scss/variables";

.drop-down {
  background-color: $abs-light-bg;
  width: 310px;
  height: max-content;
  padding: 10px 18px;
  z-index: 999;

  &__border {
    width: 100%;
    height: 1px;
    background-color: lighten($abs-light-bg, 10%);
    margin: 5px 0;
  }
}
</style>

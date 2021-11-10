<template>
  <div class="drop-down__border"></div>
</template>
<script>
export default {
  name: "DropDownBorder",
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.drop-down__border {
  width: 100%;
  height: 1px;
  background-color: lighten($abs-light-bg, 10%);
  margin: 5px 0;
}
</style>

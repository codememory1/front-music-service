<template>
  <div class="navigation">
    <div class="navigation__logo">
      <img src="/public/images/logo.png" alt="logo" />
    </div>
    <div class="navigation__categories">
      <slot name="categories" />
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseNavigation"
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.navigation {
  padding-left: 40px;
  padding-top: 40px;
  background-color: $dark-bg;
  width: 300px;
  height: 100%;
  overflow: auto;

  &__logo {
    margin-bottom: 50px;

    img {
      width: 60px;
      height: 20px;
    }
  }
}
</style>

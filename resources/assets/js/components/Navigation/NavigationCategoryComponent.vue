<template>
  <div class="navigation__category">
    <span v-if="undefined !== title" class="navigation__category--name">{{
      title
    }}</span>
    <ul class="navigation__items">
      <slot name="items" />
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavigationCategory",
  props: {
    /**
     * name of category
     *
     * @type {String}
     */
    title: {
      type: String,
      required: false
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.navigation {
  &__items {
    display: flex;
    flex-direction: column;
  }

  &__category {
    margin-bottom: 50px;

    &:last-of-type {
      margin-bottom: 0;
    }

    &--name {
      color: $accent;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
      display: block;
    }
  }
}
</style>

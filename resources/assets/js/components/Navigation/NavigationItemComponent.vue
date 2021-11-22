<template>
  <router-link class="navigation__item" active-class="active" :to="link">
    <li>
      <svg-alias :alias="iconAlias" />
      {{ label }}
    </li>
  </router-link>
</template>
<script>
export default {
  name: "NavigationItem",
  props: {
    /**
     * Alias icon from modules/Aliases
     *
     * @type {String}
     */
    iconAlias: {
      type: String,
      required: true
    },

    /**
     * Link name
     *
     * @type {String}
     */
    label: {
      type: String,
      required: true
    },

    /**
     * Link that will be clicked on
     *
     * @type {String || Object}
     */
    link: {
      type: [String, Object],
      default: "",
      required: false
    },

    /**
     * The activity status of this item
     *
     * @type {Boolean}
     */
    isActive: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};
</script>
<style lang="scss">
@import "../../../scss/variables";

.navigation {
  &__item {
    display: flex;
    position: relative;
    align-items: center;
    padding: 15px 0;
    width: 100%;
    color: #fff;
    font-size: 14px;
    font-weight: 500;

    svg {
      margin-right: 15px;
      width: 18px;
      height: 18px;
    }

    &:before {
      content: "";
      width: 0;
      height: 100%;
      background: linear-gradient(
        270deg,
        rgba($accent, 0.3) 0%,
        rgba($accent, 0) 97.38%
      );
      position: absolute;
      border-right: none;
      right: 0;
      transition: width 0.2s ease-in-out, border 0.2s ease-in-out;
    }

    &.active {
      svg {
        ::v-deep path {
          stroke: $accent;
        }
      }

      &:before {
        width: 100%;
        border-right: 2px solid $accent;
      }
    }
  }
}
</style>

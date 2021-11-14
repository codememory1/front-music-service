<template>
  <li
    class="drop-down__item"
    :class="{
      multiple: isMultiple,
      disabled: isDisabled,
      is_link: link === null
    }"
    @click="$emit('click')"
  >
    <a v-if="link !== null" :href="link" class="is_link">
      {{ label }}
    </a>
    <template v-else>{{ label }}</template>
    <slot name="drop-down" />
  </li>
</template>
<script>
export default {
  name: "DropDownItem",
  props: {
    /**
     * Link when clicking on which will be redirected
     *
     * @type {String}
     */
    link: {
      type: String,
      default: null,
      required: false
    },

    /**
     * Whether to make the current item multi
     *
     * @type {Boolean}
     */
    isMultiple: {
      type: Boolean,
      default: false,
      required: false
    },

    /**
     * Prevent click on this item
     *
     * @type {Boolean}
     */
    isDisabled: {
      type: Boolean,
      default: false,
      required: false
    },

    /**
     * The name of the item to be displayed
     *
     * @type {String}
     */
    label: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.drop-down__item {
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  list-style: none;
  color: #efefef;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  border-radius: 5px;

  > a {
    color: #efefef;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &.multiple {
    position: relative;

    &::before {
      content: "";
      background-image: url(public/images/icons/arrow-right.svg);
      background-repeat: no-repeat;
      width: 10px;
      height: 17px;
      position: absolute;
      right: 5px;
      transform: scale(0.8) translateY(-50%);
      top: 50%;
    }

    > .drop-down {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      right: -120%;
      top: 0;
      transition: visibility 0.1s ease-in-out, opacity 0.3s ease-in-out;
    }

    &:hover > .drop-down {
      visibility: visible;
      opacity: 1;
    }
  }

  &:hover {
    background-color: lighten($abs-light-bg, 10%);
  }
}

.is_link {
  padding: 11px 18px 11px 8px;
  display: block;
}
</style>

<template>
  <section class="section">
    <div class="section__top">
      <span class="section__title">{{ title }}</span>
      <slot name="top" />
    </div>
    <div class="section__content">
      <slot name="content" />
    </div>
  </section>
</template>
<script>
export default {
  name: "BaseSection",
  props: {
    /**
     * Section title
     *
     * @type {String}
     */
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss">
@import "../../../scss/variables";

.section {
  &__top {
    display: flex;
    justify-content: space-between;
    padding: 0 $gutter;
  }

  &__title {
    font-size: 20px;
    color: #fff;
    font-weight: 500;
  }
}
</style>

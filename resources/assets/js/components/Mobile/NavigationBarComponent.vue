<template>
  <div class="navigation">
    <div class="navigation__content">
      <div
          class="navigation__border-top"
          :style="'left:' + (itemWithInPercent * getActiveItemIndex) + '%;width:' + itemWithInPercent + '%'"
      ></div>
      <div
          class="navigation__item"
          v-for="(item, index) in items"
          :class="{'active' : index === getActiveItemIndex}"
          :style="'width:' + itemWithInPercent + '%'"
          @click="clickByItem(index)"
      >
        <inline-svg :src="item.svg"/>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    activeItemIndex: {
      type: Number,
      default: 1,
      required: false
    }
  },
  data: () => ({
    mutableActiveItemIndex: null,
    itemWithInPercent: 0
  }),
  created() {
    this.mutableActiveItemIndex = this.activeItemIndex;
    this.itemWithInPercent = 100 / this.items.length;
  },
  computed: {
    getActiveItemIndex() {
      return this.mutableActiveItemIndex - 1;
    }
  },
  methods: {
    /**
     * Обработчик события на какой-то элемент навигации
     * @param index
     */
    clickByItem(index) {
      this.mutableActiveItemIndex = index + 1;

      this.$emit('itemSelection', this.mutableActiveItemIndex);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/components/mobileNavigationBar";
</style>
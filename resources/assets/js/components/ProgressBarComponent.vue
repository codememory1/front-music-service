<template>
  <div class="progress-bar" @click="clickByBar">
    <div ref="progress-down" class="progress-bar--down"></div>
    <div class="progress-bar--up" :style="'width:' + upWith + 'px' ">
      <div ref="progress-circle" class="progress-bar--circle" @mousedown="down"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    startWith: {
      type: Number,
      default: 0,
      required: false
    }
  },
  data: () => ({
    mousedown: false,
    downRect: {},
    circleRect: {},
    upWith: 0
  }),
  created() {
    this.upWith = this.startWith;
  },
  mounted() {
    this.downRect = this.$refs["progress-down"].getBoundingClientRect();
    this.circleRect = this.$refs["progress-circle"].getBoundingClientRect();

    document.addEventListener('mouseup', this.up);
  },
  methods: {
    /**
     * Обычный клик про progress
     * @param event
     */
    clickByBar(event) {
      this.change(event.offsetX);
    },

    /**
     * Обработка события при клике на progress
     */
    down() {
      this.mousedown = true;

      this.moveListener();
    },

    /**
     * Удаления событий, когда отпущена мышка
     */
    up() {
      this.mousedown = false;

      document.removeEventListener('mouseup', this.down);
      document.removeEventListener('mousemove', this.moveListener);
    },

    /**
     * Обработка слушателя движении мышки
     */
    moveListener() {
      document.addEventListener('mousemove', (event) => {
        if (this.mousedown) {
          this.change(event.clientX - this.circleRect.left);
        }
      });
    },

    /**
     * Меняем позицию progress--up и создает события move
     * @param pxPosition
     */
    change(pxPosition) {
      const data = this.getCorrectPositions(pxPosition);

      this.upWith = data.whole.px;

      this.$emit('move', this.upWith);
    },

    /**
     * Получить корректный объект позиции
     * @param pxPosition
     * @returns {{whole: {px: number, percent: number}, float: {px: number, percent: number}}}
     */
    getCorrectPositions(pxPosition) {
      if (pxPosition >= this.downRect.width) {
        pxPosition = this.downRect.width;
      } else if (pxPosition <= 0) {
        pxPosition = 0;
      }

      const percentagePosition = (pxPosition / this.downRect.width) * 100;

      return {
        whole: {
          px: Math.round(pxPosition),
          percent: Math.round(percentagePosition)
        },
        float: {
          px: pxPosition,
          percent: percentagePosition
        }
      };
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/components/progressBar";
</style>
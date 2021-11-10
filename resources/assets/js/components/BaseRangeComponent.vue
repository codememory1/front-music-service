<template>
  <vue-slider
    v-model="value"
    :enable-cross="multipleCross"
    :min="min"
    :max="max"
    :interval="steep"
    :tooltip="enabledTooltip ? tooltipType : 'none'"
    :tooltip-placement="mutatedTooltipPositions"
    :tooltip-formatter="tooltipFormat"
  />
</template>
<script>
import VueSlider from "vue-slider-component";

export default {
  name: "BaseRange",
  components: {
    VueSlider,
  },
  props: {
    /**
     * Default value for progress
     *
     * @type {Number || Array}
     */
    defaultValue: {
      type: [Number, Array],
      default: 0,
      required: false,
    },

    /**
     * Enable cross for multiple progress bar. Prevents one part
     * of the bar from moving if it is larger than the other
     *
     * @type {Boolean}
     */
    multipleCross: {
      type: Boolean,
      default: true,
      required: false,
    },

    /**
     * Minimum value
     *
     * @type {Number}
     */
    min: {
      type: Number,
      default: 0,
      required: false,
    },

    /**
     * Maximum value
     *
     * @type {Number}
     */
    max: {
      type: Number,
      default: 100,
      required: false,
    },

    /**
     * Step when the bar moves
     *
     * @type {Number}
     */
    steep: {
      type: Number,
      default: 1,
      required: false,
    },

    /**
     * Enable tooltip work
     *
     * @type Boolean
     */
    enabledTooltip: {
      type: Boolean,
      default: false,
      required: false,
    },

    /**
     * Tooltip type when tooltip is enabled.
     * Kinds: {always, active, none}
     *
     * @type String
     */
    tooltipType: {
      type: String,
      default: "active",
      required: false,
    },

    /**
     * Tooltip position.
     * Views: top, bottom
     *
     * @type Array
     */
    tooltipPositions: {
      type: Array,
      default: () => ["top"],
      required: false,
    },

    /**
     * Format (value) tooltip
     *
     * @type String
     */
    tooltipFormat: {
      type: String,
      default: "{value}",
      required: false,
    },
  },
  data: () => ({
    value: 0,
    mutatedTooltipPositions: [],
  }),
  created() {
    this.value = this.defaultValue;
    this.mutatedTooltipPositions = this.tooltipPositions;

    if (
      Array.isArray(this.defaultValue) &&
      this.mutatedTooltipPositions.length < this.defaultValue.length
    ) {
      const difference =
        this.defaultValue.length - this.mutatedTooltipPositions.length;

      for (let i = 0; i < difference; i++) {
        this.mutatedTooltipPositions.push(
          this.mutatedTooltipPositions[this.mutatedTooltipPositions.length - 1]
        );
      }
    }
  },
};
</script>
<style lang="scss">
@import "../../scss/variables";

.vue-slider-rail {
  background-color: $light-bg;
  border-radius: 5px;
}

.vue-slider-process {
  background-color: $accent;
  transition-duration: 0s !important;
  border-radius: 5px;
}

.vue-slider-dot {
  width: 12px !important;
  height: 12px !important;
  background-color: $accent;
  border-radius: 100%;
  border: 2px solid #fff;
  transition: transform 0.2s ease-in-out !important;

  &:hover {
    transform: translate(-50%, -50%) scale(1.3) !important;
  }
}

.vue-slider-dot-tooltip {
  font-size: 14px;
  white-space: nowrap;
  padding: 2px 5px;
  min-width: 20px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  border-color: $accent;
  background-color: $accent;
}

.vue-slider-dot-tooltip-inner-bottom:after,
.vue-slider-dot-tooltip-inner-top:after {
  left: 50%;
  transform: translate(-50%);
  height: 0;
  width: 0;
}

.vue-slider-dot-tooltip-inner-top:after {
  top: 97%;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-top-color: $accent;
}

.vue-slider-dot-tooltip-inner:after {
  content: "";
  position: absolute;
}

.vue-slider-dot-tooltip-inner-bottom:after {
  bottom: 97%;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-bottom-color: #e03e10;
}
</style>

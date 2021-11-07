<template>
  <div class="subscription__bang" :style="bangStyles">
	<span>{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: {
	/**
	 * Subscription Bang Name
	 *
	 * @type {String}
	 */
	title: {
	  type: String,
	  required: false
	},

	/**
	 * Bangs background color
	 *
	 * @type String
	 */
	background: {
	  type: String,
	  required: false
	}
  },

  computed: {
	bangStyles() {
	  return {
		backgroundColor: this.background
	  };
	}
  }
}
</script>
<style lang="scss" scoped>
.subscription__bang {
  top: 0;
  left: 0;
  position: absolute;
  padding: 10px 0;
  text-align: center;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;

  span {
	text-transform: uppercase;
	color: #fff;
	font-size: 12px;
	font-weight: bold;
  }
}
</style>
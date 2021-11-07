<template>
  <div class="mobile-player">
	<div class="mobile-player__left-info">
	  <img class="mobile-player__image" :src="image" :alt="name">
	  <div class="music__info">
		<span class="music__info--name">{{ name }}</span>
		<span class="music__info--author">{{ author }}</span>
	  </div>
	</div>
	<div class="mobile-player__control">
	  <div class="mobile-player__play-pause">
		<inline-svg src="public/images/icons/pause-bold.svg"/>
	  </div>
	  <div class="mobile-player__next">
		<inline-svg src="public/images/icons/next.svg"/>
	  </div>
	</div>
  </div>
</template>
<script>
export default {
  props: {
	/**
	 * Active music name
	 *
	 * @type {String}
	 */
	name: {
	  type: String,
	  require: true
	},

	/**
	 * Active music author
	 *
	 * @type {String}
	 */
	author: {
	  type: String,
	  required: true
	},

	/**
	 * Active music image
	 *
	 * @type {String}
	 */
	image: {
	  type: String,
	  required: true
	}
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/components/mobilePlayer";
</style>
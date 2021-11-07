<template>
  <div class="opened-mobile-player">
	<div class="window_indicator">
	  <div class="window_indicator__border"></div>
	</div>
	<div class="opened-mobile-player__image">
	  <img :src="image" :alt="name">
	</div>
	<div class="opened-mobile-player__info">
	  <span class="music__name">{{ name }}</span>
	  <span class="music__author">{{ author }}</span>
	</div>
	<div class="opened-mobile-player__times">
	  <span class="duration">0:58</span>
	  <span class="total">03:58</span>
	</div>
	<progress-bar/>
	<div class="opened-mobile-player__control">
	  <div class="repeat">
		<inline-svg src="public/images/icons/repeat.svg"/>
	  </div>
	  <div class="opened-mobile-player__control--center">
		<div class="prev">
		  <inline-svg src="public/images/icons/prev.svg"/>
		</div>
		<div class="play-pause">
		  <inline-svg src="public/images/icons/pause.svg"/>
		</div>
		<div class="next">
		  <inline-svg src="public/images/icons/next.svg"/>
		</div>
	  </div>
	  <div class="shuffle">
		<inline-svg src="public/images/icons/shuffle.svg"/>
	  </div>
	</div>
  </div>
</template>
<script>
import ProgressBar from "../ProgressBarComponent";

export default {
  components: {
	ProgressBar
  },
  props: {
	/**
	 * Active music name
	 *
	 * @type {String}
	 */
	name: {
	  type: String,
	  required: true
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
@import "../../../scss/components/openedMobilePlayer";
</style>
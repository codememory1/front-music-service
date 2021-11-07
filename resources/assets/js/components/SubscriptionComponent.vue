<template>
  <div class="subscription" :style="getCardStyles">
	<slot name="bang"/>
	<div class="subscription__content">
	  <h3 class="subscription__title">{{ title }}</h3>
	  <h3 class="subscription__mini-desc">{{ miniDesc }}</h3>
	  <span v-if="undefined !== oldPrice" class="subscription__old-price">${{ oldPrice }}</span>
	  <span class="subscription__price">${{ price }}</span>
	  <span class="subscription__is-valid">Subscription is valid for {{ isValid }} months</span>
	  <div class="subscription__options">
		<div
			 class="subscription__option"
			 v-for="option in options"
		>
		  <inline-svg src="public/images/icons/check-mark.svg"/>
		  <p class="subscription__option--name">{{ option }}</p>
		</div>
	  </div>
	  <a href="#" class="subscription__activate-button">Activate</a>
	</div>
  </div>
</template>
<script>
import HexToRgba from "../modules/HexToRgba";

export default {
  props: {
	/**
	 * Subscription indicator
	 *
	 * @type {Number}
	 */
	id: {
	  type: Number,
	  required: true
	},

	/**
	 * Subscription name
	 *
	 * @type {String}
	 */
	title: {
	  type: String,
	  required: true
	},

	/**
	 * Subscription mini description
	 *
	 * @type {String}
	 */
	miniDesc: {
	  type: String,
	  required: true
	},

	/**
	 * Old subscription price
	 *
	 * @type {Number}
	 */
	oldPrice: {
	  type: Number,
	  required: false
	},

	/**
	 * Subscription price
	 *
	 * @type {Number}
	 */
	price: {
	  type: Number,
	  required: true
	},

	/**
	 * Subscription expiration in months
	 *
	 * @type {Number}
	 */
	isValid: {
	  type: Number,
	  required: true
	},

	/**
	 * Options included in this subscription
	 *
	 * @type {Array}
	 */
	options: {
	  type: Array,
	  required: true
	},

	/**
	 * Subscription card background
	 *
	 * @type {String}
	 */
	background: {
	  type: String,
	  required: false
	}
  },

  computed: {
	getCardStyles() {
	  return {
		backgroundColor: undefined !== this.background ? HexToRgba(this.background, 0.1) : undefined
	  };
	}
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/variables";

.subscription {
  width: 375px;
  height: max-content;
  padding: 60px 55px;
  border-radius: 6px;
  background-color: $dark-bg;
  position: relative;

  &__bang {
	top: 0;
	left: 0;
	position: absolute;
	padding: 10px 0;
	text-align: center;
	text-transform: uppercase;
	color: #fff;
	font-size: 12px;
	font-weight: bold;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	width: 100%;
	background-color: $blue;
  }

  &__content {
	display: flex;
	flex-direction: column;
  }

  &__title {
	font-size: 25px;
	font-weight: 500;
	color: #fff;
	width: 100%;
	text-align: center;
  }

  &__mini-desc {
	font-size: 14px;
	font-weight: 500;
	color: #696969;
	margin-top: 10px;
	width: 100%;
	text-align: center;
  }

  &__old-price {
	margin-top: 30px;
	font-size: 22px;
	font-weight: 500;
	color: #939393;
	width: 100%;
	text-align: center;
	text-decoration: line-through;
  }

  &__price {
	font-size: 32px;
	font-weight: 500;
	color: #fff;
	margin-top: 10px;
	width: 100%;
	text-align: center;
  }

  &__is-valid {
	font-size: 12px;
	font-weight: 500;
	color: #696969;
	margin-top: 25px;
	width: 100%;
	text-align: center;
  }

  &__options {
	margin-top: 20px;
	display: flex;
	flex-direction: column;
  }

  &__option {
	display: flex;
	margin-bottom: 20px;
	align-items: center;

	&:last-of-type {
	  margin-bottom: 0;
	}

	&--name {
	  color: #fff;
	  font-size: 14px;
	  font-weight: 500;
	  margin-left: 10px;
	}
  }

  &__activate-button {
	margin-top: 30px;
	background-color: $accent;
	padding: 10px 0;
	width: 100%;
	text-align: center;
	font-size: 16px;
	color: #fff;
	font-weight: 500;
	border-radius: 8px;
	transition: background-color 0.3s ease-in-out;

	&:hover {
	  background-color: darken($accent, 10%);
	}
  }
}
</style>
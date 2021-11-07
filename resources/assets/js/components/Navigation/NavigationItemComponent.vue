<template>
  <li class="navigation__item" :class="{'active': isActive}">
	<router-link :to="link">
	  <inline-svg :src="svg"/>
	  {{ label }}
	</router-link>
  </li>
</template>
<script>
export default {
  props: {
	/**
	 * Path to svg icon
	 *
	 * @type {String}
	 */
	svg: {
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
	 * @type {String}
	 */
	link: {
	  type: String,
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
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.navigation {
  &__item {
	display: flex;
	position: relative;
	align-items: center;

	a {
	  padding: 15px 0;
	  display: flex;
	  align-items: center;
	  width: 100%;

	  svg {
		margin-right: 15px;
		width: 18px;
		height: 18px;
	  }

	  &:before {
		content: "";
		width: 0;
		height: 100%;
		background: linear-gradient(270deg, rgba($accent, 0.3) 0%, rgba($accent, 0) 97.38%);
		position: absolute;
		border-right: none;
		right: 0;
		transition: width 0.2s ease-in-out, border 0.2s ease-in-out;
	  }
	}

	&.active {
	  a {
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

	a {
	  color: #fff;
	  font-size: 14px;
	  font-weight: 500;
	}
  }
}
</style>
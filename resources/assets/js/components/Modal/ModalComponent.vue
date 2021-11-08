<template>
  <div class="modal" :class="{'active': isOpen}">
	<div class="modal__bg" @click="close"></div>
	<div class="modal__container">
	  <div class="modal__content">
		<div class="modal__close">
		  <div class="modal__close--btn" @click="close">
			<i class="fal fa-times"></i>
		  </div>
		</div>
		<slot/>
	  </div>
	</div>
  </div>
</template>
<script>
export default {
  props: {
	/**
	 * Whether to allow scroll body when modal is open
	 *
	 * @type {Boolean}
	 */
	bodyScroll: {
	  type: Boolean,
	  default: false,
	  required: false
	}
  },
  data: () => ({
	isOpen: false
  }),
  mounted() {
	if (this.bodyScroll && this.isOpen) {
	  document.body.style.overflow = 'hidden';
	}
  },
  methods: {
	open() {
	  this.isOpen = true;

	  this.$emit('open');
	},

	close() {
	  this.isOpen = false;

	  this.$emit('close');
	}
  }
}
</script>
<style lang="scss">
@import "../../../scss/components/modal";
</style>
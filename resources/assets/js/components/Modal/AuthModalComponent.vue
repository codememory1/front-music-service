<template>
  <modal ref="modal" :class="'modal-auth'">
	<h3 class="modal__title">Sign Up</h3>
	<div class="methods-auth">
	  <div class="method-auth apple">
		<i class="fab fa-apple"></i>
	  </div>
	  <div class="method-auth google">
		<i class="fab fa-google"></i>
	  </div>
	  <div class="method-auth facebook">
		<i class="fab fa-facebook-f"></i>
	  </div>
	</div>
	<form class="form">
	  <div class="form__field">
		<label for="username">Email | Username</label>
		<input type="text" name="username" id="username">
	  </div>
	  <div class="form__field">
		<label for="password">Password</label>
		<input type="password" name="password" id="password">
	  </div>
	  <button>Login</button>
	</form>
  </modal>
</template>
<script>
import Modal from "../../components/Modal/ModalComponent"

export default {
  components: {
	Modal
  },
  methods: {
	open() {
	  this.$refs.modal.open();
	}
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
</style>
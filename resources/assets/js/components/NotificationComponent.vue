<template>
  <div :class="'notification notification_type--' + type">
    <img v-if="type === 'success'" src="public/images/icons/success.svg" alt="success" class="notification__icon">
    <img v-if="type === 'error'" src="public/images/icons/error.svg" alt="error" class="notification__icon">
    <img v-if="type === 'warning'" src="public/images/icons/warning.svg" alt="warning" class="notification__icon">

    <div class="notification__content">
      <span class="notification__title">{{ title }}</span>
      <span class="notification__text">{{ message }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success',
      required: false
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/components/notification";
</style>
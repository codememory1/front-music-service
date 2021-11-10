<template>
  <div :class="'notification notification_type--' + type">
    <img
      v-if="type === 'success'"
      src="public/images/icons/success.svg"
      alt="success"
      class="notification__icon"
    />
    <img
      v-if="type === 'error'"
      src="public/images/icons/error.svg"
      alt="error"
      class="notification__icon"
    />
    <img
      v-if="type === 'warning'"
      src="public/images/icons/warning.svg"
      alt="warning"
      class="notification__icon"
    />

    <div class="notification__content">
      <span class="notification__title">{{ title }}</span>
      <span class="notification__text">{{ message }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseNotification",
  props: {
    /**
     * The type of notification.
     * Types {success, warning, error}
     *
     * @type {String}
     */
    type: {
      type: String,
      default: "success",
      required: false,
    },

    /**
     * Name of notification
     *
     * @type {String}
     */
    title: {
      type: String,
      required: true,
    },

    /**
     * Notification message
     *
     * @type {String}
     */
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../scss/components/notification";
</style>

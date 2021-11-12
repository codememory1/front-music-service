<template>
  <base-modal ref="modal" :class="'security__modal'">
    <div class="security__modal_content">
      <h3 class="security__modal_title">{{ title }}</h3>
      <slot name="contentAfterTitle" />
      <slot name="form" />
      <slot name="contentAfterForm" />
    </div>
  </base-modal>
</template>
<script>
import BaseModal from "../../components/Modal/BaseModalComponent";

export default {
  components: {
    BaseModal,
  },
  props: {
    /**
     * Modal name
     *
     * @type {String}
     */
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    open() {
      this.$refs.modal.open();
    },
    close() {
      this.$refs.modal.close();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scss/components/security";

.security__modal {
  &_title {
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }

  &_content {
    padding: 0 80px;
  }
}
</style>

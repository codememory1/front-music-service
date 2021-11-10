<template>
  <modal />
</template>
<script>
import Modal from "../../components/Modal/ModalComponent";

export default {
  components: {
    Modal,
  },
  data: () => ({
    value: [0, 100],
  }),
};
</script>

<template>
  <form class="security__form" @submit.prevent>
    <slot />
    <div class="security__button_wrap">
      <base-button
        :value="buttonLabel"
        :class="'security__button'"
        @click="$emit('click')"
      />
    </div>
  </form>
</template>
<script>
import BaseButton from "../BaseButton";

export default {
  name: "SecurityModalForm",
  components: {
    BaseButton
  },
  props: {
    /**
     * Button text
     *
     * @type {String}
     */
    buttonLabel: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.security__button_wrap {
  display: flex;
  justify-content: center;
  padding-bottom: 45px;
}

.security__button {
  border-radius: 60px;
}
</style>

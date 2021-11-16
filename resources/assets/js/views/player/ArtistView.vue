<template>
  <div class="main__content">
    <div
      class="artist__header"
      style="background-image: url('public/images/artist-header.png')"
    >
      <div class="relative">
        <h1 class="artist__name">Zara Larsson</h1>
        <p class="artist__description">
          Millions of songs and podcasts. No credit card. of songs and podcasts.
          No credit card.
        </p>
        <div class="artist__actions">
          <base-custom-click-button :class="'accent btn-s'">
            Subscribe
          </base-custom-click-button>
          <!--          <base-custom-click-button :class="'dark btn-s'">-->
          <!--            Unsubscribe-->
          <!--          </base-custom-click-button>-->
          <share-button />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseCustomClickButton from "../../components/Buttons/BaseCustomClickButtonComponent";
import ShareButton from "../../components/Buttons/ShareButtonComponent";

export default {
  name: "ArtistView",
  components: {
    BaseCustomClickButton,
    ShareButton
  }
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.relative {
  padding: 0 $gutter;
}

.artist {
  &__header {
    width: 100%;
    height: 390px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #090909;
      opacity: 0.4;
      top: 0;
      left: 0;
    }
  }

  &__name {
    color: #fff;
    font-size: 48px;
    font-weight: 500;
    padding-top: 125px;
    padding-bottom: 15px;
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    color: #939393;
    padding-bottom: 40px;
    width: 410px;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.btn-s {
  padding: 11px 24px;
}
</style>

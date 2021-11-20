<template>
  <div class="music-item">
    <div class="music-item__left-info">
      <img class="music-item__image" :src="image" :alt="name" />
      <div class="music-item__names">
        <span class="music-item__name">{{ name }}</span>
        <span class="music-item__author">{{ author }}</span>
      </div>
    </div>
    <div class="music-item__right-info">
      <span class="music-item__time">03:20</span>
      <div class="music-item__buttons">
        <svg-alias :class="'music-item__button--like'" :alias="'like-svg'" />
        <svg-alias
          :class="'music-item__button--actions'"
          :alias="'vertical-ellipses-svg'"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MusicItem",
  props: {
    /**
     * Music image
     *
     * @type {String}
     */
    image: {
      type: String,
      required: true
    },

    /**
     * Full name of the music
     *
     * @type {String}
     */
    name: {
      type: String,
      required: true
    },

    /**
     * Music author
     *
     * @type {String}
     */
    author: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss">
@import "../../scss/variables";

.music-item {
  width: 100%;
  height: 55px;
  display: flex;
  padding-right: 19px;
  justify-content: space-between;
  transition: background-color 0.4s;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: lighten($dark-bg, 5%);
  }

  &:hover &__time {
    color: #fff;
  }

  &.active {
    background-color: lighten($dark-bg, 5%);
  }

  &.active &__time {
    color: #fff;
  }

  &__left-info {
    display: flex;
  }

  &__image {
    width: 80px;
    height: 55px;
  }

  &__names {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 12px;
  }

  &__name {
    font-size: 14px;
    color: #fff;
    line-height: 24px;
    font-weight: 500;
  }

  &__author {
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: $gray-dark;
  }

  &__right-info {
    display: flex;
    justify-content: center;
  }

  &__time {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: $gray-dark;
    margin-right: 38px;
    display: flex;
    align-items: center;
    transition: color 0.3s ease-in-out;
  }

  &__buttons {
    display: flex;
    align-items: center;

    svg {
      path,
      circle {
        transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
      }

      &:hover path {
        stroke: $accent;
      }

      &:hover circle {
        stroke: $accent;
        fill: $accent;
      }
    }
  }

  &__buttons img {
    cursor: pointer;
  }

  &__button--actions {
    margin-left: 15px;
  }
}

.music-item__button--like {
  stroke-width: 1.2px;
}
</style>

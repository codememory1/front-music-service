<template>
  <div class="album">
    <router-link class="album__link" :to="to">
      <img class="album__image" :src="image" :alt="name" />
      <span class="album__name">{{ name }}</span>
      <div class="album__authors">
        <router-link
          v-for="(author, index) in authors"
          :key="index"
          :to="{ name: 'artist', params: { id: author.id } }"
        >
          {{ author.name }}
        </router-link>
      </div>
      <slot />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "BaseAlbum",
  props: {
    /**
     * Album name
     *
     * @type {String}
     */
    name: {
      type: String,
      required: true
    },

    /**
     * Path album image
     *
     * @type {String}
     */
    image: {
      type: String,
      required: true
    },

    /**
     * Array of author objects
     * exp. {id: 1, name: Author}
     *
     * @type {Array}
     */
    authors: {
      type: Array,
      required: true
    },

    /**
     * Link for redirect
     *
     * @type {String || Object}
     */
    to: {
      type: [String, Object],
      required: true
    }
  }
};
</script>
<style lang="scss">
@import "../../../scss/variables";

.album {
  position: relative;
  width: max-content;
  height: max-content;
  padding: 20px 17px;
  background-color: $dark-bg;
  transition: background-color 0.3s ease-in-out;

  &__link {
    width: 100%;
    height: 100%;
    display: block;
  }

  &__image {
    width: 153px;
    height: 140px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  &__name {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    width: 100%;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &__authors {
    margin-top: 5px;

    a {
      color: #999;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: $accent;
      }
    }
  }

  &:hover {
    background-color: lighten($dark-bg, 5%);
  }
}
</style>

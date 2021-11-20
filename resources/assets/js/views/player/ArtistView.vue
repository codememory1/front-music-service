<template>
  <div class="main__content">
    <div
      class="artist__header"
      style="background-image: url('/public/images/artist-header.png')"
    >
      <div class="relative">
        <h1 class="artist__name">Zara Larsson</h1>
        <p class="artist__description">
          Millions of songs and podcasts. No credit card. of songs and podcasts.
          No credit card.
        </p>
        <div class="artist__actions">
          <base-custom-click-button :class="'accent btn-subscription'">
            Subscribe
          </base-custom-click-button>
          <!--          <base-custom-click-button :class="'dark btn-subscription'">-->
          <!--            Unsubscribe-->
          <!--          </base-custom-click-button>-->
          <share-button />
        </div>
      </div>
    </div>
    <section-albums :sectionTitle="'Weeklly Top Track'" :albums="bestTracks">
      <template v-slot:slider="{ album }">
        <base-album
          :name="album.name"
          :image="album.image"
          :authors="album.authors"
          :to="album.to"
        />
      </template>
    </section-albums>
  </div>
</template>
<script>
import BaseCustomClickButton from "../../components/Buttons/BaseCustomClickButtonComponent";
import ShareButton from "../../components/Buttons/ShareButtonComponent";
import BaseAlbum from "../../components/Albums/BaseAlbumComponent";
import SectionAlbums from "../../components/SectionAlbumsComponent";

export default {
  name: "ArtistView",
  components: {
    BaseCustomClickButton,
    ShareButton,
    BaseAlbum,
    SectionAlbums
  },

  data: () => ({
    bestTracks: [
      {
        name: "NO MERCY",
        image: "/public/images/album-image.png",
        to: "",
        authors: [
          {
            id: 1,
            name: "Tvbuu"
          }
        ]
      },
      {
        name: "NO MERCY",
        image: "/public/images/album-image2.png",
        to: "",
        authors: [
          {
            id: 1,
            name: "Tvbuu"
          }
        ]
      },
      {
        name: "NO MERCY",
        image: "/public/images/album-image3.png",
        to: "",
        authors: [
          {
            id: 1,
            name: "Tvbuu"
          }
        ]
      },
      {
        name: "NO MERCY",
        image: "/public/images/album-image4.png",
        to: "",
        authors: [
          {
            id: 1,
            name: "Tvbuu"
          }
        ]
      },
      {
        name: "NO MERCY",
        image: "/public/images/album-image5.png",
        to: "",
        authors: [
          {
            id: 1,
            name: "Tvbuu"
          }
        ]
      },
      {
        name: "NO MERCY",
        image: "/public/images/album-image6.png",
        to: "",
        authors: [
          {
            id: 1,
            name: "Tvbuu"
          }
        ]
      },
      {
        name: "NO MERCY",
        image: "/public/images/album-image.png",
        to: "",
        authors: [
          {
            id: 1,
            name: "Tvbuu"
          }
        ]
      },
      {
        name: "NO MERCY",
        image: "/public/images/album-image.png",
        to: "",
        authors: [
          {
            id: 1,
            name: "Tvbuu"
          }
        ]
      }
    ]
  })
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

.btn-subscription {
  padding: 11px 24px;
}
</style>

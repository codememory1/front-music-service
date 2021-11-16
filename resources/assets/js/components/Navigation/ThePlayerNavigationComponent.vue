<template>
  <base-navigation>
    <template v-slot:categories>
      <navigation-category>
        <template v-slot:items>
          <navigation-item
            :label="'Home'"
            :svg="'public/images/icons/home.svg'"
			:is-active="true"
          />
          <navigation-item
            :label="'Search'"
            :svg="'public/images/icons/search.svg'"
          />
          <navigation-item
            :label="'History'"
            :svg="'public/images/icons/history.svg'"
          />
        </template>
      </navigation-category>
      <navigation-category :title="'Your library'">
        <template v-slot:items>
          <navigation-item
            :label="'Artist'"
            :svg="'public/images/icons/artist.svg'"
          />
          <navigation-item
            :label="'Album'"
            :svg="'public/images/icons/artist.svg'"
          />
          <navigation-item
            :label="'Favorite songs'"
            :svg="'public/images/icons/like.svg'"
          />
          <navigation-item
            :label="'My playlists'"
            :svg="'public/images/icons/playlist.svg'"
          />
        </template>
      </navigation-category>
    </template>
  </base-navigation>
</template>
<script>
import BaseNavigation from "./BaseNavigationComponent";
import NavigationCategory from "./NavigationCategoryComponent";
import NavigationItem from "./NavigationItemComponent";

export default {
  name: "ThePlayerNavigation",
  components: {
    BaseNavigation,
    NavigationCategory,
    NavigationItem
  }
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.navigation {
  border-right: 1px solid $light-bg;
}
</style>

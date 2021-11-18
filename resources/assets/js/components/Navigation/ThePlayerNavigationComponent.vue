<template>
  <base-navigation>
    <template v-slot:categories>
      <navigation-category>
        <template v-slot:items>
          <navigation-item
            :label="'Home'"
            :iconAlias="'home-svg'"
            :is-active="true"
          />
          <navigation-item :label="'Search'" :iconAlias="'search-svg'" />
          <navigation-item :label="'History'" :iconAlias="'history-svg'" />
        </template>
      </navigation-category>
      <navigation-category :title="'Your library'">
        <template v-slot:items>
          <navigation-item :label="'Artist'" :iconAlias="'artist-svg'" />
          <navigation-item :label="'Album'" :iconAlias="'album-svg'" />
          <navigation-item :label="'Favorite songs'" :iconAlias="'like-svg'" />
          <navigation-item
            :label="'My playlists'"
            :iconAlias="'playlist-svg'"
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

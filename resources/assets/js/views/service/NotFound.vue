<template>
  <div>
    <player/>
    <mobile-player
      :image="'public/images/track1.png'"
      :name="'Whethan'"
      :author="'Freefail (feat. Oliver Three)'"
    />
    <navigation-bar
        :items="[
            {
              svg: 'public/images/icons/home.svg',
              name: 'Home'
            },
            {
              svg: 'public/images/icons/search.svg',
              name: 'Search'
            },
            {
              svg: 'public/images/icons/history.svg',
              name: 'History'
            },
            {
              svg: 'public/images/icons/album.svg',
              name: 'Album'
            },
            {
              svg: 'public/images/icons/artist.svg',
              name: 'Artist'
            }
        ]"
        @itemSelection="itemSelection"
    />
  </div>
</template>
<script>
import Calendar from '../../components/CalendarComponent'
import NavigationBar from '../../components/Mobile/NavigationBarComponent'
import Player from '../../components/PlayerComponent'
import MobilePlayer from '../../components/Mobile/PlayerComponent'

export default {
  components: {
    Calendar,
    NavigationBar,
    Player,
    MobilePlayer
  },
  methods: {
    itemSelection(index) {
      console.log(index)
    }
  }
}
</script>
<style>
body {
  background: #09111D;
}
</style>
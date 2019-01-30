/* eslint-disable */
<template>
  <v-layout>
    <v-flex xs4 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2"/>
      </v-flex>
    <v-flex :class="{
      xs12: !isUserLoggedIn,
      xs8: isUserLoggedIn
      }">
      <songs-search-panel class="mt-2" />
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>

import SongsService from '@/services/SongsService'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
import { mapState } from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  data () {
    return {
      songs: null
    }
  },
  // methods: {
  //   navigateTo (route) {
  //     this.$router.push(route)
  //   }
  // },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    // do a request to the backend for all songs
    this.songs = (await SongsService.index()).data
    // console.log('songs', this.songs)
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
font-size: 30px;
}
.song-artist {
font-size: 24px;
}
.song-genre {
font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>

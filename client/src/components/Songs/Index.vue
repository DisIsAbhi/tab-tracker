/* eslint-disable */
<template>
  <v-layout column>
    <v-flex xs5 offset-xs1>
      <songs-search-panel class="mt-2" />
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>

import SongsService from '@/services/SongsService'
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
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
  async mounted () {
    // do a request to the backend for all songs
    this.songs = (await SongsService.index()).data
    console.log('songs', this.songs)
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

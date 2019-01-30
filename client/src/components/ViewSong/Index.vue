/* eslint-disable */
<template>
<div>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song"/>
    </v-flex>
    <v-flex xs8>
      <tab :song="song"/>
    </v-flex>
  </v-layout>
  <v-layout class="mt-3">
    <v-flex xs6>
      <you-tube :youtubeId="song.youtubeId" />    </v-flex>
    <v-flex xs8>
      <lyrics :song="song"/>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    // console.log(songId)
    this.song = (await SongsService.show(songId)).data

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>
<style scoped>
</style>

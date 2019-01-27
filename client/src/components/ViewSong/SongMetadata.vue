/* eslint-disable */
<template>
    <panel title="Song Metadata">
        <v-layout class="song">
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genere">
                {{song.genre}}
              </div>
              <v-btn
                  dark
                  class="cyan"
                  @click="navigateTo({
                  name: 'song-edit',
                  params: {songId: song.id}
                })">
                Edit
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl"/>
                <br>
                {{song.title}}
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.song {
  padding: 0px;
  height: 250px;
  overflow: hidden;
  margin: 0%
}
.song-title {
font-size: 25px;
}
.song-artist {
font-size: 20px;
}
.song-genre {
font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>

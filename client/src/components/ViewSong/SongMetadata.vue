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
                  v-if="isUserLoggedIn"
                  dark
                  small
                  class="cyan one"
                  :to="{
                    name: 'song-edit',
                    params () {
                      return {
                      songId: song.id
                      }
                    }
                  }">
                  <!-- @click="navigateTo({
                  name: 'song-edit',
                  params: {songId: song.id}
                })"> -->
                Edit
              </v-btn>
              <v-btn
                v-if="isUserLoggedIn && !bookmark"
                dark
                small
                class="cyan two"
                @click="setAsBookmark">
                Set Bookmark
              </v-btn>
              <v-btn
                v-if="isUserLoggedIn && bookmark"
                dark
                small
                class="cyan two"
                @click="unsetAsBookmark">
                Unset Bookmark
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
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      console.log(`bookmarkid: ` + this.bookmark.id)
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  watch: {
    async song () {
      console.log(this.isBookmarked)
      if (!this.isUserLoggedIn) {
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
      this.isBookmarked = !!this.bookmark
    }
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
.cyan.one {
  min-width: 0;
  width: 50px;
}
.cyan.two {
  width: auto;
}
</style>

/* eslint-disable */
<template>
  <v-layout>
    <panel title="Lyrics">
      <textarea  class="lyrics"
        readonly
        v-model="song.lyrics"
      ></textarea>
    </panel>
  </v-layout>
</template>

<script>

export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
.lyrics {
  height: 250px;
  width: 100%;
}
</style>

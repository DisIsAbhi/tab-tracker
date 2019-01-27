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
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
.lyrics {
  height: 250px;
  width: 100%;
}
</style>

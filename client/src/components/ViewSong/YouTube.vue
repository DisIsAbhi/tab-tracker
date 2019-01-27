/* eslint-disable */
<template>
<v-layout>
  <panel title="Youtube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="400"
      :player-height="250">
    </youtube>
  </panel>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel,
    VueYouTubeEmbed
  }
}
</script>

<style scoped>
</style>

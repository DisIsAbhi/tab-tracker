/* eslint-disable */
<template>
  <v-layout>
    <panel title="Tab">
      <textarea class="tab"
        readonly
        v-model="song.tab"
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
.tab {
  height: 250px;
  width: 100%;
}
</style>

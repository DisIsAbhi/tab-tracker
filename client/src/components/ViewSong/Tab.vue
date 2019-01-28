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

export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
.tab {
  height: 250px;
  width: 100%;
}
</style>

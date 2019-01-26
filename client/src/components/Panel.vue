/* eslint-disable */
<template>
  <v-layout column>
    <v-flex xs5 offset-xs1>
    <div id="e3" style="max-width: 600px; margin: auto;" class="grey lighten-3">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action"/>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
          <slot>
              No Slot content defined.
          </slot>
      </div>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>

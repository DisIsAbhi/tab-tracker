/* eslint-disable */
<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>
    <div id="e3" style="max-width: auto; margin: auto;" class="grey lighten-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action"/>
      </v-toolbar>
      <div class="pl-2 pr-2 pt-2 pb-2">
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

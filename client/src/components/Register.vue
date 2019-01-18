<template>
  <v-layout column>
    <v-flex xs5 offset-xs1>
    <div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">
      <v-toolbar flat dense class="cyan" dark>
        <div>
          <span class="headline">Register</span>
        </div>
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <br>
        <input class="tbox" type="email" name="email" v-model="email" placeholder="email">
        <br>
        <br>
        <input class="tbox" type="password" name="password" v-model="password" placeholder="password">
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn class="cyan" @click="register">Register</v-btn>
      </div>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
.tbox {
  border: 1px solid black;
}
.headline {
  position: justify;
  padding-left: 110px;
}
</style>

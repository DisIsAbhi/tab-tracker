/* eslint-disable */
<template>
    <v-toolbar fixed class="cyan" dark>
       <v-toolbar-title class="mr-4">
         <router-link
            class="home"
            tag="span"
            :to="{
              name: 'songs'
            }">
            <!-- @click="navigateTo({name: 'songs'})"> -->
            TabTracker
         </router-link>
        </v-toolbar-title>

        <!--TODDO: Implement Me-->
        <v-toolbar-items>
           <v-btn
              flat dark
              :to="{
                name: 'songs'
              }">
              <!-- @click="navigateTo({name: 'songs'})"> -->
              Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
              v-if="!$store.state.isUserLoggedIn"
              flat dark
              :to="{
                name: 'login'
              }">
              <!-- @click="navigateTo({name: 'login'})"> -->
              Login
            </v-btn>
            <v-btn
              v-if="!$store.state.isUserLoggedIn"
              flat dark
              :to="{
                name: 'register'
              }">
              <!-- @click="navigateTo({name: 'register'})"> -->
              Sign Up
            </v-btn>
            <v-btn
              v-if="$store.state.isUserLoggedIn"
              flat dark
              @click="logout">
              Log Out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    // navigateTo (route) {
    //   this.$router.push(route)
    // },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
.home:hover {
    color:  #E93
}
</style>

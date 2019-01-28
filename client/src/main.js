import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/Globals/Panel'

Vue.config.productionTip = false

Vue.use(Vuetify)
// if you don't want install the component globally
Vue.use(VueYouTubeEmbed)
// , { global: false }
Vue.component('panel', Panel)
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

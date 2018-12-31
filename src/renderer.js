import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vue.use(Vuetify, {
//   // iconfont: 'mdi',
// })

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
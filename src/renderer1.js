import Vue from 'vue'
import Vuetify from 'vuetify'
import App1 from './App1.vue'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vue.use(Vuetify, {
//   // iconfont: 'mdi',
// })

Vue.use(Vuetify)

new Vue({
  el: '#app1',
  render(h) {
    return h(App1)
  }
})
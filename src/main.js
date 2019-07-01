import Vue from 'vue'

import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'

import Vuetify from 'Vuetify'

//Vuetify says this goes here but I have no idea why/how.... 
// // main.styl
// @import '~vuetify/src/stylus/main' // Ensure you are using stylus-loader

Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

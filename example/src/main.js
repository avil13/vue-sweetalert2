import Vue from 'vue'
import App from './App.vue'

import VueSweetalert2 from '../../src';

Vue.use(VueSweetalert2);

new Vue({
  el: '#app',
  render: h => h(App)
})

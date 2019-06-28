import Vue from 'vue';

import App from './App.vue';

import VueSweetalert2 from './vue-sweetalert2';

Vue.use(VueSweetalert2, {
    // options
    buttonsStyling: false,
    animation: false,
    customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-warning',
    }
 });

new Vue({
    el: '#app',
    render: h => h(App)
});

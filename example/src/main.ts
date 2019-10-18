import Vue from 'vue';

import App from './App.vue';

import VueSweetalert2 from './vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

// tslint:disable-next-line: no-unused-expression
new Vue({
    el: '#app',
    render: h => h(App),
});

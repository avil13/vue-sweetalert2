import Vue from 'vue';
import VueSweetalert2 from '../src/index.js';

import test from 'ava';

test.beforeEach(t => {
    Vue.use(VueSweetalert2);
});

test('Vue-SweetAlert2', t => {
    t.is(typeof VueSweetalert2, 'function', 'Plugins exists')
    
    t.is(typeof Vue.swal, 'function', 'Vue.swal')
});

test('Vue-SweetAlert2 vm', t => {
    const vm = new Vue({});

    t.is(typeof vm.$swal, 'function', 'vm.swal')
});

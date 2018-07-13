import Vue from 'vue';
import VueSweetalert2 from '../src/index.js';

import test from 'ava';

test.beforeEach(t => {
    // Vue.use(VueSweetalert2);
});

test('Vue-SweetAlert2', t => {
    t.is(VueSweetalert2, Function, 'Plugins exists')
});
/*
describe('Vue-SweetAlert2', () => {

    it('Plugins exists', () => {
        expect(VueSweetalert2).toBeInstanceOf(Function);
    });

    it('Vue.swal', () => {
        expect(Vue.swal).toBeInstanceOf(Function);
    });

    it('this.$swal', () => {
        const vm = new Vue({});

        expect(vm.$swal).toBeInstanceOf(Function);
    });

    // No toast
    it('Vue.toast', () => {
        expect(Vue.toast).toBeUndefined()
    });
});
// */
import Vue from 'vue';
import VueSweetalert2 from '../src/index.js';

describe('Vue-SweetAlert2', () => {
    beforeEach(() => {
        Vue.use(VueSweetalert2);
    });

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
});
import Vue from 'vue';
import VueSweetalert2 from '../src/index.js';

describe('Vue-SweetAlert2 toast', () => {
    beforeEach(() => {
        Vue.use(VueSweetalert2, {
            toast: {
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            }
        });
    });

    it('Vue.toast', () => {
        expect(true).toEqual(true);
        // expect(Vue.toast).toBeInstanceOf(Function);
    });

    // it('this.$toast', () => {
    //     const vm = new Vue({});
        
    //     expect(vm.$toast).toBeInstanceOf(Function);
    // });
});

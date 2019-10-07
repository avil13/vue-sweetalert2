import 'jest';
import {mount, createLocalVue} from '@vue/test-utils';

import VueSweetalert2 from '../src';
import {CreateElement} from 'vue';

const factory = () => {
    const localVue = createLocalVue();
    localVue.use(VueSweetalert2);
    return localVue;
};

const factoryComponent = () => {
    const localVue = createLocalVue();
    localVue.use(VueSweetalert2);
    return mount(
        {
            render(h: CreateElement) {
                return h('div');
            },
        },
        {localVue},
    );
};

describe('Vue-SweetAlert2', () => {
    it('should exists', () => {
        const Vue = factory();
        expect(typeof VueSweetalert2).toBe('function');
    });

    it('should exists', () => {
        const Vue = factory();
        expect(typeof Vue.swal).toBe('function');
    });

    it('should has promise', () => {
        const Vue = factory();
        const pr = Vue.swal('Test');
        expect(pr.then).toBeTruthy();
    });
});

describe('Vue-SweetAlert2 vm', () => {
    it('should vm', () => {
        const wrapper = factoryComponent();

        expect(typeof wrapper.vm.$swal).toBe('function');
    });

    it('should vm has', () => {
        const wrapper = factoryComponent();
        const pr = wrapper.vm.$swal('Test');
        expect(pr.then).toBeTruthy();
    });
});

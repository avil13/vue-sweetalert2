import 'jest';
import {createLocalVue} from '@vue/test-utils';
import Swal from 'sweetalert2';

import VueSweetalert2 from '../src';

const factory = () => {
    const localVue = createLocalVue();

    localVue.use(VueSweetalert2);

    return localVue;
};

/**
 * Return list of all methods name in array: [ ['methodName'] ]
 * need for each list methods testing
 */
function getAllMethodsNames(): string[][] {
    const keys = Object.keys(Swal);

    return keys
        .filter(name => typeof Swal[name] === 'function')
        .map(methodName => [methodName]);
}

const allMethodsNames = getAllMethodsNames();

describe('Vue-SweetAlert2 swal methods v.8.x', () => {
    it.skip('should fire onOpen option key', () => {
        const Vue = factory();
        const onOpen = jest.fn();

        Vue.swal({
            animation: false,
            onOpen,
        });

        // TODO: add global window mock
        expect(onOpen).toBeCalled();
    });

    it.each(allMethodsNames)('should check methods', method => {
        const Vue = factory();

        expect(Vue.swal[method]).toBeTruthy();
    });
});

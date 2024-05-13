import { mount } from '@vue/test-utils';
import Swal from 'sweetalert2';

import VueSweetalert2 from '../src';

import { beforeAll, describe, expect, it } from 'vitest';
import { h } from 'vue';

const factory = () => {
  return mount(
    {
      render() {
        return h('div');
      },
    },
    {
      global: {
        plugins: [VueSweetalert2]
      }
    },
  );
};

/**
 * Return list of all methods name in array: [ ['methodName'] ]
 * need for each list methods testing
 */
function getAllMethodsNames(): (keyof typeof Swal)[][] {
    const keys = Object.keys(Swal) as (keyof typeof Swal)[];

    return keys
        .filter(name => typeof Swal[name] === 'function')
        .map(methodName => [methodName]);
}

const allMethodsNames = getAllMethodsNames();

beforeAll(() => {
  // jest (or more precisely, jsdom) doesn't implement `window.scrollTo` so we need to mock it
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  window.scrollTo = () => {}
})

describe('Vue-SweetAlert2 swal methods v.8.x', () => {
    // it.skip('should fire onOpen option key', async () => {
    //     const Vue = factory({ title: 'Test title'});
    //     const didOpenMock = jest.fn();

    //     await Vue.swal.fire({
    //       showClass: {
    //         popup: '',
    //         container: ''
    //       },
    //       didOpen: () => {
    //         Vue.swal.clickConfirm();
    //         didOpenMock();
    //       }
    //     });

    //     expect(didOpenMock).toBeCalled();
    // });

    /*
    it.each(allMethodsNames)('should check methods "%s"', method => {
        const Vue = factory();

        expect(Vue.swal[method]).toBeTruthy();
    });
    */

    it.skip('isLoading()', () => {
      const comp = factory();

      expect('$swal' in comp).toBe(true);
      expect(typeof comp.swal.isLoading).toBe('function');
    })
});

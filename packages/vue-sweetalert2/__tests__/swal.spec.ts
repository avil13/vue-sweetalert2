import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { h } from 'vue';
import VueSweetalert2 from '../src';

const factoryComponent = () => {
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

describe('Vue-SweetAlert2 vm', () => {
  it('should vm', () => {
    const wrapper = factoryComponent();

    //@ts-ignore
    expect(typeof wrapper.vm.$swal).toBe('function');
  });

  it('should vm has', () => {
    const wrapper = factoryComponent();
    //@ts-ignore
    const pr = wrapper.vm.$swal('Test');
    expect(pr.then).toBeTruthy();
  });

  it('should vm has 2', () => {
    const wrapper = factoryComponent();
    //@ts-ignore
    const pr = wrapper.vm.$swal.fire('Test');
    expect(pr.then).toBeTruthy();
  });
});

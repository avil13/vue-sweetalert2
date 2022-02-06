import { createLocalVue, mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { CreateElement } from 'vue';
import VueSweetalert2 from '../src';

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
    { localVue },
  );
};

describe('Vue-SweetAlert2', () => {
  it('should exists', () => {
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

  it('should vm has 2', () => {
    const wrapper = factoryComponent();
    const pr = wrapper.vm.$swal.fire('Test');
    expect(pr.then).toBeTruthy();
  });
});

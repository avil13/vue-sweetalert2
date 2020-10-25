import {SweetAlertOptions} from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Vue from 'vue';

export * from 'sweetalert2';

type TVueSwalInstance = typeof Swal & typeof Swal.fire;

declare module 'vue/types/vue' {
  interface Vue {
    $swal: TVueSwalInstance;
  }

  interface VueConstructor<V extends Vue = Vue> {
    swal: TVueSwalInstance;
  }
}

class VueSweetalert2 {
  static install(vue: Vue | any, options?: SweetAlertOptions): void {
    const swalLocalInstance = options ? Swal.mixin(options) : Swal;

    const swalFunction = (...args: Parameters<typeof Swal['fire']>) => {
      return swalLocalInstance.fire.call(swalLocalInstance, ...args);
    };

    let methodName: string | number | symbol;

    for (methodName in swalLocalInstance) {
      if (
        Object.prototype.hasOwnProperty.call(swalLocalInstance, methodName) &&
        typeof swalLocalInstance[methodName] === 'function'
      ) {
        swalFunction[methodName] = (method => {
          return (...args: Parameters<typeof Swal['fire']>) => {
            return swalLocalInstance[method].call(swalLocalInstance, ...args);
          };
        })(methodName);
      }
    }

    // add the instance method
    if (vue.config?.globalProperties && !vue.config.globalProperties.$swal) {
      // vue 3
      vue.config.globalProperties.$swal = swalFunction;
      vue.provide('$swal', swalFunction);
    } else if (!Object.prototype.hasOwnProperty.call(vue, '$swal')) {
      // vue 2

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      vue.prototype.$swal = swalFunction;
      vue['swal'] = swalFunction;
    }
  }
}

export default VueSweetalert2;

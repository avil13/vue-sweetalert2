import {SweetAlertOptions} from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

type TVueSwalInstance = typeof Swal & typeof Swal.fire;

declare module 'vue/types/vue' {
  interface Vue {
    $swal: TVueSwalInstance;
  }

  interface VueConstructor {
    swal: TVueSwalInstance;
  }
}

class VueSweetalert2 {
  static install(vue: any, options: SweetAlertOptions = {}): void {
    const swalLocalInstance: typeof Swal = Swal.mixin(options);

    const swalFunction = function(...args: Parameters<typeof Swal['fire']>) {
      return swalLocalInstance.fire.call(swalLocalInstance, ...args);
    };

    Object.assign(swalFunction, Swal);

    Object.keys(Swal)
      //@ts-ignore
      .filter(key => typeof Swal[key] === 'function')
      .forEach(methodName => {
        //@ts-ignore
        swalFunction[methodName] = swalLocalInstance[methodName].bind(swalLocalInstance);
      })


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

import Vue from 'vue';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import swalLocalInstance from 'sweetalert2/dist/sweetalert2.js';

type VueSwalInstance = typeof Swal.fire;

declare module 'vue/types/vue' {
    interface Vue {
        $swal: VueSwalInstance;
    }

    interface VueConstructor<V extends Vue = Vue> {
        swal: VueSwalInstance;
    }
}

class VueSweetalert2 {
    static install(vue: Vue | any, options?: SweetAlertOptions): void {
        const swalLocalInstance = options ? Swal.mixin(options) : Swal;

        const swalFunction = (...args: [SweetAlertOptions]) => {
            return swalLocalInstance.fire.apply(swalLocalInstance, args);
        };

        let methodName: string | number | symbol;

        for (methodName in swalLocalInstance) {
            if (
                Object.prototype.hasOwnProperty.call(swalLocalInstance, methodName) &&
                typeof swalLocalInstance[methodName] === 'function'
            ) {
                swalFunction[methodName] = (method => {
                    return (...args: any[]) => {
                        return swalLocalInstance[method].apply(swalLocalInstance, args);
                    };
                })(methodName);
            }
        }

        vue['swal'] = swalFunction;

        // add the instance method
        if (!vue.prototype.hasOwnProperty('$swal')) {
            vue.prototype.$swal = swalFunction;
        }
    }
}

export default VueSweetalert2;

import Vue from 'vue';

import {SweetAlertOptions} from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

type VueSwalInstance = typeof Swal.fire;

declare module 'vue/types/vue' {
    interface Vue {
        $swal: VueSwalInstance;
    }

    interface VueConstructor<V extends Vue = Vue> {
        swal: VueSwalInstance;
    }
}

interface VueSweetalert2Options extends SweetAlertOptions {
    // includeCss?: boolean;
}

class VueSweetalert2 {
    static install(vue: Vue | any, options?: VueSweetalert2Options): void {
        const _swal = (...args: [SweetAlertOptions]) => {
            if (options) {
                const mixed = Swal.mixin(options);

                return mixed.fire.apply(mixed, args);
            }

            return Swal.fire.apply(Swal, args);
        };

        let methodName: string | number | symbol;

        for (methodName in Swal) {
            if (
                Object.prototype.hasOwnProperty.call(Swal, methodName) &&
                typeof Swal[methodName] === 'function'
            ) {
                _swal[methodName] = (...args: any[]) => {
                    return Swal[methodName].apply(Swal, args);
                };
            }
        }

        vue['swal'] = _swal;

        // add the instance method
        if (!vue.prototype.hasOwnProperty('$swal')) {
            vue.prototype.$swal = _swal;
        }
    }
}

export default VueSweetalert2;

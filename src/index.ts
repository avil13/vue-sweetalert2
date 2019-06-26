import Vue from 'vue';

import { SweetAlertOptions } from 'sweetalert2';
import Swal from 'sweetalert2';

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
        options = {
            ...(options || {})
        };

        // const _swal = options ? Swal.mixin(options).fire.bind(Swal) : Swal.fire.bind(Swal);
        const _swal = (...args: [SweetAlertOptions]) => {
            return options
                ? Swal.mixin(options).fire.apply(Swal, args)
                : Swal.fire.apply(Swal, args);
        };

        for (let k in Swal) {
            if (Swal.hasOwnProperty(k) && typeof Swal[k] === 'function') {
                _swal[k] = (...args) => {
                    return Swal[k].apply(Swal, args);
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

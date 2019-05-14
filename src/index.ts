// @ts-check
import Vue from 'vue';

import { SweetAlertOptions } from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.min.js';

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
    includeCss?: boolean;
}

class VueSweetalert2 {
    static install(Vue: Vue | any, options?: VueSweetalert2Options): void {
        options = {
            ...{
                includeCss: true
            },
            ...options
        };

        if (options.includeCss !== false) {
            require('sweetalert2/dist/sweetalert2.min.css');
        }

        const _swal = options ? Swal.mixin(options).fire.bind(Swal) : Swal.fire.bind(Swal);

        // adding a global method or property
        Vue['swal'] = _swal;

        // add the instance method
        if (!Vue.prototype.hasOwnProperty('$swal')) {
            Vue.prototype.$swal = _swal;
        }
    }
}

export default VueSweetalert2;

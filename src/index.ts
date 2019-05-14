// @ts-check
import Vue from 'vue';

/** @type swal {import("sweetalert2")} */
import Swal, { SweetAlertOptions } from 'sweetalert2';

require('sweetalert2/dist/sweetalert2.min.css');


declare module 'vue/types/vue' {
    interface Vue {
        $swal: typeof Swal.fire;
    }
    interface VueConstructor<V extends Vue = Vue> {
        swal: typeof Swal.fire;
    }
}



function isBrowser() {
    return typeof window !== 'undefined';
}

class VueSweetalert2 {
    static install(Vue: Vue | any, options?: SweetAlertOptions): void {
        // adding a global method or property
        let _swal;

        if (isBrowser()) {
            _swal = (options ? Swal.mixin(options).fire.bind(Swal) : Swal.fire.bind(Swal));
        } else {
            _swal = function () {
                return Promise.resolve();
            };
        }

        Vue['swal'] = _swal;

        // add the instance method
        if (!Vue.prototype.hasOwnProperty('$swal')) {
            Vue.prototype.$swal = _swal;
        }
    }
};


export default VueSweetalert2;

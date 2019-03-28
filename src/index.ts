import Vue from 'vue';
// @ts-check
/** @type swal {import("sweetalert2")} */
import Swal, { SweetAlertOptions } from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


function isBrowser() {
    return typeof window !== 'undefined';
}

class VueSweetalert2 {
    static install(Vue: Vue | any, options?: SweetAlertOptions): void {
        // adding a global method or property
        let _swal;

        if (isBrowser()) {
            _swal = (options ? Swal.mixin(options).fire : Swal.fire);
        } else {
            _swal = function () {
                return Promise.resolve();
            };
        }

        Vue['swal'] = _swal;

        // add the instance method
        if (!Vue.prototype.hasOwnProperty('$swal')) {
            Object.defineProperty(Vue.prototype, '$swal', {
                get: function get() {
                    return _swal
                }
            });
        }
    }
};


export default VueSweetalert2;

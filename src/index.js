// @ts-check
/** @type swal {import("sweetalert2")} */
import swal from 'sweetalert2/dist/sweetalert2.min.js';
import 'sweetalert2/dist/sweetalert2.min.css';

function isBrowser() {
    return typeof window !== 'undefined';
}

var VueSweetalert2 = function () {};


VueSweetalert2.install = function (Vue, options) {
    // adding a global method or property
    var _swal;

    if (isBrowser()) {
        _swal = (options ? swal.mixin(options) : swal);
    } else {
        _swal = function () {
            return Promise.resolve();
        };
    }

    Vue.swal = _swal;

    // add the instance method
    if (!Vue.prototype.hasOwnProperty('$swal')) {
        Object.defineProperty(Vue.prototype, '$swal', {
            get: function get() {
                return _swal
            }
        });
    }
};

export default VueSweetalert2;

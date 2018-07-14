import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function isBrowser() {
    return typeof window !== 'undefined';
}

var VueSweetalert2 = function() {};

VueSweetalert2.install = function(Vue, options = { toast: false }) {
    // 1. adding a global method or property
    const _swal = isBrowser() ? swal : function() {};

    Vue.swal = _swal;

    // 4. add the instance method
    Object.defineProperty(Vue.prototype, '$swal', {
        get: function get() {
            return _swal
        }
    });
};

export default VueSweetalert2;

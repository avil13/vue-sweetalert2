import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

var VueSweetalert2 = function() {};

VueSweetalert2.install = function(Vue, options = { toast: false }) {
    // 1. adding a global method or property
    Vue.swal = swal;

    // 4. add the instance method
    Object.defineProperty(Vue.prototype, '$swal', {
        get: function get() {
            return swal;
        }
    });

    //  Make toast function
    if (options.toast && (options.toast === true || typeof options.toast === 'object')) {
        const toast_options = Object.assign(
            {
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            },
            options.toast === true ? {} : options.toast
        );

        Vue.toast = swal.mixin(toast_options);

        Object.defineProperty(Vue.prototype, '$toast', {
            get: function get() {
                return Vue.toast;
            }
        });
    }
};

export default VueSweetalert2;

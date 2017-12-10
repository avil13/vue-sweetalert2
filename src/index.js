import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


var VueSweetalert2 = function() {};

VueSweetalert2.install = function(Vue) {
    // 1. adding a global method or property
    Vue.swal = swal;

    // 4. add the instance method
    Object.defineProperty(Vue.prototype, '$swal', {
        get: function get() {
            return swal
        }
    });
};


export default VueSweetalert2;

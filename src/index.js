import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


var VueSweetalert2 = function () { };

VueSweetalert2.install = function (Vue) {
  // 1. adding a global method or property
  Vue.swal = swal;

  // 4. add the instance method
  Object.defineProperty(Vue.prototype, '$swal', {
    get: function get() {
      return swal
    }
  });

  Object.defineProperty(Vue.prototype, '$alert', {
    get: function get() {
      return msg => swal({
        text: msg,
        timer: 2000,
        showConfirmButton: false,
      });
    }
  });

  Object.defineProperty(Vue.prototype, '$success', {
    get: function get() {
      return msg => swal({
        text: msg,
        type: 'success',
        timer: 2000,
        showConfirmButton: false,
      });
    }
  });

  Object.defineProperty(Vue.prototype, '$err', {
    get: function get() {
      return msg => swal({
        text: msg,
        type: 'error',
        timer: 2000,
        showConfirmButton: false,
      });
    }
  });

  Object.defineProperty(Vue.prototype, '$warn', {
    get: function get() {
      return msg => swal({
        text: msg,
        type: 'warning',
        timer: 2000,
        showConfirmButton: false,
      });
    }
  });
};


export default VueSweetalert2;

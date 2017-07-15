import swal from 'sweetalert2';
import '~sweetalert2/dist/sweetalert2.min.css';

VueSweetalert2 = {};

VueSweetalert2.install = function(Vue, options) {
    // 1. добавление глобального метода или свойства
    // Vue.myGlobalMethod = function() {
    //         // некоторая логика ...
    //     }
    //     // 2. добавление глобального объекта
    // Vue.directive('my-directive', {
    //         bind(el, binding, vnode, oldVnode) {
    //                 // некоторая логика ...
    //             }
    //             ...
    //     });
    //
    // // 3. добавление опций компонентов
    // Vue.mixin({
    //         created: function() {
    //                 // некоторая логика ...
    //             }
    //             ...
    //     });

    // 4. добавление метода экземпляра
    Vue.prototype.$swal = function(...args) {
        swal.apply(null, args);
    };
};

export default VueSweetalert2;

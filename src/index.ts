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
        function _swal(...args: [SweetAlertOptions]) {
            args = prepareArgs.call(this, args) as [SweetAlertOptions];

            if (options) {
                const mixed = Swal.mixin(options);
                return mixed.fire.apply(mixed, args);
            }
            return Swal.fire.apply(Swal, args);
        }

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

function prepareArgs(args: SweetAlertOptions[]): SweetAlertOptions[] {
    return args.map(item => {
        //  this.$options.components
        // https://github.com/alexjoverm/v-runtime-template/blob/master/index.js#L34-L53

        if (item.html) {
            // const comp = createComp.call(this, this.$createElement, item.html);
            const el = Vue.compile(item.html as string);
            console.log(el, this);

            debugger;
        }
        return item;
    });
}

export default VueSweetalert2;

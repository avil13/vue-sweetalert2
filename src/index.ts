import Vue from 'vue';

import Swal, {SweetAlertOptions, SweetAlertResult} from 'sweetalert2';

type TVueSwalInstance = typeof Swal & typeof Swal.fire;

declare module 'vue/types/vue' {
    interface Vue {
        $swal: TVueSwalInstance;
    }

    interface VueConstructor<V extends Vue = Vue> {
        swal: TVueSwalInstance;
    }
}

class VueSweetalert2 {
    static install(vue: Vue | any, options?: SweetAlertOptions): void {
        const swalLocalInstance = options ? Swal.mixin(options) : Swal;

        const swalFunction = (...args: [SweetAlertOptions]) => {
            return swalLocalInstance.fire.call(swalLocalInstance, ...args);
        };

        let methodName: string | number | symbol;

        for (methodName in swalLocalInstance) {
            if (
                Object.prototype.hasOwnProperty.call(swalLocalInstance, methodName) &&
                typeof swalLocalInstance[methodName] === 'function'
            ) {
                swalFunction[methodName] = (method => {
                    return (...args: any[]) => {
                        return swalLocalInstance[method].call(swalLocalInstance, ...args);
                    };
                })(methodName);
            }
        }

        vue['swal'] = swalFunction;

        // add the instance method
        if (!Object.prototype.hasOwnProperty.call(vue, '$swal')) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            vue.prototype.$swal = swalFunction;
        }
    }
}

export default VueSweetalert2;

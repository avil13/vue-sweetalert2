import { SweetAlertType } from 'sweetalert2';

import Vue, { PluginObject, PluginFunction } from 'vue';

function swal(title: string, message?: string, type?: SweetAlertType): Promise<any>;

declare module 'vue/types/vue' {
    interface Vue {
        $swal: swal; // () => Promise<any>;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        swal?: swal; // () => Promise<any>;
    }
}

//

declare let VueSweetalert2: (vue: Vue) => void;
export default VueSweetalert2;


// declare let VueSweetalert2: (vue: Vue, options?: VueSweetalert2Options) => void;

// export interface VueSweetalert2Options {
//     toast: boolean | VueSweetalert2ToastOptions;
// }

// export interface VueSweetalert2ToastOptions {
//     toast: boolean;
//     position: swal.SweetAlertOptions.position;
//     showConfirmButton: swal.SweetAlertOptions.showConfirmButton;
//     timer: swal.SweetAlertOptions.timer;
// }

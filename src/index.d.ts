import swal from 'sweetalert2';

import Vue, { PluginObject, PluginFunction } from 'vue';


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

declare let VueSweetalert2: (Vue, options?: VueSweetalert2Options) => void;

export default VueSweetalert2;

export interface VueSweetalert2Options {
    toast: boolean | VueSweetalert2ToastOptions;
}

export interface VueSweetalert2ToastOptions {
    toast: boolean;
    position: swal.SweetAlertOptions.position;
    showConfirmButton: swal.SweetAlertOptions.showConfirmButton;
    timer: swal.SweetAlertOptions.timer;
}

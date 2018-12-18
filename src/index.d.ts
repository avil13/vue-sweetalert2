import Vue, { PluginObject, PluginFunction, VueConstructor } from 'vue';
import swal, { SweetAlertOptions, SweetAlertType } from 'sweetalert2';

declare interface swal {
    mixin(options?: SweetAlertOptions): typeof swal;
}

declare module 'vue/types/vue' {
    interface Vue {
        $swal: typeof swal;
    }
    interface VueConstructor<V extends Vue = Vue> {
        swal: typeof swal;
    }
}

//

declare const VueSweetalert2: PluginFunction<any>;

export default VueSweetalert2;

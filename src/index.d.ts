// import swal from 'sweetalert2';

import Vue, { PluginObject, PluginFunction } from 'vue';


declare module 'vue/types/vue' {
    interface Vue {
        $swal: () => Promise<any>;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        swal?: () => Promise<any>;
    }
}

//

declare let VueSweetalert2: (Vue, options?: any) => void;

export default VueSweetalert2;

import { swal } from 'sweetalert2';

declare module 'vue/types/vue' {
    interface Vue {
        $swal: swal;
    }
    swal: swal;
}

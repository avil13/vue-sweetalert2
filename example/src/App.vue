<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>

        <ul>
            <li>
                <button @click="simple" class="btn btn-outline-primary" type="button">
                    simple
                </button>
            </li>
            <li>
                <button @click="success" class="btn btn-outline-primary" type="button">
                    success
                </button>
            </li>
            <li>
                <button @click="error" class="btn btn-outline-primary" type="button">
                    error
                </button>
            </li>
            <li>
                <button @click="toastTopEnd" class="btn btn-outline-primary" type="button">
                    toast top end
                </button>
            </li>
        </ul>
        <a href="https://sweetalert2.github.io" target="_blank">Sweetalert2 documentation</a>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Vue-Sweetalert2 example'
        }
    },

    methods: {
        simple() {
            this.$swal('Hello world!');
        },
        success() {
            this.$swal({
                type: 'success',
                title: 'Hello',
                text: 'Hello brave new world!'
            });
        },
        error() {
            this.$swal({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
            });
        },
        toastTopEnd() {
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,

                type: 'success',
                title: 'Hi man',
                text: 'is a good day!'
            });
        }
    }
}
</script>

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


<style>
html,
body {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1 0 auto;
}

.footer {
    flex-shrink: 0;
    /*  */
    display: flex;
    flex-direction: row-reverse;
}

.gh-icon {
    margin: 1rem 2rem;
    opacity: .6;
    transition: opacity 500ms ease-in-out;
}
.gh-icon:hover {
    opacity: 1;
}

/*  */
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

/*! CSS Used from: https://getbootstrap.com/docs/4.1/dist/css/bootstrap.min.css */
*,
::after,
::before {
    box-sizing: border-box;
}
a {
    color: #41b882;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
a:hover {
    /* color: #0056b3; */
    text-decoration: underline;
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media screen and (prefers-reduced-motion: reduce) {
    .btn {
        transition: none;
    }
}
.btn:focus,
.btn:hover {
    text-decoration: none;
}
.btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.btn:disabled {
    opacity: 0.65;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn-outline-primary {
    color: #41b882;
    background-color: transparent;
    background-image: none;
    border-color: #41b882;
}
.btn-outline-primary:hover {
    color: #fff;
    background-color: #41b882;
    border-color: #41b882;
}
.btn-outline-primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
.btn-outline-primary:disabled {
    color: #41b882;
    background-color: transparent;
}
@media print {
    *,
    ::after,
    ::before {
        text-shadow: none !important;
        box-shadow: none !important;
    }
}
</style>

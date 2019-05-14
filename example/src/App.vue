<template>
    <div id="app" class="container">
        <img src="./assets/logo.png" alt="vue sweetalert2" class="responsive">
        <h1 class="h1">{{ msg }}</h1>

        <div class="row">
            <button @click="simple" class="btn btn-outline-primary col s12 m3" type="button">
                simple
            </button>
            <button @click="success" class="btn btn-outline-primary col s12 m3" type="button">
                success
            </button>
            <button @click="error" class="btn btn-outline-primary col s12 m3" type="button">
                error
            </button>
            <button @click="toastTopEnd" class="btn btn-outline-primary col s12 m3" type="button">
                toast top end
            </button>
        </div>

        <a href="https://sweetalert2.github.io" class="doc-link" target="_blank">Sweetalert2 documentation</a>
    </div>
</template>

<script lang="ts">
// import Vue from 'vue';
// import Component from 'vue-class-component';
import { Component, Vue } from 'vue-property-decorator';

Vue.use

@Component
export default class AppComponent extends Vue {
    msg: string = 'Welcome to Vue-Sweetalert2 example'

    simple() {
        this.$swal('Hello world!');
    }
// /*
    success() {
        Vue.swal({
            type: 'success',
            title: 'Hello',
            text: 'Hello brave new world!'
        });
    }

    error() {
        this.$swal({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        });
    }

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
// */
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
    text-decoration: underline;
}
.content {
    flex: 1 0 auto;
}
.footer {
    flex-shrink: 0;
    display: flex;
    flex-direction: row-reverse;
}
.gh-icon {
    margin: 1rem 2rem;
    opacity: 0.6;
    transition: opacity 500ms ease-in-out;
}
.gh-icon:hover {
    opacity: 1;
}
/*  */
.doc-link {
    margin: 32px auto 0;
    display: block;
}
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
a {
    color: #42b983;
}

.btn {
    border-radius: 0.25rem;
    border: 1px solid transparent;
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.475rem 0.75rem;
    text-align: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
}
.row .btn.col {
    padding: 0.475rem 0.75rem;
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
    background-color: transparent;
    background-image: none;
    border-color: #41b882;
    color: #41b882;
}
.btn-outline-primary:hover {
    background-color: #41b882;
    border-color: #41b882;
    color: #fff;
}
.btn-outline-primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
.btn-outline-primary:disabled {
    background-color: transparent;
    color: #41b882;
}

/* */
.responsive {
    height: auto;
    min-width: auto;
    max-width: 100%;
}
.container {
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;
}

@media screen and (prefers-reduced-motion: reduce) {
    .btn {
        transition: none;
    }
}
@media print {
    *,
    ::after,
    ::before {
        text-shadow: none !important;
        box-shadow: none !important;
    }
}
@media only screen and (min-width: 601px) {
    .container {
        width: 85%;
    }
}
@media only screen and (min-width: 993px) {
    .container {
        width: 70%;
    }
}
@media only screen and (max-width: 800px) {
    .h1 {
        font-size: 4vw;
        margin-bottom: 20px;
    }
}

.row .col {
    box-sizing: border-box;
    margin: 2px 4px;
    min-height: 1px;
    padding: 0 12px;
    padding: 0 0.75rem;
}
.row .col.s12 {
    margin-left: auto;
    left: auto;
    right: auto;
}
.row .col.s12 {
    width: 100%;
}

@media only screen and (min-width: 601px) {
    .row .col.m8 {
        margin-left: auto;
        left: auto;
        right: auto;
    }
    .row .col.m8 {
        width: 66.6666666667%;
    }
    .row .col.offset-m2 {
        margin-left: 16.6666666667%;
    }
}

@media only screen and (min-width: 601px) {
    .row .col.m3 {
        width: 22%;
    }
    .row .col.m3 {
        margin-left: auto;
        left: auto;
        right: auto;
    }
    .row .col.m8 {
        margin-left: auto;
        left: auto;
        right: auto;
    }
    .row .col.m8 {
        width: 66.6666666667%;
    }
    .row .col.offset-m2 {
        margin-left: 16.6666666667%;
    }
}
</style>

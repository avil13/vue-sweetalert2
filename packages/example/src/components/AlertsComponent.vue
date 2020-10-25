<template>
  <div id="app" class="container">
    <h1 class="h1">{{ msg }}</h1>
    <h3>{{ description }}</h3>

    <br />

    <div class="row">
      <button @click="simple" class="btn btn-outline-primary col s12 m3" type="button">simple</button>
      <button @click="success" class="btn btn-outline-primary col s12 m3" type="button">success</button>
      <button @click="error" class="btn btn-outline-primary col s12 m3" type="button">error</button>
      <button @click="toastTopEnd" class="btn btn-outline-primary col s12 m3" type="button">toast top end</button>
    </div>

    <a href="https://sweetalert2.github.io" class="doc-link" target="_blank">Sweetalert2 documentation</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      msg: 'Welcome to Vue-Sweetalert2 example',
      description: 'This is TypeScript component in Vue 3',
    };
  },

  methods: {
    simple() {
      this.$swal('Hello world!');
    },

    success() {
      this.$swal({
        icon: 'success',
        title: 'Hello',
        text: 'Hello brave new world!',
      });
    },

    error() {
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    },

    toastTopEnd() {
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,

        icon: 'success',
        title: 'Hi man',
        text: 'is a good day!',
      });
    },
  },
});
</script>

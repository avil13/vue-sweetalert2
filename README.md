# vue-sweetalert2

[![Greenkeeper badge](https://badges.greenkeeper.io/sweetalert2/vue-sweetalert2.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/sweetalert2/vue-sweetalert2.svg?branch=master)](https://travis-ci.org/sweetalert2/vue-sweetalert2)

Official wrapper for sweetalert2.

![VueSweetalert2](assets/logo.png)


### Get started


```bash
npm install -S vue-sweetalert2
```
or
```bash
yarn add vue-sweetalert2
```


// main.js
```JavaScript
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
```

Now in the global object, you can access all the methods of [sweetalret2](https://github.com/limonte/sweetalert2).


// example-vue-component.vue
```html
<template>
    <button v-on:click="showAlert">Hello world</button>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        showAlert(){
            // Use sweetalret2
            this.$swal('Hello Vue world!!!');
        }
    }
}
</script>
```

// Or
```JavaScript
Vue.swal('Hello Vue world!!!');
```


The documentation for sweetalert2, you can find [here](https://sweetalert2.github.io/).

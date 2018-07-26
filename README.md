# vue-sweetalert2

[![Build Status](https://travis-ci.org/avil13/vue-sweetalert2.svg?branch=master)](https://travis-ci.org/avil13/vue-sweetalert2)

Vue.js wrapper for SweetAlert2. With support SSR.

![VueSweetalert2](assets/logo.png)

### [Demo](https://avil13.github.io/vue-sweetalert2/)

![vue-sweetalert2 demo](assets/vue-sweetalert2.gif)

---

## Get started


```bash
npm install -S vue-sweetalert2
```


// main.js
```JavaScript
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
```

Now in the global object, you can access all the methods of [sweetalert2](https://github.com/limonte/sweetalert2).


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


### The documentation for sweetalert2, you can find [here](https://sweetalert2.github.io/).

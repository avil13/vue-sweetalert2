# vue-sweetalert2

A convenient wrapper for sweetalert2.

### Get started

```
npm install -S vue-sweetalert2
```
or
```
yarn add vue-sweetalert2
```


// main.js
```
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
```

Now in the global object, you can access all the methods of [sweetalret2](https://github.com/limonte/sweetalert2).


// example-vue-component.vue
```
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
```
Vue.swal('Hello Vue world!!!');
```


The documentation for sweetalert2, you can find [here](https://limonte.github.io/sweetalert2/).

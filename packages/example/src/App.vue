<template>
  <div>
    <img alt="Vue-sweetalert2 logo" src="./assets/logo.png" class="logo-img"/>
    <AlertsComponent />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import AlertsComponent from './components/AlertsComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    AlertsComponent,
  },
});
</script>

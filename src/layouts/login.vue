<template>
  <div>
      <slot />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '../components/layouts/AppFooter.vue';

export default {
  name: 'LoginLayout',
  components: {
    AppFooter,
  },
};
</script>

<template>
  <v-footer color="blue darken-2">
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="white--text ml-4">
          Copyright © 2019
          {{title}}
          <!-- <a href="https://www.sumanix.com" target="_blank"></a> -->
          <!-- Made with
          <v-icon class="red--text">mdi-heart</v-icon>by
          <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a> -->
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      title: this.$APP_TITLE,
    };
  },
};
</script>

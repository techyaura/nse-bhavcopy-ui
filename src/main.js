import Vue from 'vue';
import VuetifyToast from 'vuetify-toast-snackbar';
import App from './App.vue';
import router from './router';
import { apolloProvider } from './plugins/apollo';
// import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import Default from './layouts/default.vue';
import LoginLayout from './layouts/login.vue';

Vue.config.productionTip = false;
// Vue.prototype.$BASE_URL = process.env.VUE_APP_BASE_URL;
Vue.prototype.$APP_TITLE = 'NSE-BHAVCOPY';
Vue.component('default-layout', Default);
Vue.component('login-layout', LoginLayout);
Vue.use(VuetifyToast, {
  x: 'right', // default
  y: 'bottom', // default
  color: 'info', // default
  icon: 'info',
  iconColor: '', // default
  classes: [
    'body-2',
  ],
  timeout: 3000, // default
  dismissable: true, // default
  multiLine: false, // default
  vertical: false, // default
  queueable: false, // default
  showClose: false, // default
  closeText: '', // default
  closeColor: '', // default
  shorts: {
    custom: {
      color: 'purple',
    },
  },
  property: '$toast', // default
});

new Vue({
  router,
  apolloProvider,
  vuetify,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Nse from './views/nse.vue';
import Login from './views/login.vue';
import Register from './views/register.vue';
import VerifyEmail from './views/verify.vue';
import requireAuth from './services/requireAuth';
import localStorageService from './services/localStorage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      beforeEnter(to, from, next) {
        if (to.name === 'login' && localStorageService.getToken()) {
          return next(from.path || '/dashboard');
        }
        return next();
      },
      component: Login,
      meta: {
        layout: 'login',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        layout: 'login',
      },
    },
    {
      path: '/verify-email/:hash',
      name: 'verify-email',
      component: VerifyEmail,
      meta: {
        layout: 'login',
      },
    },
    {
      path: '/dashboard',
      beforeEnter: requireAuth,
      name: 'home',
      component: Home,
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/',
      name: 'nse-bhavcopy',
      component: Nse,
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/about',
      name: 'about',
      beforeEnter(to, from, next) {
        if (to.name === 'about' && localStorageService.getToken()) {
          return next('/dashboard');
        }
        return next();
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        layout: 'login',
      },
    },
  ],
});

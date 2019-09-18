import localStorageService from './localStorage';

function requireAuth(to, from, next) {
  if (localStorageService.getToken()) {
    return next();
  }
  return next('/login');
}

export default requireAuth;

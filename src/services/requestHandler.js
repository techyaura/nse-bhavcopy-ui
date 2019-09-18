import localStorageService from './localStorage';

function headerRequestHandler(configObj) {
  const config = { ...configObj };
  const token = localStorageService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}
export default headerRequestHandler;

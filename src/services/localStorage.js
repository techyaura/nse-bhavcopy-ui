class localStorageService {
  static getToken() {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    }
    return null;
  }

  static getUser() {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }
    return null;
  }

  static destroySession() {
    localStorage.clear();
    return Promise.resolve(true);
  }
}

export default localStorageService;

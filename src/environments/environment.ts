export const environment = {
  production: false,
  apiUrl: window.location.hostname === 'localhost' ? 'http://localhost:8080/api' : 'http://192.168.100.197:8080/api',
};

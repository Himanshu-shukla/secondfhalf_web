const MODE = import.meta.env.MODE ?? 'development';

export const API_URL =
  ({
    production: import.meta.env.VITE_PROD_API_URL,
    test: import.meta.env.VITE_TEST_API_URL,
    development: import.meta.env.VITE_DEV_API_URL,
  })[MODE] ?? import.meta.env.VITE_DEV_API_URL;

export const SOCKET_URL =
  ({
    production: import.meta.env.VITE_PROD_SOCKET_URL,
    test: import.meta.env.VITE_TEST_SOCKET_URL,
    development: import.meta.env.VITE_DEV_SOCKET_URL,
  })[MODE] ?? import.meta.env.VITE_DEV_SOCKET_URL;

export const API_CAPTCHA_URL = 
({
    production: import.meta.env.VITE_CAPTCHA_BACKEND_URL,
    test: import.meta.env.VITE_CAPTCHA_BACKEND__TEST_URL,
    development: import.meta.env.VITE_CAPTCHA_BACKEND__DEV_URL,
  })[MODE] ?? import.meta.env.VITE_CAPTCHA_BACKEND__DEV_URL;

  export const FRONTEND_API_URL = 
({
    production: import.meta.env.VITE_PROD_FRONTEND_API_URL,
    test: import.meta.env.VITE_TEST_FRONTEND_API_URL,
    development: import.meta.env.VITE_DEV_FRONTEND_API_URL,
  })[MODE] ?? import.meta.env.VITE_DEV_FRONTEND_API_URL;
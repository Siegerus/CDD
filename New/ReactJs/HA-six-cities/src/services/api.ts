import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

const BACKEND_URL = '../../server';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    console.log('request-interseptor');
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      console.log('response-interceptor');
      return response;
    },
    (error: AxiosError<string>) => {
      if (error.response) console.log(error.response.statusText);
    }
  );

  return api;
};

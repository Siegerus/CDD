import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	InternalAxiosRequestConfig,
} from 'axios';

import { getToken } from './token';

const BACKEND_URL = 'https://jsonplaceholder.typicode.com/posts';
const REQUEST_TIMEOUT = 0;

export const createAPI = (): AxiosInstance => {
	const api = axios.create({
		baseURL: BACKEND_URL,
		timeout: REQUEST_TIMEOUT,
	});

	// Интерцепторы - это перехватчики. "interceptors.request" выполнит ф-цию перед самой отправкой запроса
	// В данном случае поместим а заголовки нужный токен
	api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
		const token = getToken();

		if (token && config.headers) {
			config.headers['x-token'] = token;
		}

		return config;
	});

	return api;
};

import type { ServerLocalPoint, ServerPoint } from '@/types/types';
import { localStorageKeys } from '@/utils/constants';
import axios, { type InternalAxiosRequestConfig } from 'axios';

// Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE

const apiClient = axios.create({
  baseURL: 'https://19.ecmascript.pages.academy/big-trip',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const checkTokenInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(localStorageKeys.AUTH_KEY);

  if (token) {
    config.headers.Authorization = `Basic ${token}`;
  }

  return config;
};
apiClient.interceptors.request.use(checkTokenInterceptor);

export default {
  getPoints() {
    return apiClient.get('/points');
  },
  getOffers() {
    return apiClient.get('/offers');
  },
  getDestinations() {
    return apiClient.get('/destinations');
  },
  updatePoint(point: ServerPoint) {
    return apiClient.put(`/points/${point.id}`, point);
  },
  deletePoint(id: string) {
    return apiClient.delete(`/points/${id}`);
  },
  addPoint(point: ServerLocalPoint) {
    return apiClient.post(`/points`, point);
  },
};

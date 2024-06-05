import axios from 'axios';
import { useContext } from 'react';
import { Context } from './main';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  config => {
    const { setLoading } = useContext(Context);
    setLoading(true);
    return config;
  },
  error => {
    const { setLoading } = useContext(Context);
    setLoading(false);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    const { setLoading } = useContext(Context);
    setLoading(false);
    return response;
  },
  error => {
    const { setLoading } = useContext(Context);
    setLoading(false);
    return Promise.reject(error);
  }
);

export default axiosInstance;

import axios from 'axios';
import { BASE_URL } from './baseUrl';

const axiosService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    },
});

axios.interceptors.request.use(
    (config) => {
        return config;
},
    (error) => {
        console.error(error);
        Promise.reject(error);
});

export default axiosService;
// src/axiosInstance.ts

import axios, { AxiosInstance } from 'axios';

// Define an Axios instance with default configurations
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;

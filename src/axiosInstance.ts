// src/axiosInstance.ts

import axios, { AxiosInstance } from 'axios';

// Define an Axios instance with default configurations
const axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://lernenapi.biggarf.com",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        "Token": localStorage.getItem("token")
    },
});


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401 && window.location.href !== '/login') {
            // Redirect to the login page
            window.location.href = '/login';
        }
        return Promise.reject(error);
    });

export default axiosInstance;

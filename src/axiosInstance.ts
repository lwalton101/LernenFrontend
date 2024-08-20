// src/axiosInstance.ts

import axios, { AxiosInstance } from 'axios';
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

// Define an Axios instance with default configurations
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        "Token": localStorage.getItem("token")
    },
});


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // Redirect to the login page
            window.location.href = '/login';
        }
        return Promise.reject(error);
    });

export default axiosInstance;

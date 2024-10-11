// api calls and data return

import axios from 'axios';

export const register = async (data) =>{
   
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/register`, data, {
    headers: {
        'Content-Type': "application/x-www-form-urlencoded"
    }
});
    return res;
}

export const login = async (data) =>{
   
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/login`, data, {
    headers: {
        'Content-Type': "application/x-www-form-urlencoded"
    }
});
    return res;
}
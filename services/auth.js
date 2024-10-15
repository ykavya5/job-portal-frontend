// api calls and data return

import axios from "axios";
import { handleApiResponse } from "../helper";
export const register = async (data) => {
    // const formData = new FormData();
    // Object.keys(data).forEach(key => {
    //     formData.append(key, data[key]);
    // })
    // const urlEncodedData = new URLSearchParams(formData).toString()
    try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/register`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    console.log(res);
    return handleApiResponse(res);
  }catch(error){
    console.log(error);
    return handleApiResponse(error.response || {status : 500});
  }
}
export const login = async (data) => {
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/login`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    return res;
}
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.FACTORY_MANAGEMENT_API_URI || `https://127.0.0.1:8000`
});

export default axiosInstance;
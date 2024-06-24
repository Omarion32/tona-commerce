import axios from "axios";

const axiosInstance = axios.create({
     baseURL://"http://localhost:5173",
   "http://127.0.0.1:5001/tona-shopping/us-central1/api"
});
export {axiosInstance};

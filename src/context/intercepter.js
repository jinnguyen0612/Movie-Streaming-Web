import axios from "../api/axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const axiosApiInstance = axios.create({});

axiosApiInstance.interceptors.request.use((config) => {
  let tokensData = JSON.parse(localStorage.getItem("tokens"));
  if(tokensData === null){
    toast.info("Vui lòng đăng nhập để tiếp tục!",{autoClose:3000})
    window.location.href = "/login";
  }
  else {
    config.headers = {
      'Authorization': `Bearer ${tokensData.data.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }
  return config;
});

axiosApiInstance.interceptors.response.use(
  response  => response,
  async (error) => {
    if (error.response.status === 401) {
        localStorage.clear();
        // Xử lý chuyển hướng đến "/login" sau khi token hết hạn
        // Xử lý thông báo token đã hết hạn
      }
      throw error;
    }
);

export default axiosApiInstance;
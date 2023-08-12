import axios from "../api/axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => { 
  const navigate = useNavigate();
 
  const login = async (payload) => {
    const apiResponse = await axios.post(axios.defaults.baseURL + "/login", payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if(apiResponse.data.status === true){
      localStorage.setItem("tokens", JSON.stringify(apiResponse.data));
      window.location.href = "/";
    }
    else
      apiResponse.data.message.startsWith("Invalid")?toast.error("Tên đăng nhập hoặc mật khẩu không chính xác"):toast.error(apiResponse.data.data.message)


  };
  const logout = async () => {
    localStorage.removeItem("tokens");
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export default AuthContext;
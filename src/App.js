import React from "react";
import Aos from "aos";
import {Route,Routes} from 'react-router-dom';
import Home from "./pages/customer/Home"
import About from "./pages/customer/About"
import Contact from "./pages/customer/Contact"
import MoviesPage from "./pages/customer/Movies";
import SingleMovie from "./pages/customer/SingleMovie";
import WatchPage from './pages/customer/WatchPage';
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from './pages/customer/Profile';
import ChangePass from "./pages/customer/Change-Pass";
import Favorite from "./pages/customer/Favorite";
import UserFogotPass from "./pages/UserFogotPass";
import Verify from "./pages/Verify";
import UserChangePass from "./pages/UserChangePass";
import DashBoard from "./pages/admin/DashBoard";
import Genres from './pages/admin/Genres';
import Customer from "./pages/admin/Customer";
import AdminMovies from "./pages/admin/AdminMovies";
import Actor from "./pages/admin/Actor";
import Pricing from "./pages/admin/Pricing";
import Payment from "./pages/admin/Payment";
import AdminProfile from "./pages/admin/AdminProfile";
import { AuthContextProvider } from "./context/AuthProvider";
import jwtDecode from 'jwt-decode';




function App() {
  Aos.init();
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  let permission = '';
  let isLoggedIn = false;

  if (tokens) {
    const decode = jwtDecode(tokens.access_token);
    permission = decode.role;
    isLoggedIn = true;
  }
  else {
    permission = '';
    isLoggedIn = false;
  }
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        {isLoggedIn && permission === 'ADMIN'?
        <>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/manage-movie" element={<AdminMovies/>}/>
        <Route path="/genre" element={<Genres/>}/>
        <Route path="/actor" element={<Actor/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/admin-profile" element={<AdminProfile/>}/>
        </>:
        <>{isLoggedIn && permission === 'CUSTOMER'?
        <>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/password" element={<ChangePass/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/watch/:id" element={<WatchPage/>}/>
        </>
        :<>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/movies/:id" element={<SingleMovie/>}/>
        <Route path='/forgot-pass' element={<UserFogotPass/>} />
        <Route path='/change-pass' element={<UserChangePass/>} />
        <Route path="/verify-code=:code" element={<Verify/>} /> 
        </>}
        </>
        }
        
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
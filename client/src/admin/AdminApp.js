
import { BrowserRouter, Route, Outlet, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Navbar from "./components/layouts/navbar";
import Sidebar from "./components/layouts/sidebar";
import ProtectRoutes from "./ProtectRoutes";
import $404 from "./components/errorpages/404";
import Profile from './pages/profile';
import Chat from "./pages/chat";
import ChatRoom from "./pages/chatRoom/chatRoom";
import Allusers from "./pages/allusers";

const AdminApp = () => {
  /**
   * ----------------------------------------------------------------
   * State variables 
   * ----------------------------------------------------------------
   */
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  /**
   * ----------------------------------------------------------------
   * Load authenticated user
   * ----------------------------------------------------------------
   */
  const loadUser = () => {
    const token = localStorage.getItem("authtoken");
    if (token) {
      console.log('load user', token);
      setIsAuthenticated(true);
    } else {
      console.log('ohh fuck none was logged in ');
    }

  }

  useEffect(() => {
    loadUser();

  }, []);
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Login />} />
        {/* <Route path="*" element={isAuthenticated ? <Outlet /> : <Navigate to="/login" />} /> */}
        {/* <Route  element={isAuthenticated ? <Outlet /> : <Navigate to="/login" />}> */}
        <Route element={<ProtectRoutes />}>

          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/all-users" element={<Allusers />} />
          <Route path="/home" element={<ChatRoom />} />
          <Route path="/dashboard" element={<ChatRoom />} />
          <Route path="/profile-settings" element={<Profile />} />
          <Route path="/chat-section" element={<ChatRoom />} />
        </Route>

        <Route path='/*' element={<$404 />}></Route>

      </Routes>
    </BrowserRouter >
  );
}

export default AdminApp;

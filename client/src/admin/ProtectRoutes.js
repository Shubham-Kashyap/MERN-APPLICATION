import react from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from "./components/layouts/navbar";
import Sidebar from "./components/layouts/sidebar";

export default function () {
    
    const auth = localStorage.getItem('authtoken') ? localStorage.getItem('authtoken') :  null; // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    return auth ?  <> <Navbar /> <Sidebar /> <Outlet /> </> : <Navigate to="/login" />;
}

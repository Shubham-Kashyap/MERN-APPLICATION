import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from "./components/layouts/navbar";
import Sidebar from "./components/layouts/sidebar";
import { useDispatch } from "react-redux";
import { ApiCall } from '../helpers/api_calls';


const _login = (authToken) => {
    return (
        <>
            <Navigate to="/login" />
        </>
    );
}
const _pass = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
        </>
    );
}

export default function () {
    const dispatch = useDispatch();
    async function getLoggedInUserData() {
        const res = await ApiCall('/api/v1/fetch-profile');
        console.log('sjdasjkdas dskadna ', res)
        dispatch({
            type: "setLoggedInUserData",
            payload: res?.response
        });
    }
    useEffect(() => {
        getLoggedInUserData();

    }, [])
    const auth = localStorage.getItem('authtoken') ? localStorage.getItem('authtoken') : null; // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    return auth ? _pass(auth) : _login();
}

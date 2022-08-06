// import logo from './logo.svg';
import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Login from './admin/pages/login';
import AdminApp from './admin/AdminApp';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

 
  return (
    <>
      <AdminApp />
    </>
  );
}

export default App;



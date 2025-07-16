

import React from 'react'
import { Routes, Route, Navigate , BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
// import  Sidebar  from './components/MySidebar';
import MySidebar from './components/MySidebar';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={[<Navbar/>,<MySidebar/>]}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/sidebar" element={<MySidebar/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App









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
import FirstPage from './components/firstPage';
import Employee from './components/Employee';
// import Calender from './components/Calender';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={[<Navbar/>,<MySidebar/>,<FirstPage/>]}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/sidebar" element={<MySidebar/>}/>
      <Route path="/employee" element={<Employee/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App








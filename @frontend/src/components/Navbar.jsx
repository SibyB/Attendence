import React from 'react'
import logo from '../assets/logo.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  return (
    <div>

       
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src={logo} className='logo'/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end gap-0" id="navbarNav">
     <FontAwesomeIcon icon={faUser} className='icon'/>
     <IoMdLogOut icon={IoMdLogOut} className='logicon' />
    
   
  </div>
</nav>

      
    </div>
  )
}

export default Navbar





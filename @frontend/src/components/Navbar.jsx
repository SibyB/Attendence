// import React from 'react'
// import logo from '../assets/logo.png';
// import './navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { IoMdLogOut } from "react-icons/io";

// const Navbar = () => {
//   return (
//     <div>

       
// <nav className="navbar navbar-expand-lg navbar-light bg-light h-25">
//   <img src={logo} className='logo'/>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse justify-content-end gap-0" id="navbarNav">
//      <FontAwesomeIcon icon={faUser} className='icon'/>
//      {/* <IoMdLogOut icon={IoMdLogOut} className='logicon' /> */}
//      <IoMdLogOut className="logicon" />
    
   
//   </div>
// </nav>

      
//     </div>
//   )
// }

// export default Navbar






// Navbar.jsx
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IoMdLogOut } from "react-icons/io";


const MyNavbar = () => (
  <Navbar expand="lg" bg="light" className="py-2">
    <Container>
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <FontAwesomeIcon icon={faUser} className="me-3 icon" />
        <IoMdLogOut className="logicon" />
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNavbar;







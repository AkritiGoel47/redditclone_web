import React,{useState} from 'react'
import {Link} from "react-router-dom"
import NavbarCSS from'../assets/styles/Navbar.module.css';
import { FaReddit } from "react-icons/fa6";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
   
     <nav className={NavbarCSS.navbar}>
      <div className={NavbarCSS.navbar_logo}>
      <FaReddit />reddit</div>
        
   
    <Link to='/careers'className={NavbarCSS.navbar_links}>Careers</Link>
    <Link to='/brand'className={NavbarCSS.navbar_links}>Brand</Link>
    <Link to='/transparency'className={NavbarCSS.navbar_links}>Transparency</Link>
    <Link to='/press'className={NavbarCSS.navbar_links}>Press</Link>
    

<div className={NavbarCSS.navbar_search}>
        <input className={NavbarCSS.input} type="text" placeholder="Search Reddit" />
      </div> 
      <div className={NavbarCSS.navbar_toggle} onClick={toggleNavbar}>
        {/* <span></span>
        <span></span>
        <span></span> */}
      </div>
   
   </nav>
  );
}

export default Navbar

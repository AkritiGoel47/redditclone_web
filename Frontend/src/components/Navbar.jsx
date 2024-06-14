import React,{useState} from 'react'
import {Link} from "react-router-dom"
import NavbarCSS from'../assets/styles/Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
   
     <nav className={NavbarCSS.navbar}>
      <div className={NavbarCSS.navbar_logo}>
         <p>
   
   
    <Link to='/careers'>Careers</Link>
    <Link to='/brand'>Brand</Link>
    <Link to='/transparency'>Transparency</Link>
    <Link to='/press'>Press</Link>
    </p>
</div>
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

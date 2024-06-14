import React,{useState} from 'react'
import {Link} from "react-router-dom"
import styles from'../assets/styles/Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
   
     <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
         {/* <img src='https://images.app.goo.gl/pub7KSz8tavdAFMg6.jpg' width={20} height={20} />Reddit
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
    <Link to='/'>Register</Link>
    {/* <Link to='/register'>Register</Link>
    <Link to='/login'>Login</Link> */}
   
   
    <Link to='/careers'>Careers</Link>
    <Link to='/brand'>Brand</Link>
    <Link to='/transparency'>Transparency</Link>
    <Link to='/press'>Press</Link>
</div>
<div className={styles.navbar_search}>
        <input className={styles.input} type="text" placeholder="Search Reddit" />
      </div> 
      <div className={styles.navbar_toggle} onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
   
   </nav>
  );
}

export default Navbar

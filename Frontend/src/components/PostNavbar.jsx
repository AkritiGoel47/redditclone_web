import React from 'react'
import PostNavbarCSS from '../assets/styles/PostNavbar.module.css'
import { FaReddit } from "react-icons/fa6";

function PostNavbar() {
  return (
    <nav className={PostNavbarCSS.navbar}>
      <div className={PostNavbarCSS.navbar_logo}>
      <FaReddit className={PostNavbarCSS.logo}/>reddit</div>
         <div classname ={PostNavbarCSS.navbar_links} >
            </div>
          
            
            </nav>
   
  )
}

export default PostNavbar

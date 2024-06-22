import React from 'react'
import PostNavbarCSS from '../assets/styles/PostNavbar.module.css'
import { FaReddit } from "react-icons/fa6";
import { IoIosSearch,IoIosAdd  } from "react-icons/io";
import {Link} from "react-router-dom"

function PostNavbar() {
  return (
    <nav className={PostNavbarCSS.navbar}>
      <div className={PostNavbarCSS.navbar_logo}>
      <FaReddit className={PostNavbarCSS.icon}/><p className={PostNavbarCSS.first}>reddit</p></div>
      <div className={PostNavbarCSS.navbar_search}>
      <IoIosSearch className={PostNavbarCSS.icon2}/>
        <input className={PostNavbarCSS.input} type="text" placeholder="Search Reddit" />
      </div> 
      <IoIosAdd className={PostNavbarCSS.plus}/>
   
    
   <Link to="/create" className={PostNavbarCSS.create}> Create</Link>
  
  
    
           
            
            </nav>
   
  )
}

export default PostNavbar

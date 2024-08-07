import React from 'react'
import PostNavbarCSS from '../assets/styles/PostNavbar.module.css'
import { FaReddit } from "react-icons/fa6";
import { IoIosSearch,IoIosAdd  } from "react-icons/io";
import {Link} from "react-router-dom"
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function PostNavbar() {
  return (
    <nav className={PostNavbarCSS.navbar}>
      <div className={PostNavbarCSS.navbar_logo}>
      <FaReddit className={PostNavbarCSS.icon}/><p className={PostNavbarCSS.first}>reddit</p></div>
      <div className={PostNavbarCSS.navbar_search}>
      <IoIosSearch className={PostNavbarCSS.icon2}/>
        <input className={PostNavbarCSS.input} type="text" placeholder="Search Reddit" />
      </div> 
<div className={PostNavbarCSS.plus}>
     <Link to="/chat"> <IoChatbubbleEllipsesSharp   /></Link>
      <IoIosAdd />
      </div>
   
    
   <Link to="/create" className={PostNavbarCSS.create}> Create</Link>
  
  
    
           
            
            </nav>
   
  )
}

export default PostNavbar

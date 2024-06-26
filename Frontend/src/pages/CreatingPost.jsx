import React from 'react'
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import PostCSS from "../assets/styles/CreatePost.module.css"
import PostNavbar from "../components/PostNavbar";
import { IoIosAdd, IoLogoReddit } from "react-icons/io";
import { FiTool } from "react-icons/fi";
import { VscEdit } from "react-icons/vsc";
import { BsTransparency } from "react-icons/bs";
import { TbBrandAppgallery } from "react-icons/tb";
function CreatingPost() {

    const url = "http://localhost:8000";
   
    const [data, setData] = useState({ title: "", description: ""});
  
    
    const createpost = async (e) => {
      e.preventDefault();
  
      const { title,description } = data;
      if (!title || !description) {
        toast.error('Title and description are required');
        return;
      }

      try {
        const response = await axios.post(
          `${url}/api/create-post`, 
          {
            title,
            description,
            
          },
          { withCredentials: true } 
        );
        console.log(response);
        if (response.status === 200) {
          setData({ title: "", description: "" });
         
          toast.success("Post created successfully and status is pending!");
          
          
        } else if (response.data.error) {
          toast.error(response.data.error);
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred. Please try again.");
      }
  
      
    };
  return (
    <>
   <PostNavbar />
      <div className={PostCSS.background}>
        <div className={PostCSS.inside}>
          <p className={PostCSS.heading}>
            COMMUNITIES
          </p>
          <div className={PostCSS.both}>
            <IoIosAdd className={PostCSS.icon} />
            <p className={PostCSS.content}>
              Create a community
            </p>
          </div>
          <p className={PostCSS.heading2}>
            RESOURCES
          </p>
          <div className={PostCSS.both}>
            <IoLogoReddit className={PostCSS.icon2} />
            <Link to="/home"className={PostCSS.content2}>About Reddit</Link>
          </div>
          <div className={PostCSS.both}>
            <FiTool className={PostCSS.icon2} />
            <Link to="/careers"className={PostCSS.content2}>Careers</Link>
          </div>
          <div className={PostCSS.both}>
            <TbBrandAppgallery className={PostCSS.icon2} />
            <Link to="/brand"className={PostCSS.content2}>Brand</Link>
          </div>
          <div className={PostCSS.both}>
            <BsTransparency className={PostCSS.icon2} />
            <Link to="/transparency"className={PostCSS.content2}>Transparency</Link>
          </div>
          <div className={PostCSS.both}>
            <VscEdit className={PostCSS.icon2} />
            <Link to="/press"className={PostCSS.content2}>Press</Link>
          </div>
        </div>
     
    
    
    
    
      <div className={PostCSS.form_box }>
      
      <form onSubmit={createpost}>
        
      <div className={PostCSS.input_box}>
        <input
          className={PostCSS.input}
          type="text"
          placeholder="title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}

        />
       
        </div>
       <div className={PostCSS.input_box2}>
        <input
          className={PostCSS.input2}
          type="text"
          placeholder="description"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        
        </div>
        
       
        <button type="submit"className={PostCSS.button}>Create</button>
        


      </form>
      </div>
    </div>
    
   
    
    </>
  
  )
}

export default CreatingPost;

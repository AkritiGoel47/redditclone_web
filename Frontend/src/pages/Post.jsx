
import React, { useEffect,useState } from 'react';
import PostCSS from "../assets/styles/Post.module.css";
import PostNavbar from '../components/PostNavbar';
import axios from "axios";
import { IoIosAdd, IoLogoReddit } from "react-icons/io";
import { FiTool } from "react-icons/fi";
import { VscEdit } from "react-icons/vsc";
import { BsTransparency } from "react-icons/bs";
import { TbBrandAppgallery } from "react-icons/tb";
import { Link } from "react-router-dom";

  
function Post() {
  const url = "http://localhost:8000";
  const [posts, setPosts] = useState([]);
  
  
  const fetchposts = async () => {
    try {
      const response = await fetch(`${url}/getposts`);
      
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
console.log("Posts Data: ", data)
      setPosts(data.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchposts();
  }, []);
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
            <Link to="/home" className={PostCSS.content2}>About Reddit</Link>
          </div>
          <div className={PostCSS.both}>
            <FiTool className={PostCSS.icon2} />
            <Link to="/careers"className={PostCSS.content2}>Careers</Link>
          </div>
          <div className={PostCSS.both}>
            <TbBrandAppgallery className={PostCSS.icon2} />
            <Link to="/brand" className={PostCSS.content2}>Brand</Link>
          </div>
          <div className={PostCSS.both}>
            <BsTransparency className={PostCSS.icon2} />
            <Link to="/transparency" className={PostCSS.content2}>Transparency</Link>
          </div>
          <div className={PostCSS.both}>
            <VscEdit className={PostCSS.icon2} />
            <Link to="/press" className={PostCSS.content2}>Press</Link>
          </div>
        </div>

        <div className={PostCSS.rightSide}>
          <div className={PostCSS.form_box}>
            {posts.length > 0 ? (
              posts.map(post => (
                <div key={post.id} className={PostCSS.post}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              ))
            ) : (
              <p>No posts available</p>
            )}
          </div>
        </div>


        
        
       
        


    
    
     
     

      </div>
    </>
  );
}

export default Post;
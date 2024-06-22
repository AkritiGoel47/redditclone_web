
import React from 'react';
import PostCSS from "../assets/styles/Post.module.css";
import PostNavbar from '../components/PostNavbar';
import { IoIosAdd, IoLogoReddit } from "react-icons/io";
import { FiTool } from "react-icons/fi";
import { VscEdit } from "react-icons/vsc";
import { BsTransparency } from "react-icons/bs";
import { TbBrandAppgallery } from "react-icons/tb";
import { Link } from "react-router-dom";

function Post() {
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
            <Link to="/home"><p className={PostCSS.content2}>About Reddit</p></Link>
          </div>
          <div className={PostCSS.both}>
            <FiTool className={PostCSS.icon2} />
            <Link to="/careers"><p className={PostCSS.content2}>Careers</p></Link>
          </div>
          <div className={PostCSS.both}>
            <TbBrandAppgallery className={PostCSS.icon2} />
            <Link to="/brand"><p className={PostCSS.content2}>Brand</p></Link>
          </div>
          <div className={PostCSS.both}>
            <BsTransparency className={PostCSS.icon2} />
            <Link to="/transparency"><p className={PostCSS.content2}>Transparency</p></Link>
          </div>
          <div className={PostCSS.both}>
            <VscEdit className={PostCSS.icon2} />
            <Link to="/press"><p className={PostCSS.content2}>Press</p></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
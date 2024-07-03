
import React, { useEffect,useState } from 'react';
import PostCSS from "../assets/styles/Post.module.css";
import PostNavbar from '../components/PostNavbar';
import axios from "axios";
import { IoIosAdd, IoLogoReddit } from "react-icons/io";
import { FiTool } from "react-icons/fi";
import { VscEdit } from "react-icons/vsc";
import { BsTransparency } from "react-icons/bs";
import { TbBrandAppgallery } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";
import { BiSolidUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";



  
function Post() {
  const url = "http://localhost:8000";
  const [posts, setPosts] = useState([]);
  const [user_id, setUserId] = useState(null);

  useEffect(() => {
    
    const fetchUserId = async () => {
      try {
        const response = await axios.get(`${url}/api/get-userid`, {
          withCredentials: true 
        });

        if (response.data.success) {
          setUserId(response.data.user_id); 
          console.log(response.data);
        } else {
          throw new Error(`Failed to fetch user_id: ${response.data.msg}`);
        }
      } catch (error) {
        console.error("Error fetching user_id:", error.message);
      }
    };

    fetchUserId(); 
  }, []);
  
  
  const fetchposts = async () => {
    try {
      const response = await axios.get(`${url}/api/get-post`);
      
      
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.data;
console.log("Posts Data: ", data)
      setPosts(data.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const addComment = async (postId, userId, content) => {
    try {
      const response = await axios.post(`${url}/api/get-post/comment`, {
        userId,
        content,
        postId
      },{ withCredentials: true });

      if (!response.data.success) {
        throw new Error(`Failed to add comment: ${response.data.msg}`);
      }

      fetchposts(); // Refresh posts after adding a comment
    } catch (error) {
      console.error("Error adding comment:", error.message);
    }
  };

  const likePost = async (postId, userId) => {
    try {
      

      const response = await axios.post(`${url}/api/get-post/like`, {
        userId,
        postId
      },{ withCredentials: true });

      if (!response.data.success) {
        throw new Error(`Failed to like post: ${response.data.msg}`);
      }

      fetchposts(); 
    }  catch (error) {
      if (error.response) {
        
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
       
        console.error('Error request:', error.request);
      } else {
       
        console.error('Error message:', error.message);
      }
    }
  };

  const likeComment = async (postId, commentId, userId) => {
    try {
      const response = await axios.post(`${url}/api/get-post/commentlike`, {
        userId,
        postId,
        commentId
      },{ withCredentials: true });

      if (!response.data.success) {
        throw new Error(`Failed to like comment: ${response.data.msg}`);
      }

      fetchposts(); // Refresh posts after liking a comment
    } catch (error) {
      console.error("Error liking comment:", error.message);
    }
  };

  const addReply = async (postId, commentId, userId, content) => {
    try {
      const response = await axios.post(`${url}/api/get-post/commentreply`, {
        userId,
        content,
        commentId,
        postId
      },{ withCredentials: true });

      if (!response.data.success) {
        throw new Error(`Failed to add reply: ${response.data.msg}`);
      }

      fetchposts(); // Refresh posts after adding a reply
    } catch (error) {
      console.error("Error adding reply:", error.message);
    }
  };
  const upvotePost = async (postId, userId) => {
    try {
      const response = await axios.post(`${url}/api/get-post/upvote`, {
        userId,
        postId
      },{ withCredentials: true });

      if (!response.data.success) {
        throw new Error(`Failed to upvote post: ${response.data.msg}`);
      }

      fetchposts(); // Refresh posts after upvoting a post
    } catch (error) {
      console.error("Error upvoting post:", error.message);
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
            
        <Link to="/community" className={PostCSS.content} >  Create a community</Link>
            
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
                  <button onClick={() => likePost(post._id, user_id
   
 
)}><AiFillLike /> Like</button>
                  <button onClick={() => upvotePost(post._id, user_id)}><BiSolidUpvote />
                  Upvote</button>
                  <h4>Comments</h4>
                  {post.comment.map(comment => (
                    <div key={comment._id} className={PostCSS.comment}>
                      <p>{comment.content}</p>
                      <button onClick={() => likeComment(post._id, comment._id, user_id)}><AiFillLike /> Like</button>
                      <h5>Replies</h5>
                      {comment.reply.map(reply => (
                        <div key={reply._id} className={PostCSS.reply}>
                          <p>{reply.content}</p>
                        </div>
                      ))}
                      <form onSubmit={(e) => { e.preventDefault(); addReply(post._id, comment._id, user_id, 'reply_content'); }}>
                        <input type="text" placeholder="Reply..." />
                        <button type="submit"> Reply</button>
                      </form>
                    </div>
                  ))}
                  <form onSubmit={(e) => { e.preventDefault(); addComment(post._id, user_id, 'comment_content'); }}>
                    <input type="text" placeholder="Comment..." />
                    <button type="submit"> Comment</button>
                  </form>
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